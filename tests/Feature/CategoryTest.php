<?php

declare(strict_types=1);

use App\Models\Category;
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

it('lists categories', function (): void {
    Category::factory(3)->create();

    get(route('categories.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('categories/index')->has('categories', 3));
});

it('shows the create form', function (): void {
    get(route('categories.create'))->assertOk()->assertInertia(fn ($page) => $page->component('categories/create'));
});

it('stores a new category', function (): void {
    post(route('categories.store'), ['name' => 'Technology'])
        ->assertRedirect(route('categories.index'));

    assertDatabaseHas('categories', ['name' => 'Technology', 'slug' => 'technology']);
});

it('generates a unique slug on store', function (): void {
    Category::factory()->create(['name' => 'Tech', 'slug' => 'tech']);

    post(route('categories.store'), ['name' => 'Tech'])
        ->assertRedirect(route('categories.index'));

    assertDatabaseHas('categories', ['slug' => 'tech-2']);
});

it('shows a category', function (): void {
    $category = Category::factory()->create();

    get(route('categories.show', $category))->assertOk()->assertInertia(fn ($page) => $page->component('categories/show'));
});

it('shows the edit form', function (): void {
    $category = Category::factory()->create();

    get(route('categories.edit', $category))->assertOk()->assertInertia(fn ($page) => $page->component('categories/edit'));
});

it('updates a category', function (): void {
    $category = Category::factory()->create();

    put(route('categories.update', $category), ['name' => 'Design'])
        ->assertRedirect(route('categories.index'));

    assertDatabaseHas('categories', ['name' => 'Design', 'slug' => 'design']);
});

it('deletes a category', function (): void {
    $category = Category::factory()->create();

    delete(route('categories.destroy', $category))->assertRedirect(route('categories.index'));

    assertDatabaseMissing('categories', ['id' => $category->id]);
});

it('requires authentication for all category routes', function (): void {
    auth()->logout();
    $category = Category::factory()->create();

    get(route('categories.index'))->assertRedirect(route('login'));
    post(route('categories.store'), ['name' => 'X'])->assertRedirect(route('login'));
    put(route('categories.update', $category), ['name' => 'X'])->assertRedirect(route('login'));
    delete(route('categories.destroy', $category))->assertRedirect(route('login'));
});
