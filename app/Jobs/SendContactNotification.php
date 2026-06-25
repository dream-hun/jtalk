<?php

declare(strict_types=1);

namespace App\Jobs;

use App\Mail\NewContactMessage;
use App\Models\Contact;
use App\Models\Setting;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Support\Facades\Mail;

final class SendContactNotification implements ShouldQueue
{
    use Queueable;

    public int $tries = 3;

    public int $backoff = 60;

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
