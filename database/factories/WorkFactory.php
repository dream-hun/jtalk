<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Enums\EmploymentType;
use App\Models\Work;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Work>
 */
final class WorkFactory extends Factory
{
    public function definition(): array
    {
        $startDate = fake()->dateTimeBetween('-6 years', '-1 year');
        $isCurrent = fake()->boolean(20);

        return [
            'title' => fake()->jobTitle(),
            'company' => fake()->company(),
            'logo' => fake()->imageUrl(100, 100, 'business'),
            'location' => fake()->city().', '.fake()->country(),
            'employment_type' => fake()->randomElement(EmploymentType::cases()),
            'start_date' => $startDate,
            'end_date' => $isCurrent ? null : fake()->dateTimeBetween($startDate, 'now'),
            'is_current' => $isCurrent,
            'description' => fake()->paragraphs(2, true),
        ];
    }

    public function current(): static
    {
        return $this->state(fn (array $attributes): array => [
            'end_date' => null,
            'is_current' => true,
        ]);
    }
}
