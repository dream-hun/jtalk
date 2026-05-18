<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Actions\CreateContact;
use App\Actions\DeleteContact;
use App\Actions\UpdateContact;
use App\Http\Requests\Contacts\StoreContactRequest;
use App\Http\Requests\Contacts\UpdateContactRequest;
use App\Models\Contact;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

final class ContactController extends Controller
{
    public function __construct(
        private readonly CreateContact $createContact,
        private readonly UpdateContact $updateContact,
        private readonly DeleteContact $deleteContact,
    ) {}

    public function index(): Response
    {
        return Inertia::render('contacts/index', [
            'contacts' => Contact::query()->latest()->get(),
        ]);
    }

    public function store(StoreContactRequest $request): RedirectResponse
    {
        $this->createContact->handle($request->validated());

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Message sent.')]);

        return to_route('home');
    }

    public function show(Contact $contact): Response
    {
        return Inertia::render('contacts/show', [
            'contact' => $contact,
        ]);
    }

    public function update(UpdateContactRequest $request, Contact $contact): RedirectResponse
    {
        $this->updateContact->handle($contact, $request->validated());

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Contact updated.')]);

        return to_route('contacts.index');
    }

    public function destroy(Contact $contact): RedirectResponse
    {
        $this->deleteContact->handle($contact);

        Inertia::flash('toast', ['type' => 'success', 'message' => __('Contact deleted.')]);

        return to_route('contacts.index');
    }
}
