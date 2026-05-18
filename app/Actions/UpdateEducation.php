<?php

declare(strict_types=1);

namespace App\Actions;

use App\Models\Education;

final readonly class UpdateEducation
{
    /**
     * @param  array<string, mixed>  $data
     */
    public function handle(Education $education, array $data): Education
    {
        $education->update($data);

        return $education->refresh();
    }
}
