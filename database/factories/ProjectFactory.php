<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Enums\ProjectStatus;
use App\Enums\ProjectType;
use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Project>
 */
final class ProjectFactory extends Factory
{
    public function definition(): array
    {
        $startingDate = fake()->dateTimeBetween('-3 years', '-1 month');
        $endingDate = fake()->dateTimeBetween($startingDate, 'now');

        return [
            'title' => fake()->sentence(4, false),
            'description' => fake()->paragraph(),
            'type' => fake()->randomElement(ProjectType::cases()),
            'source_code_url' => fake()->optional()->url(),
            'starting_date' => $startingDate,
            'ending_date' => $endingDate,
            'live_url' => fake()->optional()->url(),
            'project_status' => fake()->randomElement(ProjectStatus::cases()),
        ];
    }

    public function completed(): static
    {
        return $this->state(fn (array $attributes): array => [
            'project_status' => ProjectStatus::Completed,
        ]);
    }

    public function inProgress(): static
    {
        return $this->state(fn (array $attributes): array => [
            'project_status' => ProjectStatus::InProgress,
        ]);
    }
}
