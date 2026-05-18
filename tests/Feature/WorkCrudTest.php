<?php

declare(strict_types=1);

use App\Enums\EmploymentType;
use App\Models\User;
use App\Models\Work;

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

it('lists works', function (): void {
    Work::factory(3)->create();

    get(route('works.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('works/index')->has('works', 3));
});

it('shows the create form', function (): void {
    get(route('works.create'))->assertOk()->assertInertia(fn ($page) => $page->component('works/create'));
});

it('stores a new work', function (): void {
    $payload = [
        'title' => 'Senior Developer',
        'company' => 'Acme Corp',
        'logo' => 'https://example.com/logo.png',
        'location' => 'Remote',
        'employment_type' => EmploymentType::FullTime->value,
        'start_date' => '2023-01-01',
        'end_date' => null,
        'is_current' => true,
        'description' => 'Building great things.',
    ];

    post(route('works.store'), $payload)->assertRedirect(route('works.index'));

    assertDatabaseHas('works', ['title' => 'Senior Developer']);
});

it('shows a work', function (): void {
    $work = Work::factory()->create();

    get(route('works.show', $work))->assertOk()->assertInertia(fn ($page) => $page->component('works/show'));
});

it('shows the edit form', function (): void {
    $work = Work::factory()->create();

    get(route('works.edit', $work))->assertOk()->assertInertia(fn ($page) => $page->component('works/edit'));
});

it('updates a work', function (): void {
    $work = Work::factory()->create();

    $payload = [
        'title' => 'Updated Title',
        'company' => $work->company,
        'logo' => $work->logo,
        'location' => $work->location,
        'employment_type' => EmploymentType::Contract->value,
        'start_date' => $work->start_date->toDateString(),
        'end_date' => null,
        'is_current' => true,
        'description' => $work->description,
    ];

    put(route('works.update', $work), $payload)->assertRedirect(route('works.index'));

    assertDatabaseHas('works', ['title' => 'Updated Title']);
});

it('deletes a work', function (): void {
    $work = Work::factory()->create();

    delete(route('works.destroy', $work))->assertRedirect(route('works.index'));

    assertDatabaseMissing('works', ['id' => $work->id]);
});

it('validates required fields on store', function (): void {
    post(route('works.store'), [])
        ->assertSessionHasErrors(['title', 'company', 'logo', 'location', 'employment_type', 'start_date', 'is_current', 'description']);
});
