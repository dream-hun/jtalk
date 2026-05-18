<?php

declare(strict_types=1);

namespace App\Actions;

use App\Models\Work;

final readonly class DeleteWork
{
    public function handle(Work $work): void
    {
        $work->delete();
    }
}
