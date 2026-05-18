<?php

declare(strict_types=1);

namespace App\Http\Requests\Skills;

use App\Models\Skill;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

final class UpdateSkillRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        /** @var Skill $skill */
        $skill = $this->route('skill');

        return [
            'name' => ['required', 'string', 'max:255', Rule::unique('skills', 'name')->ignore($skill->id)],
            'icon' => ['nullable', 'string', 'max:255'],
        ];
    }
}
