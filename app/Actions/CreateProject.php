<?php

declare(strict_types=1);

namespace App\Actions;

use App\Models\Project;
use Illuminate\Support\Facades\DB;

final readonly class CreateProject
{
    /**
     * @param  array<string, mixed>  $data
     */
    public function handle(array $data): Project
    {
        return DB::transaction(function () use ($data): Project {
            $tagIds = (array) ($data['tag_ids'] ?? []);
            unset($data['tag_ids']);

            $project = Project::query()->create($data);
            $project->tags()->sync($tagIds);

            return $project;
        });
    }
}
