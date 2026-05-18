<?php

declare(strict_types=1);

use Illuminate\Validation\Rules\Password;

it('configures strict password rules in production', function (): void {
    app()->detectEnvironment(fn (): string => 'production');

    expect(Password::defaults())->toBeInstanceOf(Password::class);
});
