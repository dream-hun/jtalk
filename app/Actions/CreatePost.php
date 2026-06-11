<?php

declare(strict_types=1);

namespace App\Actions;

use App\Enums\PostStatus;
use App\Models\Post;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Str;

final readonly class CreatePost
{
    /**
     * @param  array<string, mixed>  $data
     */
    public function handle(array $data): Post
    {
        $data['slug'] = $this->uniqueSlug(Str::slug($data['title']));

        if (($data['status'] ?? null) === PostStatus::Published->value && empty($data['published_at'])) {
            $data['published_at'] = Date::now();
        }

        return Post::query()->create($data);
    }

    private function uniqueSlug(string $slug): string
    {
        $original = $slug;
        $count = 2;

        while (Post::query()->where('slug', $slug)->exists()) {
            $slug = $original.'-'.$count++;
        }

        return $slug;
    }
}
