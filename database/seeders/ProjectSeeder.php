<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Tag;
use Illuminate\Database\Seeder;

final class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        $tags = Tag::all();

        Project::factory(5)->create()->each(function (Project $project) use ($tags): void {
            $project->tags()->attach(
                $tags->random(random_int(1, 3))->pluck('id')
            );
        });
    }
}
