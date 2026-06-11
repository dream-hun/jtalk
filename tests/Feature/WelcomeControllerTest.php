<?php

declare(strict_types=1);

use App\Models\Education;
use App\Models\Project;
use App\Models\Setting;
use App\Models\Work;

use function Pest\Laravel\get;

beforeEach(function (): void {
    $this->withoutVite();
});

it('returns 200 with no data configured', function (): void {
    get(route('home'))->assertOk();
});

it('passes setting to the inertia component', function (): void {
    Setting::factory()->create();

    get(route('home'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('welcome')->has('setting'));
});

it('passes projects with tags to the inertia component', function (): void {
    Project::factory()->count(3)->create();

    get(route('home'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('welcome')->has('projects', 3));
});

it('passes works to the inertia component', function (): void {
    Work::factory()->count(2)->create();

    get(route('home'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('welcome')->has('works', 2));
});

it('passes education to the inertia component', function (): void {
    Education::factory()->count(2)->create();

    get(route('home'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('welcome')->has('education', 2));
});
