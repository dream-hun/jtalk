<?php

declare(strict_types=1);

use App\Models\Setting;
use App\Models\User;

use function Pest\Laravel\actingAs;
use function Pest\Laravel\assertDatabaseHas;
use function Pest\Laravel\get;
use function Pest\Laravel\put;

beforeEach(function (): void {
    $this->withoutVite();
    actingAs(User::factory()->create());
    Setting::factory()->create();
});

it('shows the edit form', function (): void {
    get(route('setting.edit'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('setting/edit')->has('setting'));
});

it('updates the setting', function (): void {
    $payload = [
        'name' => 'portfolio',
        'title' => 'My Updated Portfolio',
        'description' => 'An updated description.',
        'email' => 'updated@example.com',
        'phone' => '+1 (555) 123-4567',
        'address' => 'New York, NY',
    ];

    put(route('setting.update'), $payload)->assertRedirect(route('setting.edit'));

    assertDatabaseHas('settings', ['title' => 'My Updated Portfolio']);
});

it('validates required fields on update', function (): void {
    put(route('setting.update'), [])
        ->assertSessionHasErrors(['name', 'title', 'description', 'email', 'phone', 'address']);
});

it('uses uuid as route key', function (): void {
    expect((new Setting)->getRouteKeyName())->toBe('uuid');
});
