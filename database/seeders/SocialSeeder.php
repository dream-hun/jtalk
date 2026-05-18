<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Social;
use Illuminate\Database\Seeder;

final class SocialSeeder extends Seeder
{
    public function run(): void
    {
        $socials = [
            ['platform' => 'github', 'url' => 'https://github.com', 'icon' => 'github'],
            ['platform' => 'linkedin', 'url' => 'https://linkedin.com', 'icon' => 'linkedin'],
            ['platform' => 'twitter', 'url' => 'https://twitter.com', 'icon' => 'twitter'],
        ];

        foreach ($socials as $social) {
            Social::factory()->active()->create($social);
        }
    }
}
