<x-mail::message>
# New Contact Message

You have a new message from your portfolio contact form.

<x-mail::panel>
**From:** {{ $contact->name }}
**Email:** {{ $contact->email }}
**Received:** {{ $contact->created_at->format('F j, Y \a\t g:i A') }}
</x-mail::panel>

**Message:**

{{ $contact->message }}

<x-mail::button :url="config('app.url').'/contacts/'.$contact->uuid">
View in Dashboard
</x-mail::button>

You can reply directly to this email to respond to {{ $contact->name }}.

Thanks,
{{ config('app.name') }}
</x-mail::message>
