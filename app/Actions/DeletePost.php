<?php

declare(strict_types=1);

namespace App\Actions;

use App\Models\Post;
use Illuminate\Support\Facades\Storage;

final readonly class DeletePost
{
    public function handle(Post $post): void
    {
        if ($post->cover_image) {
            Storage::disk('public')->delete($post->cover_image);
        }

        $post->delete();
    }
}
