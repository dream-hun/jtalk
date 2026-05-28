<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\Response;

final class RobotsController extends Controller
{
    public function index(): Response
    {
        $disallowed = [
            '/dashboard',
            '/settings/',
            '/login',
            '/register',
            '/forgot-password',
            '/reset-password',
            '/posts',
            '/projects',
            '/works',
            '/education',
            '/contacts',
            '/categories',
            '/skills',
            '/socials',
            '/setting',
        ];

        $lines = ['User-agent: *', 'Allow: /'];

        foreach ($disallowed as $path) {
            $lines[] = 'Disallow: '.$path;
        }

        $lines[] = '';
        $lines[] = 'Sitemap: '.url('/sitemap.xml');

        return response(implode("\n", $lines), 200, ['Content-Type' => 'text/plain']);
    }
}
