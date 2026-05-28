<?php

it('returns a plain text robots.txt', function () {
    $response = $this->get('/robots.txt');

    $response->assertStatus(200);
    $response->assertHeader('Content-Type', 'text/plain; charset=utf-8');
    $response->assertSee('User-agent: *', false);
    $response->assertSee('Allow: /', false);
    $response->assertSee('Disallow: /dashboard', false);
});

it('includes the sitemap url in robots.txt', function () {
    $response = $this->get('/robots.txt');

    $response->assertSee('Sitemap: '.url('/sitemap.xml'), false);
});
