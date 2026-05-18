<?php

declare(strict_types=1);

namespace App\Actions;

use App\Models\Social;

final readonly class UpdateSocial
{
    /**
     * @param  array<string, mixed>  $data
     */
    public function handle(Social $social, array $data): Social
    {
        $social->update($data);

        return $social->refresh();
    }
}
