<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Enums\ContactStatus;
use App\Models\Contact;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Contact>
 */
final class ContactFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->safeEmail(),
            'message' => fake()->paragraph(),
            'status' => fake()->randomElement(ContactStatus::cases()),
        ];
    }

    public function lead(): static
    {
        return $this->state(fn (array $attributes): array => [
            'status' => ContactStatus::Lead,
        ]);
    }
}
