<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Seeder;

final class TagSeeder extends Seeder
{
    public function run(): void
    {
        foreach (['open-source', 'freelance', 'personal', 'client', 'featured'] as $name) {
            Tag::factory()->create(['name' => $name]);
        }
    }
}
