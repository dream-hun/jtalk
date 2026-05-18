<?php

declare(strict_types=1);

namespace App\Models;

use App\Enums\SocialStatus;
use Database\Factories\SocialFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;

/**
 * @property int $id
 * @property string $uuid
 * @property string $platform
 * @property string $url
 * @property string|null $icon
 * @property SocialStatus|null $status
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
final class Social extends Model
{
    /** @use HasFactory<SocialFactory> */
    use HasFactory;

    public function getRouteKeyName(): string
    {
        return 'uuid';
    }

    protected static function boot(): void
    {
        parent::boot();

        self::creating(function (self $social): void {
            $social->uuid ??= (string) Str::uuid();
        });
    }

    /**
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'status' => SocialStatus::class,
        ];
    }
}
