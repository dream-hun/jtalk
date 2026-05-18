<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Actions\CreateEducation;
use App\Actions\DeleteEducation;
use App\Actions\UpdateEducation;
use App\Http\Requests\Education\StoreEducationRequest;
use App\Http\Requests\Education\UpdateEducationRequest;
use App\Models\Education;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

final class EducationController extends Controller
{
    public function __construct(
        private readonly CreateEducation $createEducation,
        private readonly UpdateEducation $updateEducation,
        private readonly DeleteEducation $deleteEducation,
    ) {}

    public function index(): Response
    {
        return Inertia::render('education/index', [
            'education' => Education::query()->latest()->get(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('education/create');
    }

    public function store(StoreEducationRequest $request): RedirectResponse
    {
        $this->createEducation->handle($request->validated());

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Education created.')]);

        return to_route('education.index');
    }

    public function show(Education $education): Response
    {
        return Inertia::render('education/show', [
            'education' => $education,
        ]);
    }

    public function edit(Education $education): Response
    {
        return Inertia::render('education/edit', [
            'education' => $education,
        ]);
    }

    public function update(UpdateEducationRequest $request, Education $education): RedirectResponse
    {
        $this->updateEducation->handle($education, $request->validated());

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Education updated.')]);

        return to_route('education.index');
    }

    public function destroy(Education $education): RedirectResponse
    {
        $this->deleteEducation->handle($education);

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Education deleted.')]);

        return to_route('education.index');
    }
}
