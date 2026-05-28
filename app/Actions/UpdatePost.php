<?php

declare(strict_types=1);

namespace App\Actions;

use App\Enums\PostStatus;
use App\Models\Post;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;

final readonly class UpdatePost
{
    /**
     * @param  array<string, mixed>  $data
     */
    public function handle(Post $post, array $data): Post
    {
        if (isset($data['title']) && Str::slug($data['title']) !== $post->slug) {
            $data['slug'] = $this->uniqueSlug(Str::slug($data['title']), $post->uuid);
        }

        if (
            ($data['status'] ?? null) === PostStatus::Published->value
            && $post->status !== PostStatus::Published
            && empty($data['published_at'])
        ) {
            $data['published_at'] = Carbon::now();
        }

        $post->update($data);

        return $post->refresh();
    }

    private function uniqueSlug(string $slug, string $excludeUuid): string
    {
        $original = $slug;
        $count = 2;

        while (Post::query()->where('slug', $slug)->where('uuid', '!=', $excludeUuid)->exists()) {
            $slug = $original.'-'.$count++;
        }

        return $slug;
    }
}
