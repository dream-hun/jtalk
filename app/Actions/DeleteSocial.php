<?php

declare(strict_types=1);

namespace App\Actions;

use App\Models\Social;

final readonly class DeleteSocial
{
    public function handle(Social $social): void
    {
        $social->delete();
    }
}
