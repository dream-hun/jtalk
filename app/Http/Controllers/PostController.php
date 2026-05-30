<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Actions\CreatePost;
use App\Actions\DeletePost;
use App\Actions\UpdatePost;
use App\Http\Requests\Posts\StorePostRequest;
use App\Http\Requests\Posts\UpdatePostRequest;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

final class PostController extends Controller
{
    public function __construct(
        private readonly CreatePost $createPost,
        private readonly UpdatePost $updatePost,
        private readonly DeletePost $deletePost,
    ) {}

    public function index(): Response
    {
        return Inertia::render('posts/index', [
            'posts' => Post::with('category')->latest()->get(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('posts/create', [
            'categories' => Category::orderBy('name')->get(),
        ]);
    }

    public function store(StorePostRequest $request): RedirectResponse
    {
        $data = $request->validated();

        if ($request->hasFile('cover_image')) {
            $data['cover_image'] = $request->file('cover_image')->store('posts', 'public');
        }

        $this->createPost->handle($data);

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Post created.')]);

        return to_route('posts.index');
    }

    public function show(Post $post): Response
    {
        return Inertia::render('posts/show', [
            'post' => $post->load('category'),
        ]);
    }

    public function edit(Post $post): Response
    {
        return Inertia::render('posts/edit', [
            'post' => $post->load('category'),
            'categories' => Category::orderBy('name')->get(),
        ]);
    }

    public function update(UpdatePostRequest $request, Post $post): RedirectResponse
    {
        $data = $request->validated();

        if ($request->hasFile('cover_image')) {
            if ($post->cover_image) {
                Storage::disk('public')->delete($post->cover_image);
            }
            $data['cover_image'] = $request->file('cover_image')->store('posts', 'public');
        } else {
            unset($data['cover_image']);
        }

        $this->updatePost->handle($post, $data);

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Post updated.')]);

        return to_route('posts.index');
    }

    public function destroy(Post $post): RedirectResponse
    {
        $this->deletePost->handle($post);

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Post deleted.')]);

        return to_route('posts.index');
    }
}
