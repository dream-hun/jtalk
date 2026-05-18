<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Education;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Education>
 */
final class EducationFactory extends Factory
{
    public function definition(): array
    {
        $startDate = fake()->dateTimeBetween('-8 years', '-3 years');
        $isCurrent = fake()->boolean(10);

        return [
            'institution' => fake()->company().' University',
            'logo' => fake()->imageUrl(100, 100, 'education'),
            'degree' => fake()->randomElement([
                'Bachelor of Science in Computer Science',
                'Bachelor of Arts in Design',
                'Master of Science in Software Engineering',
                'Master of Business Administration',
                'PhD in Computer Science',
            ]),
            'start_date' => $startDate,
            'end_date' => $isCurrent ? null : fake()->dateTimeBetween($startDate, 'now'),
            'is_current' => $isCurrent,
        ];
    }
}
