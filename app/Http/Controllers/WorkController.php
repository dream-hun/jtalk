<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Actions\CreateWork;
use App\Actions\DeleteWork;
use App\Actions\UpdateWork;
use App\Http\Requests\Works\StoreWorkRequest;
use App\Http\Requests\Works\UpdateWorkRequest;
use App\Models\Work;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

final class WorkController extends Controller
{
    public function __construct(
        private readonly CreateWork $createWork,
        private readonly UpdateWork $updateWork,
        private readonly DeleteWork $deleteWork,
    ) {}

    public function index(): Response
    {
        return Inertia::render('works/index', [
            'works' => Work::query()->latest()->get(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('works/create');
    }

    public function store(StoreWorkRequest $request): RedirectResponse
    {
        $this->createWork->handle($request->validated());

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Work experience created.')]);

        return to_route('works.index');
    }

    public function show(Work $work): Response
    {
        return Inertia::render('works/show', [
            'work' => $work,
        ]);
    }

    public function edit(Work $work): Response
    {
        return Inertia::render('works/edit', [
            'work' => $work,
        ]);
    }

    public function update(UpdateWorkRequest $request, Work $work): RedirectResponse
    {
        $this->updateWork->handle($work, $request->validated());

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Work experience updated.')]);

        return to_route('works.index');
    }

    public function destroy(Work $work): RedirectResponse
    {
        $this->deleteWork->handle($work);

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Work experience deleted.')]);

        return to_route('works.index');
    }
}
