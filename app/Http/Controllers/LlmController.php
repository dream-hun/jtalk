<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Enums\PostStatus;
use App\Models\Education;
use App\Models\Post;
use App\Models\Project;
use App\Models\Setting;
use App\Models\Work;
use Illuminate\Http\Response;

final class LlmController extends Controller
{
    public function index(): Response
    {
        $setting = Setting::first();
        $projects = Project::with('tags')->latest()->get();
        $works = Work::orderBy('start_date', 'desc')->get();
        $education = Education::orderBy('start_date', 'desc')->get();
        $posts = Post::where('status', PostStatus::Published)
            ->orderByDesc('published_at')
            ->get(['title', 'slug', 'excerpt']);

        $lines = [];

        $lines[] = '# '.($setting?->name ?? 'Portfolio');
        $lines[] = '';
        $lines[] = '> '.($setting?->description ?? '');
        $lines[] = '';

        if ($works->isNotEmpty()) {
            $lines[] = '## Work Experience';
            $lines[] = '';
            foreach ($works as $work) {
                $period = $work->start_date->format('Y');
                $period .= ' – '.($work->is_current ? 'Present' : $work->end_date?->format('Y'));
                $lines[] = '- **'.$work->title.'** at '.$work->company.' ('.$period.'): '.$work->description;
            }
            $lines[] = '';
        }

        if ($education->isNotEmpty()) {
            $lines[] = '## Education';
            $lines[] = '';
            foreach ($education as $edu) {
                $period = $edu->start_date->format('Y');
                $period .= ' – '.($edu->is_current ? 'Present' : $edu->end_date?->format('Y'));
                $lines[] = '- **'.$edu->degree.'** — '.$edu->institution.' ('.$period.')';
            }
            $lines[] = '';
        }

        if ($projects->isNotEmpty()) {
            $lines[] = '## Projects';
            $lines[] = '';
            foreach ($projects as $project) {
                $tags = $project->tags->pluck('name')->implode(', ');
                $url = $project->live_url ?? $project->source_code_url ?? url('/');
                $desc = $project->description ?? $project->title;
                $suffix = $tags ? " [{$tags}]" : '';
                $lines[] = '- ['.$project->title.']('.$url.'): '.$desc.$suffix;
            }
            $lines[] = '';
        }

        if ($posts->isNotEmpty()) {
            $lines[] = '## Blog';
            $lines[] = '';
            foreach ($posts as $post) {
                $postUrl = url('/blog/'.$post->slug);
                $lines[] = '- ['.$post->title.']('.$postUrl.')'.($post->excerpt ? ': '.$post->excerpt : '');
            }
            $lines[] = '';
        }

        $lines[] = '## Contact';
        $lines[] = '';
        if ($setting?->email) {
            $lines[] = '- Email: '.$setting->email;
        }
        if ($setting?->phone) {
            $lines[] = '- Phone: '.$setting->phone;
        }
        if ($setting?->address) {
            $lines[] = '- Location: '.$setting->address;
        }

        return response(implode("\n", $lines), 200, ['Content-Type' => 'text/plain; charset=utf-8']);
    }
}
