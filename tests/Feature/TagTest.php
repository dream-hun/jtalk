<?php

declare(strict_types=1);

use App\Models\Project;
use App\Models\Tag;
use App\Models\User;

use function Pest\Laravel\actingAs;

beforeEach(function (): void {
    actingAs(User::factory()->create());
});

it('uses uuid as route key', function (): void {
    expect((new Tag)->getRouteKeyName())->toBe('uuid');
});

it('belongs to many projects', function (): void {
    $tag = Tag::factory()->create();
    $project = Project::factory()->create();
    $tag->projects()->attach($project->id);

    expect($tag->projects)->toHaveCount(1)
        ->and($tag->projects->first()->id)->toBe($project->id);
});
