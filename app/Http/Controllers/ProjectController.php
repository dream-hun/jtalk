<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Actions\CreateProject;
use App\Actions\DeleteProject;
use App\Actions\UpdateProject;
use App\Http\Requests\Projects\StoreProjectRequest;
use App\Http\Requests\Projects\UpdateProjectRequest;
use App\Models\Project;
use App\Models\Tag;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

final class ProjectController extends Controller
{
    public function __construct(
        private readonly CreateProject $createProject,
        private readonly UpdateProject $updateProject,
        private readonly DeleteProject $deleteProject,
    ) {}

    public function index(): Response
    {
        return Inertia::render('projects/index', [
            'projects' => Project::with('tags')->latest()->get(),
            'tags' => Tag::query()->orderBy('name')->get(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('projects/create', [
            'tags' => Tag::query()->orderBy('name')->get(),
        ]);
    }

    public function store(StoreProjectRequest $request): RedirectResponse
    {
        $data = $request->validated();

        if ($request->hasFile('featured_image')) {
            $data['featured_image'] = $request->file('featured_image')->store('projects', 'public');
        }

        $this->createProject->handle($data);

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Project created.')]);

        return to_route('projects.index');
    }

    public function show(Project $project): Response
    {
        return Inertia::render('projects/show', [
            'project' => $project->load('tags'),
        ]);
    }

    public function edit(Project $project): Response
    {
        return Inertia::render('projects/edit', [
            'project' => $project->load('tags'),
            'tags' => Tag::query()->orderBy('name')->get(),
        ]);
    }

    public function update(UpdateProjectRequest $request, Project $project): RedirectResponse
    {
        $data = $request->validated();

        if ($request->hasFile('featured_image')) {
            if ($project->featured_image) {
                Storage::disk('public')->delete($project->featured_image);
            }

            $data['featured_image'] = $request->file('featured_image')->store('projects', 'public');
        } else {
            unset($data['featured_image']);
        }

        $this->updateProject->handle($project, $data);

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Project updated.')]);

        return to_route('projects.index');
    }

    public function destroy(Project $project): RedirectResponse
    {
        $this->deleteProject->handle($project);

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Project deleted.')]);

        return to_route('projects.index');
    }
}
