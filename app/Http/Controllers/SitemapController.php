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
        $posts = Post::query()->where('status', PostStatus::Published)
            ->latest('published_at')
            ->get(['slug', 'updated_at']);

        return response(
            view('sitemap', ['posts' => $posts])->render(),
            200,
            ['Content-Type' => 'application/xml'],
        );
    }
}
