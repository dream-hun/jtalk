<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Actions\CreateSocial;
use App\Actions\DeleteSocial;
use App\Actions\UpdateSocial;
use App\Http\Requests\Socials\StoreSocialRequest;
use App\Http\Requests\Socials\UpdateSocialRequest;
use App\Models\Social;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

final class SocialController extends Controller
{
    public function __construct(
        private readonly CreateSocial $createSocial,
        private readonly UpdateSocial $updateSocial,
        private readonly DeleteSocial $deleteSocial,
    ) {}

    public function index(): Response
    {
        return Inertia::render('socials/index', [
            'socials' => Social::query()->orderBy('platform')->get(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('socials/create');
    }

    public function store(StoreSocialRequest $request): RedirectResponse
    {
        $this->createSocial->handle($request->validated());

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Social link created.')]);

        return to_route('socials.index');
    }

    public function show(Social $social): Response
    {
        return Inertia::render('socials/show', [
            'social' => $social,
        ]);
    }

    public function edit(Social $social): Response
    {
        return Inertia::render('socials/edit', [
            'social' => $social,
        ]);
    }

    public function update(UpdateSocialRequest $request, Social $social): RedirectResponse
    {
        $this->updateSocial->handle($social, $request->validated());

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Social link updated.')]);

        return to_route('socials.index');
    }

    public function destroy(Social $social): RedirectResponse
    {
        $this->deleteSocial->handle($social);

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Social link deleted.')]);

        return to_route('socials.index');
    }
}
