<?php

declare(strict_types=1);

namespace App\Actions;

use App\Models\Project;
use Illuminate\Support\Facades\DB;

final readonly class UpdateProject
{
    /**
     * @param  array<string, mixed>  $data
     */
    public function handle(Project $project, array $data): Project
    {
        return DB::transaction(function () use ($project, $data): Project {
            $tagIds = (array) ($data['tag_ids'] ?? []);
            unset($data['tag_ids']);

            $project->update($data);
            $project->tags()->sync($tagIds);
            $project->refresh();
            $project->load('tags');

            return $project;
        });
    }
}
