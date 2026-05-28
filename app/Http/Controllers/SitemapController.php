<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Enums\PostStatus;
use App\Models\Post;
use Illuminate\Http\Response;

final class SitemapController extends Controller
{
    public function index(): Response
    {
        $posts = Post::where('status', PostStatus::Published)
            ->orderByDesc('published_at')
            ->get(['slug', 'updated_at']);

        return response(
            view('sitemap', compact('posts'))->render(),
            200,
            ['Content-Type' => 'application/xml'],
        );
    }
}
