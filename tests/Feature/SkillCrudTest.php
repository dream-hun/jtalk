<?php

declare(strict_types=1);

use App\Models\Skill;
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

it('lists skills', function (): void {
    Skill::factory(3)->create();

    get(route('skills.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('skills/index')->has('skills', 3));
});

it('shows the create form', function (): void {
    get(route('skills.create'))->assertOk()->assertInertia(fn ($page) => $page->component('skills/create'));
});

it('stores a new skill', function (): void {
    post(route('skills.store'), ['name' => 'Laravel', 'icon' => 'laravel'])
        ->assertRedirect(route('skills.index'));

    assertDatabaseHas('skills', ['name' => 'Laravel']);
});

it('shows a skill', function (): void {
    $skill = Skill::factory()->create();

    get(route('skills.show', $skill))->assertOk()->assertInertia(fn ($page) => $page->component('skills/show'));
});

it('shows the edit form', function (): void {
    $skill = Skill::factory()->create();

    get(route('skills.edit', $skill))->assertOk()->assertInertia(fn ($page) => $page->component('skills/edit'));
});

it('updates a skill', function (): void {
    $skill = Skill::factory()->create();

    put(route('skills.update', $skill), ['name' => 'React', 'icon' => 'react'])
        ->assertRedirect(route('skills.index'));

    assertDatabaseHas('skills', ['name' => 'React']);
});

it('deletes a skill', function (): void {
    $skill = Skill::factory()->create();

    delete(route('skills.destroy', $skill))->assertRedirect(route('skills.index'));

    assertDatabaseMissing('skills', ['id' => $skill->id]);
});

it('validates unique name on store', function (): void {
    Skill::factory()->create(['name' => 'Laravel']);

    post(route('skills.store'), ['name' => 'Laravel'])
        ->assertSessionHasErrors(['name']);
});

it('allows same name when updating own record', function (): void {
    $skill = Skill::factory()->create(['name' => 'Laravel']);

    put(route('skills.update', $skill), ['name' => 'Laravel', 'icon' => 'laravel'])
        ->assertRedirect(route('skills.index'));
});
