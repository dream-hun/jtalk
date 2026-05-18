<?php

declare(strict_types=1);

namespace App\Actions;

use App\Models\Contact;

final readonly class CreateContact
{
    /**
     * @param  array<string, mixed>  $data
     */
    public function handle(array $data): Contact
    {
        return Contact::query()->create($data);
    }
}
