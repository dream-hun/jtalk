<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Actions\UpdateSetting;
use App\Http\Requests\Settings\UpdateSettingRequest;
use App\Models\Setting;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

final class SettingController extends Controller
{
    public function __construct(
        private readonly UpdateSetting $updateSetting,
    ) {}

    public function edit(): Response
    {
        return Inertia::render('setting/edit', [
            'setting' => Setting::query()->firstOrNew([]),
        ]);
    }

    public function update(UpdateSettingRequest $request): RedirectResponse
    {
        $this->updateSetting->handle(Setting::query()->firstOrNew([]), $request->validated());

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Settings updated.')]);

        return to_route('setting.edit');
    }
}
