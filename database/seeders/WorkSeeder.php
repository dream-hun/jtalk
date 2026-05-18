<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Work;
use Illuminate\Database\Seeder;

final class WorkSeeder extends Seeder
{
    public function run(): void
    {
        Work::factory()->current()->create();
        Work::factory(2)->create();
    }
}
