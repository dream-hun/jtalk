<?php

declare(strict_types=1);

use App\Enums\ContactStatus;
use App\Models\Contact;
use App\Models\User;

use function Pest\Laravel\actingAs;
use function Pest\Laravel\assertDatabaseHas;
use function Pest\Laravel\assertDatabaseMissing;
use function Pest\Laravel\delete;
use function Pest\Laravel\get;
use function Pest\Laravel\post;
use function Pest\Laravel\put;

beforeEach(function (): void {
    $this->withoutVite();
});

it('stores a contact without auth (public form)', function (): void {
    $payload = [
        'name' => 'Jane Doe',
        'email' => 'jane@example.com',
        'message' => 'Hello, I would like to work with you.',
    ];

    post(route('contacts.store'), $payload)->assertRedirect(route('home'));

    assertDatabaseHas('contacts', ['email' => 'jane@example.com']);
});

it('validates required fields on public store', function (): void {
    post(route('contacts.store'), [])
        ->assertSessionHasErrors(['name', 'email', 'message']);
});

it('lists contacts for authenticated users', function (): void {
    actingAs(User::factory()->create());
    Contact::factory(3)->create();

    get(route('contacts.index'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('contacts/index')->has('contacts', 3));
});

it('shows a contact', function (): void {
    actingAs(User::factory()->create());
    $contact = Contact::factory()->create();

    get(route('contacts.show', $contact))->assertOk()->assertInertia(fn ($page) => $page->component('contacts/show'));
});

it('updates contact status', function (): void {
    actingAs(User::factory()->create());
    $contact = Contact::factory()->lead()->create();

    put(route('contacts.update', $contact), ['status' => ContactStatus::Replied->value])
        ->assertRedirect(route('contacts.index'));

    assertDatabaseHas('contacts', ['id' => $contact->id, 'status' => ContactStatus::Replied->value]);
});

it('deletes a contact', function (): void {
    actingAs(User::factory()->create());
    $contact = Contact::factory()->create();

    delete(route('contacts.destroy', $contact))->assertRedirect(route('contacts.index'));

    assertDatabaseMissing('contacts', ['id' => $contact->id]);
});
