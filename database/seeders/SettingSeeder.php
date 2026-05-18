<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

final class SettingSeeder extends Seeder
{
    public function run(): void
    {
        Setting::factory()->create([
            'name' => 'portfolio',
            'title' => 'My Portfolio',
            'description' => 'A showcase of my work and experience.',
            'email' => 'hello@example.com',
            'phone' => '+1 (555) 000-0000',
            'address' => 'San Francisco, CA',
        ]);
    }
}
