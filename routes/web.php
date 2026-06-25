<?php

declare(strict_types=1);

use App\Http\Controllers\BlogController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\EducationController;
use App\Http\Controllers\LlmController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\RobotsController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\SitemapController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\WorkController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [WelcomeController::class, 'index'])->name('home');

Route::get('sitemap.xml', [SitemapController::class, 'index'])->name('sitemap');
Route::get('robots.txt', [RobotsController::class, 'index'])->name('robots');
Route::get('llm.txt', [LlmController::class, 'index'])->name('llm');

Route::post('contacts', [ContactController::class, 'store'])->name('contacts.store')->middleware('throttle:3,10');

Route::get('blog', [BlogController::class, 'index'])->name('blog.index');
Route::get('blog/{slug}', [BlogController::class, 'show'])->name('blog.show');

Route::middleware(['auth', 'verified'])->group(function (): void {
    Route::get('dashboard', fn () => Inertia::render('dashboard'))->name('dashboard');

    Route::resource('projects', ProjectController::class);
    Route::resource('works', WorkController::class);
    Route::resource('education', EducationController::class);
    Route::resource('contacts', ContactController::class)->except('store');
    Route::resource('posts', PostController::class);
    Route::resource('categories', CategoryController::class);

    Route::get('setting', [SettingController::class, 'edit'])->name('setting.edit');
    Route::put('setting', [SettingController::class, 'update'])->name('setting.update');
});

require __DIR__.'/settings.php';
