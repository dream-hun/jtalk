<?php

declare(strict_types=1);

namespace App\Actions;

use App\Models\Work;

final readonly class UpdateWork
{
    /**
     * @param  array<string, mixed>  $data
     */
    public function handle(Work $work, array $data): Work
    {
        $work->update($data);

        return $work->refresh();
    }
}
