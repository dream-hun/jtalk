<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Enums\PostStatus;
use App\Models\Post;
use App\Models\Setting;
use Inertia\Inertia;
use Inertia\Response;

final class BlogController extends Controller
{
    public function index(): Response
    {
        $paginator = Post::with('category')
            ->where('status', PostStatus::Published)
            ->orderByDesc('published_at')
            ->paginate(10);

        return Inertia::render('blog/index', [
            'posts' => $paginator->items(),
            'pagination' => [
                'current_page' => $paginator->currentPage(),
                'last_page' => $paginator->lastPage(),
                'per_page' => $paginator->perPage(),
                'total' => $paginator->total(),
                'has_previous_page' => $paginator->currentPage() > 1,
                'has_next_page' => $paginator->hasMorePages(),
            ],
        ]);
    }

    public function show(string $slug): Response
    {
        $post = Post::with('category')
            ->where('slug', $slug)
            ->where('status', PostStatus::Published)
            ->firstOrFail();

        $allPosts = Post::where('status', PostStatus::Published)
            ->orderByDesc('published_at')
            ->get(['id', 'title', 'slug']);

        $currentIndex = $allPosts->search(fn ($p) => $p->slug === $slug);

        $previousPost = $currentIndex > 0 ? $allPosts[$currentIndex - 1] : null;
        $nextPost = $currentIndex < $allPosts->count() - 1 ? $allPosts[$currentIndex + 1] : null;

        return Inertia::render('blog/show', [
            'post' => $post,
            'previousPost' => $previousPost ? ['title' => $previousPost->title, 'slug' => $previousPost->slug] : null,
            'nextPost' => $nextPost ? ['title' => $nextPost->title, 'slug' => $nextPost->slug] : null,
            'authorName' => Setting::value('name') ?? config('app.name'),
            'postUrl' => route('blog.show', $slug),
        ]);
    }
}
