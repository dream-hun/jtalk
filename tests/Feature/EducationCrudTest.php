<?php

declare(strict_types=1);

use App\Models\Education;
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

it('lists education records', function (): void {
    Education::factory(2)->create();

    get(route('education.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('education/index')->has('education', 2));
});

it('shows the create form', function (): void {
    get(route('education.create'))->assertOk()->assertInertia(fn ($page) => $page->component('education/create'));
});

it('stores a new education record', function (): void {
    $payload = [
        'institution' => 'MIT',
        'logo' => 'https://example.com/logo.png',
        'degree' => 'Bachelor of Science in Computer Science',
        'start_date' => '2018-09-01',
        'end_date' => '2022-06-01',
        'is_current' => false,
    ];

    post(route('education.store'), $payload)->assertRedirect(route('education.index'));

    assertDatabaseHas('education', ['institution' => 'MIT']);
});

it('shows an education record', function (): void {
    $education = Education::factory()->create();

    get(route('education.show', $education))->assertOk()->assertInertia(fn ($page) => $page->component('education/show'));
});

it('shows the edit form', function (): void {
    $education = Education::factory()->create();

    get(route('education.edit', $education))->assertOk()->assertInertia(fn ($page) => $page->component('education/edit'));
});

it('updates an education record', function (): void {
    $education = Education::factory()->create();

    $payload = [
        'institution' => 'Stanford University',
        'logo' => $education->logo,
        'degree' => $education->degree,
        'start_date' => $education->start_date->toDateString(),
        'end_date' => $education->end_date?->toDateString(),
        'is_current' => $education->is_current,
    ];

    put(route('education.update', $education), $payload)->assertRedirect(route('education.index'));

    assertDatabaseHas('education', ['institution' => 'Stanford University']);
});

it('deletes an education record', function (): void {
    $education = Education::factory()->create();

    delete(route('education.destroy', $education))->assertRedirect(route('education.index'));

    assertDatabaseMissing('education', ['id' => $education->id]);
});

it('validates required fields on store', function (): void {
    post(route('education.store'), [])
        ->assertSessionHasErrors(['institution', 'logo', 'degree', 'start_date']);
});
