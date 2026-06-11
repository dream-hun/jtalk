<?php

declare(strict_types=1);

test('GET /register returns 404', function (): void {
    $this->get('/register')->assertNotFound();
});

test('POST /register returns 404', function (): void {
    $this->post('/register', [
        'name' => 'Test User',
        'email' => 'test@example.com',
        'password' => 'password',
        'password_confirmation' => 'password',
    ])->assertNotFound();
});
