<?php

declare(strict_types=1);

namespace App\Mail;

use App\Models\Contact;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailables\Headers;
use Illuminate\Queue\SerializesModels;

final class NewContactMessage extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public readonly Contact $contact) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            replyTo: [$this->contact->email],
            subject: 'New contact message from '.$this->contact->name,
        );
    }

    public function headers(): Headers
    {
        return new Headers(
            text: ['X-Contact-ID: '.$this->contact->uuid],
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'mail.contact-notification',
        );
    }
}
