<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\SkillFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;

/**
 * @property int $id
 * @property string $uuid
 * @property string $name
 * @property string|null $icon
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
final class Skill extends Model
{
    /** @use HasFactory<SkillFactory> */
    use HasFactory;

    public function getRouteKeyName(): string
    {
        return 'uuid';
    }

    protected static function boot(): void
    {
        parent::boot();

        self::creating(function (self $skill): void {
            $skill->uuid ??= (string) Str::uuid();
        });
    }
}
