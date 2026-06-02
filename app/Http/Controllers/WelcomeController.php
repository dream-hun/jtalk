<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Enums\PostStatus;
use App\Models\Education;
use App\Models\Post;
use App\Models\Project;
use App\Models\Setting;
use App\Models\Work;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;
use Laravel\Fortify\Features;

final class WelcomeController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('welcome', [
            'setting' => Setting::first(),
            'projects' => Project::with('tags')->latest()->get()->map(function ($project) {
                if ($project->featured_image) {
                    $project->featured_image = Storage::url($project->featured_image);
                }
                return $project;
            }),
            'works' => Work::orderBy('start_date', 'desc')->get(),
            'education' => Education::orderBy('start_date', 'desc')->get(),
            'skills' => [],
            'recentPosts' => Post::where('status', PostStatus::Published)
                ->orderByDesc('published_at')
                ->limit(3)
                ->get(['uuid', 'title', 'slug', 'excerpt', 'published_at', 'cover_image'])
                ->map(function ($post) {
                    if ($post->cover_image) {
                        $post->cover_image = Storage::url($post->cover_image);
                    }
                    return $post;
                }),
            'canRegister' => Features::enabled(Features::registration()),
            'siteUrl' => url('/'),
            'defaultOgImage' => asset('photos/Jacques MBABAZI.avif'),
        ]);
    }
}
