<?php

declare(strict_types=1);

namespace App\Actions;

use App\Models\Social;

final readonly class CreateSocial
{
    /**
     * @param  array<string, mixed>  $data
     */
    public function handle(array $data): Social
    {
        return Social::query()->create($data);
    }
}
