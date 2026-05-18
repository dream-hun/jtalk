<?php

declare(strict_types=1);

use App\Enums\SocialStatus;
use App\Models\Social;
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

it('lists socials', function (): void {
    Social::factory(3)->create();

    get(route('socials.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('socials/index')->has('socials', 3));
});

it('shows the create form', function (): void {
    get(route('socials.create'))->assertOk()->assertInertia(fn ($page) => $page->component('socials/create'));
});

it('stores a new social', function (): void {
    $payload = [
        'platform' => 'github',
        'url' => 'https://github.com/example',
        'icon' => 'github',
        'status' => SocialStatus::Active->value,
    ];

    post(route('socials.store'), $payload)->assertRedirect(route('socials.index'));

    assertDatabaseHas('socials', ['platform' => 'github']);
});

it('shows a social', function (): void {
    $social = Social::factory()->create();

    get(route('socials.show', $social))->assertOk()->assertInertia(fn ($page) => $page->component('socials/show'));
});

it('shows the edit form', function (): void {
    $social = Social::factory()->create();

    get(route('socials.edit', $social))->assertOk()->assertInertia(fn ($page) => $page->component('socials/edit'));
});

it('updates a social', function (): void {
    $social = Social::factory()->create();

    $payload = [
        'platform' => $social->platform,
        'url' => $social->url,
        'icon' => 'updated-icon',
        'status' => SocialStatus::Inactive->value,
    ];

    put(route('socials.update', $social), $payload)->assertRedirect(route('socials.index'));

    assertDatabaseHas('socials', ['platform' => $social->platform, 'icon' => 'updated-icon']);
});

it('deletes a social', function (): void {
    $social = Social::factory()->create();

    delete(route('socials.destroy', $social))->assertRedirect(route('socials.index'));

    assertDatabaseMissing('socials', ['id' => $social->id]);
});

it('validates unique platform on store', function (): void {
    Social::factory()->create(['platform' => 'github']);

    post(route('socials.store'), ['platform' => 'github', 'url' => 'https://github.com/other'])
        ->assertSessionHasErrors(['platform']);
});
