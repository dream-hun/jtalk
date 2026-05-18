<?php

declare(strict_types=1);

namespace App\Http\Requests\Socials;

use App\Enums\SocialStatus;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Enum;

final class StoreSocialRequest extends FormRequest
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
            'platform' => ['required', 'string', 'max:255', Rule::unique('socials', 'platform')],
            'url' => ['required', 'url', 'max:255', Rule::unique('socials', 'url')],
            'icon' => ['nullable', 'string', 'max:255'],
            'status' => ['nullable', new Enum(SocialStatus::class)],
        ];
    }
}
