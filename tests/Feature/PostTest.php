<?php

declare(strict_types=1);

use App\Models\Category;
use App\Models\Post;
use App\Models\User;

use function Pest\Laravel\actingAs;
use function Pest\Laravel\assertDatabaseHas;
use function Pest\Laravel\assertDatabaseMissing;
use function Pest\Laravel\delete;
use function Pest\Laravel\get;
use function Pest\Laravel\post;
use function Pest\Laravel\put;

beforeEach(function (): void {
    $this->withoutVite();
    actingAs(User::factory()->create());
});

it('lists posts', function (): void {
    Post::factory(3)->create();

    get(route('posts.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('posts/index')->has('posts', 3)->has('categories'));
});

it('stores a new draft post', function (): void {
    post(route('posts.store'), [
        'title' => 'My First Post',
        'content' => 'Hello world',
        'status' => 'draft',
    ])->assertRedirect(route('posts.index'));

    assertDatabaseHas('posts', ['title' => 'My First Post', 'slug' => 'my-first-post', 'status' => 'draft']);
});

it('sets published_at when storing a published post', function (): void {
    post(route('posts.store'), [
        'title' => 'Published Post',
        'content' => 'Hello world',
        'status' => 'published',
    ])->assertRedirect(route('posts.index'));

    $dbPost = Post::where('slug', 'published-post')->first();
    expect($dbPost->published_at)->not->toBeNull();
});

it('generates a unique slug on store', function (): void {
    Post::factory()->create(['title' => 'Hello World', 'slug' => 'hello-world']);

    post(route('posts.store'), [
        'title' => 'Hello World',
        'content' => 'Duplicate slug test',
        'status' => 'draft',
    ])->assertRedirect(route('posts.index'));

    assertDatabaseHas('posts', ['slug' => 'hello-world-2']);
});

it('stores a post with a category', function (): void {
    $category = Category::factory()->create();

    post(route('posts.store'), [
        'title' => 'Categorized Post',
        'content' => 'Some content',
        'status' => 'draft',
        'category_id' => $category->id,
    ])->assertRedirect(route('posts.index'));

    assertDatabaseHas('posts', ['category_id' => $category->id]);
});

it('shows a post', function (): void {
    $post = Post::factory()->create();

    get(route('posts.show', $post))->assertOk()->assertInertia(fn ($page) => $page->component('posts/show'));
});

it('updates a post', function (): void {
    $post = Post::factory()->create();

    put(route('posts.update', $post), [
        'title' => 'Updated Title',
        'content' => 'Updated content',
        'status' => 'draft',
    ])->assertRedirect(route('posts.index'));

    assertDatabaseHas('posts', ['title' => 'Updated Title']);
});

it('sets published_at when updating status to published', function (): void {
    $post = Post::factory()->draft()->create();

    put(route('posts.update', $post), [
        'title' => $post->title,
        'content' => $post->content,
        'status' => 'published',
    ])->assertRedirect(route('posts.index'));

    expect($post->fresh()->published_at)->not->toBeNull();
});

it('deletes a post', function (): void {
    $post = Post::factory()->create();

    delete(route('posts.destroy', $post))->assertRedirect(route('posts.index'));

    assertDatabaseMissing('posts', ['id' => $post->id]);
});

it('validates required fields on store', function (): void {
    post(route('posts.store'), [])->assertSessionHasErrors(['title', 'content', 'status']);
});

it('requires authentication for post routes', function (): void {
    auth()->logout();
    $post = Post::factory()->create();

    get(route('posts.index'))->assertRedirect(route('login'));
    post(route('posts.store'), [])->assertRedirect(route('login'));
    put(route('posts.update', $post), [])->assertRedirect(route('login'));
    delete(route('posts.destroy', $post))->assertRedirect(route('login'));
});
