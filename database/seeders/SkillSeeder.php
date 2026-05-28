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
            ['name' => 'Laravel', 'icon' => 'Laravel'],
            ['name' => 'Git', 'icon' => 'git'],
            ['name' => 'React', 'icon' => 'react'],
            ['name' => 'TypeScript', 'icon' => 'typescript'],
            ['name' => 'Linux', 'icon' => 'Linux'],
            ['name' => 'Tailwind CSS', 'icon' => 'tailwindcss'],
            ['name' => 'Python', 'icon' => 'python'],
            ['name' => 'Data Analysis', 'icon' => 'data analysis'],
        ];

        foreach ($skills as $skill) {
            Skill::factory()->create($skill);
        }
    }
}
