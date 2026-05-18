<?php

declare(strict_types=1);

namespace App\Actions;

use App\Models\Project;

final readonly class DeleteProject
{
    public function handle(Project $project): void
    {
        $project->tags()->detach();
        $project->delete();
    }
}
