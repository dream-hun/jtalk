<?php

declare(strict_types=1);

use App\Models\Post;

use function Pest\Laravel\get;

beforeEach(function (): void {
    $this->withoutVite();
});

it('shows the blog index with published posts only', function (): void {
    Post::factory()->published()->create();
    Post::factory()->draft()->create();

    get(route('blog.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('blog/index')->has('posts', 1));
});

it('shows a published blog post', function (): void {
    $post = Post::factory()->published()->create();

    get(route('blog.show', $post->slug))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('blog/show')->where('post.slug', $post->slug));
});

it('returns 404 for a draft post on the public blog', function (): void {
    $post = Post::factory()->draft()->create();

    get(route('blog.show', $post->slug))->assertNotFound();
});

it('returns 404 for a non-existent slug', function (): void {
    get(route('blog.show', 'this-does-not-exist'))->assertNotFound();
});

it('blog index is publicly accessible', function (): void {
    get(route('blog.index'))->assertOk();
});
