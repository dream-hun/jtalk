<?php

declare(strict_types=1);

namespace App\Actions;

use App\Models\Skill;

final readonly class CreateSkill
{
    /**
     * @param  array<string, mixed>  $data
     */
    public function handle(array $data): Skill
    {
        return Skill::query()->create($data);
    }
}
