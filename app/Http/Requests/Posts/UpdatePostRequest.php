<?php

declare(strict_types=1);

namespace App\Http\Requests\Posts;

use App\Enums\PostStatus;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Enum;

final class UpdatePostRequest extends FormRequest
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
            'excerpt' => ['nullable', 'string', 'max:500'],
            'content' => ['required', 'string'],
            'cover_image' => ['nullable', 'image', 'mimes:jpg,jpeg,png,gif,webp,avif', 'max:4096'],
            'category_id' => ['nullable', 'integer', Rule::exists('categories', 'id')],
            'status' => ['required', new Enum(PostStatus::class)],
        ];
    }
}
