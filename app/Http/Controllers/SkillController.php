<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Actions\CreateSkill;
use App\Actions\DeleteSkill;
use App\Actions\UpdateSkill;
use App\Http\Requests\Skills\StoreSkillRequest;
use App\Http\Requests\Skills\UpdateSkillRequest;
use App\Models\Skill;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

final class SkillController extends Controller
{
    public function __construct(
        private readonly CreateSkill $createSkill,
        private readonly UpdateSkill $updateSkill,
        private readonly DeleteSkill $deleteSkill,
    ) {}

    public function index(): Response
    {
        return Inertia::render('skills/index', [
            'skills' => Skill::query()->orderBy('name')->get(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('skills/create');
    }

    public function store(StoreSkillRequest $request): RedirectResponse
    {
        $this->createSkill->handle($request->validated());

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Skill created.')]);

        return to_route('skills.index');
    }

    public function show(Skill $skill): Response
    {
        return Inertia::render('skills/show', [
            'skill' => $skill,
        ]);
    }

    public function edit(Skill $skill): Response
    {
        return Inertia::render('skills/edit', [
            'skill' => $skill,
        ]);
    }

    public function update(UpdateSkillRequest $request, Skill $skill): RedirectResponse
    {
        $this->updateSkill->handle($skill, $request->validated());

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Skill updated.')]);

        return to_route('skills.index');
    }

    public function destroy(Skill $skill): RedirectResponse
    {
        $this->deleteSkill->handle($skill);

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Skill deleted.')]);

        return to_route('skills.index');
    }
}
