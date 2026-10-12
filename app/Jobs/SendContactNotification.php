<?php

declare(strict_types=1);

namespace App\Jobs;

use App\Mail\NewContactMessage;
use App\Models\Contact;
use App\Models\Setting;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Queue\Attributes\Backoff;
use Illuminate\Queue\Attributes\Tries;
use Illuminate\Support\Facades\Mail;

#[Backoff(60)]
#[Tries(3)]
final class SendContactNotification implements ShouldQueue
{
    use Queueable;

    public function __construct(public readonly Contact $contact) {}

    public function handle(): void
    {
        $setting = Setting::query()->first();

        $notifyEmail = $setting?->email ?? config('mail.from.address');

        if (! $notifyEmail) {
            return;
        }

        Mail::to(new Address($notifyEmail, config('app.name')))
            ->send(new NewContactMessage($this->contact));
    }
}
