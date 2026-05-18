<?php

declare(strict_types=1);

namespace App\Actions;

use App\Models\Category;
use Illuminate\Support\Str;

final readonly class CreateCategory
{
    /**
     * @param  array<string, mixed>  $data
     */
    public function handle(array $data): Category
    {
        $data['slug'] = $this->uniqueSlug(Str::slug($data['name']));

        return Category::query()->create($data);
    }

    private function uniqueSlug(string $slug): string
    {
        $original = $slug;
        $count = 2;

        while (Category::query()->where('slug', $slug)->exists()) {
            $slug = $original.'-'.$count++;
        }

        return $slug;
    }
}
