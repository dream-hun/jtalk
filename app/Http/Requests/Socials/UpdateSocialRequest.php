<?php

declare(strict_types=1);

namespace App\Http\Requests\Socials;

use App\Enums\SocialStatus;
use App\Models\Social;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Enum;

final class UpdateSocialRequest extends FormRequest
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
        /** @var Social $social */
        $social = $this->route('social');

        return [
            'platform' => ['required', 'string', 'max:255', Rule::unique('socials', 'platform')->ignore($social->id)],
            'url' => ['required', 'url', 'max:255', Rule::unique('socials', 'url')->ignore($social->id)],
            'icon' => ['nullable', 'string', 'max:255'],
            'status' => ['nullable', new Enum(SocialStatus::class)],
        ];
    }
}
