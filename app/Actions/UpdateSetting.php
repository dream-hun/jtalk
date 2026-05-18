<?php

declare(strict_types=1);

namespace App\Actions;

use App\Models\Setting;

final readonly class UpdateSetting
{
    /**
     * @param  array<string, mixed>  $data
     */
    public function handle(Setting $setting, array $data): Setting
    {
        $setting->update($data);

        return $setting->refresh();
    }
}
