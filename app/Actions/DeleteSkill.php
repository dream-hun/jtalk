<?php

declare(strict_types=1);

namespace App\Actions;

use App\Models\Skill;

final readonly class DeleteSkill
{
    public function handle(Skill $skill): void
    {
        $skill->delete();
    }
}
