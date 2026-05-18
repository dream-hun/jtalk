<?php

declare(strict_types=1);

namespace App\Actions;

use App\Models\Work;

final readonly class CreateWork
{
    /**
     * @param  array<string, mixed>  $data
     */
    public function handle(array $data): Work
    {
        return Work::query()->create($data);
    }
}
