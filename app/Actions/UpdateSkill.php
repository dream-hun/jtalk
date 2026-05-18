<?php

declare(strict_types=1);

namespace App\Actions;

use App\Models\Skill;

final readonly class UpdateSkill
{
    /**
     * @param  array<string, mixed>  $data
     */
    public function handle(Skill $skill, array $data): Skill
    {
        $skill->update($data);

        return $skill->refresh();
    }
}
