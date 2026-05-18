<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Enums\SocialStatus;
use App\Models\Social;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Social>
 */
final class SocialFactory extends Factory
{
    public function definition(): array
    {
        return [
            'platform' => fake()->unique()->randomElement([
                'github', 'linkedin', 'twitter', 'instagram',
                'youtube', 'dribbble', 'behance', 'dev', 'hashnode',
            ]),
            'url' => fake()->unique()->url(),
            'icon' => fake()->optional()->word(),
            'status' => fake()->randomElement(SocialStatus::cases()),
        ];
    }

    public function active(): static
    {
        return $this->state(fn (array $attributes): array => [
            'status' => SocialStatus::Active,
        ]);
    }

    public function inactive(): static
    {
        return $this->state(fn (array $attributes): array => [
            'status' => SocialStatus::Inactive,
        ]);
    }
}
