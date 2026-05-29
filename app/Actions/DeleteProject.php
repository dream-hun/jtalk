<?php

declare(strict_types=1);

namespace App\Actions;

use App\Models\Project;
use Illuminate\Support\Facades\Storage;

final readonly class DeleteProject
{
    public function handle(Project $project): void
    {
        if ($project->featured_image) {
            Storage::disk('public')->delete($project->featured_image);
        }
        $project->tags()->detach();
        $project->delete();
    }
}
