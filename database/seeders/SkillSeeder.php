<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Skill;
use Illuminate\Database\Seeder;

final class SkillSeeder extends Seeder
{
    public function run(): void
    {
        $skills = [
            ['name' => 'Laravel', 'icon' => 'laravel'],
            ['name' => 'Git', 'icon' => 'git'],
            ['name' => 'React', 'icon' => 'react'],
            ['name' => 'TypeScript', 'icon' => 'typescript'],
            ['name' => 'Linux', 'icon' => 'linux'],
            ['name' => 'Tailwind CSS', 'icon' => 'tailwindcss'],
            ['name' => 'Python', 'icon' => 'python'],
            ['name' => 'Data Analysis', 'icon' => 'dataanalysis'],
        ];

        foreach ($skills as $skill) {
            Skill::factory()->create($skill);
        }
    }
}
