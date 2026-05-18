<?php

declare(strict_types=1);

namespace App\Actions;

use App\Models\Education;

final readonly class CreateEducation
{
    /**
     * @param  array<string, mixed>  $data
     */
    public function handle(array $data): Education
    {
        return Education::query()->create($data);
    }
}
