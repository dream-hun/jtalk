<?php

declare(strict_types=1);

use App\Enums\ProjectStatus;
use App\Enums\ProjectType;
use App\Models\Project;
use App\Models\Tag;
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

it('lists projects', function (): void {
    Project::factory(3)->create();

    get(route('projects.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('projects/index')->has('projects', 3));
});

it('shows the create form', function (): void {
    get(route('projects.create'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('projects/create')->has('tags'));
});

it('stores a new project', function (): void {
    $tag = Tag::factory()->create();

    $payload = [
        'title' => 'My Portfolio App',
        'description' => 'A great project.',
        'type' => ProjectType::WebApplication->value,
        'source_code_url' => 'https://github.com/example/repo',
        'starting_date' => '2025-01-01',
        'ending_date' => '2025-06-01',
        'live_url' => 'https://example.com',
        'project_status' => ProjectStatus::Completed->value,
        'tag_ids' => [$tag->id],
    ];

    post(route('projects.store'), $payload)
        ->assertRedirect(route('projects.index'));

    assertDatabaseHas('projects', ['title' => 'My Portfolio App']);

    $project = Project::query()->where('title', 'My Portfolio App')->first();
    expect($project->tags)->toHaveCount(1);
});

it('shows a project', function (): void {
    $project = Project::factory()->create();

    get(route('projects.show', $project))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('projects/show')->has('project'));
});

it('shows the edit form', function (): void {
    $project = Project::factory()->create();

    get(route('projects.edit', $project))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('projects/edit')->has('project')->has('tags'));
});

it('updates a project', function (): void {
    $project = Project::factory()->create();
    $tag = Tag::factory()->create();

    $payload = [
        'title' => 'Updated Title',
        'description' => 'Updated description.',
        'type' => ProjectType::Api->value,
        'source_code_url' => null,
        'starting_date' => '2025-02-01',
        'ending_date' => '2025-07-01',
        'live_url' => null,
        'project_status' => ProjectStatus::InProgress->value,
        'tag_ids' => [$tag->id],
    ];

    put(route('projects.update', $project), $payload)
        ->assertRedirect(route('projects.index'));

    assertDatabaseHas('projects', ['title' => 'Updated Title']);
    expect($project->fresh('tags')->tags)->toHaveCount(1);
});

it('deletes a project', function (): void {
    $project = Project::factory()->create();

    delete(route('projects.destroy', $project))
        ->assertRedirect(route('projects.index'));

    assertDatabaseMissing('projects', ['id' => $project->id]);
});

it('validates required fields on store', function (): void {
    post(route('projects.store'), [])
        ->assertSessionHasErrors(['title', 'type', 'starting_date', 'ending_date', 'project_status']);
});

it('validates ending_date is after starting_date', function (): void {
    $payload = [
        'title' => 'Test',
        'type' => ProjectType::WebApplication->value,
        'starting_date' => '2025-06-01',
        'ending_date' => '2025-01-01',
        'project_status' => ProjectStatus::Completed->value,
    ];

    post(route('projects.store'), $payload)
        ->assertSessionHasErrors(['ending_date']);
});

it('syncs tags when updating', function (): void {
    $project = Project::factory()->create();
    $oldTag = Tag::factory()->create();
    $newTag = Tag::factory()->create();
    $project->tags()->attach($oldTag->id);

    $payload = [
        'title' => $project->title,
        'description' => $project->description,
        'type' => $project->type->value,
        'source_code_url' => $project->source_code_url,
        'starting_date' => $project->starting_date->toDateString(),
        'ending_date' => $project->ending_date->toDateString(),
        'live_url' => $project->live_url,
        'project_status' => $project->project_status->value,
        'tag_ids' => [$newTag->id],
    ];

    put(route('projects.update', $project), $payload);

    $fresh = $project->fresh('tags');
    expect($fresh->tags->pluck('id')->toArray())->toBe([$newTag->id]);
});
