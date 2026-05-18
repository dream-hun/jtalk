<?php

declare(strict_types=1);

namespace App\Http\Requests\Projects;

use App\Enums\ProjectStatus;
use App\Enums\ProjectType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Enum;

final class UpdateProjectRequest extends FormRequest
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
        return [
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'type' => ['required', new Enum(ProjectType::class)],
            'source_code_url' => ['nullable', 'url', 'max:255'],
            'starting_date' => ['required', 'date'],
            'ending_date' => ['required', 'date', 'after_or_equal:starting_date'],
            'live_url' => ['nullable', 'url', 'max:255'],
            'project_status' => ['required', new Enum(ProjectStatus::class)],
            'tag_ids' => ['nullable', 'array'],
            'tag_ids.*' => ['integer', Rule::exists('tags', 'id')],
        ];
    }
}
