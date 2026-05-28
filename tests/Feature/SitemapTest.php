<?php

use App\Enums\PostStatus;
use App\Models\Post;

it('returns xml with home and blog urls', function () {
    $response = $this->get('/sitemap.xml');

    $response->assertStatus(200);
    $response->assertHeader('Content-Type', 'application/xml');
    $response->assertSee(url('/'), false);
    $response->assertSee(url('/blog'), false);
});

it('includes published posts in the sitemap', function () {
    $post = Post::factory()->create([
        'status' => PostStatus::Published,
        'published_at' => now(),
    ]);

    $response = $this->get('/sitemap.xml');

    $response->assertStatus(200);
    $response->assertSee(route('blog.show', $post->slug), false);
});

it('does not include draft posts in the sitemap', function () {
    $post = Post::factory()->create([
        'status' => PostStatus::Draft,
    ]);

    $response = $this->get('/sitemap.xml');

    $response->assertStatus(200);
    $response->assertDontSee(route('blog.show', $post->slug), false);
});
