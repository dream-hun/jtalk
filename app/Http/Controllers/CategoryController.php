<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Actions\CreateCategory;
use App\Actions\DeleteCategory;
use App\Actions\UpdateCategory;
use App\Http\Requests\Categories\StoreCategoryRequest;
use App\Http\Requests\Categories\UpdateCategoryRequest;
use App\Models\Category;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

final class CategoryController extends Controller
{
    public function __construct(
        private readonly CreateCategory $createCategory,
        private readonly UpdateCategory $updateCategory,
        private readonly DeleteCategory $deleteCategory,
    ) {}

    public function index(): Response
    {
        return Inertia::render('categories/index', [
            'categories' => Category::query()->withCount('posts')->orderBy('name')->get(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('categories/create');
    }

    public function store(StoreCategoryRequest $request): RedirectResponse
    {
        $this->createCategory->handle($request->validated());

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Category created.')]);

        return to_route('categories.index');
    }

    public function show(Category $category): Response
    {
        return Inertia::render('categories/show', ['category' => $category]);
    }

    public function edit(Category $category): Response
    {
        return Inertia::render('categories/edit', ['category' => $category]);
    }

    public function update(UpdateCategoryRequest $request, Category $category): RedirectResponse
    {
        $this->updateCategory->handle($category, $request->validated());

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Category updated.')]);

        return to_route('categories.index');
    }

    public function destroy(Category $category): RedirectResponse
    {
        $this->deleteCategory->handle($category);

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Category deleted.')]);

        return to_route('categories.index');
    }
}
