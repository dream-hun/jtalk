<?php

declare(strict_types=1);

namespace App\Actions;

use App\Models\Category;
use Illuminate\Support\Str;

final readonly class UpdateCategory
{
    /**
     * @param  array<string, mixed>  $data
     */
    public function handle(Category $category, array $data): Category
    {
        $data['slug'] = $this->uniqueSlug(Str::slug($data['name']), $category->uuid);

        $category->update($data);

        return $category->refresh();
    }

    private function uniqueSlug(string $slug, string $excludeUuid): string
    {
        $original = $slug;
        $count = 2;

        while (Category::query()->where('slug', $slug)->where('uuid', '!=', $excludeUuid)->exists()) {
            $slug = $original.'-'.$count++;
        }

        return $slug;
    }
}
