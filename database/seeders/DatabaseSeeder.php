<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

final class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        $this->call([
            TagSeeder::class,
            ProjectSeeder::class,
            WorkSeeder::class,
            EducationSeeder::class,
            SkillSeeder::class,
            SocialSeeder::class,
            SettingSeeder::class,
        ]);
    }
}
