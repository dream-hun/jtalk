<?php

declare(strict_types=1);

namespace App\Actions;

use App\Models\Education;

final readonly class DeleteEducation
{
    public function handle(Education $education): void
    {
        $education->delete();
    }
}
