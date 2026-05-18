<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\EducationFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;

/**
 * @property int $id
 * @property string $uuid
 * @property string $institution
 * @property string $logo
 * @property string $degree
 * @property Carbon $start_date
 * @property Carbon|null $end_date
 * @property bool|null $is_current
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
final class Education extends Model
{
    /** @use HasFactory<EducationFactory> */
    use HasFactory;

    public function getRouteKeyName(): string
    {
        return 'uuid';
    }

    protected static function boot(): void
    {
        parent::boot();

        self::creating(function (self $education): void {
            $education->uuid ??= (string) Str::uuid();
        });
    }

    /**
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'start_date' => 'date',
            'end_date' => 'date',
            'is_current' => 'boolean',
        ];
    }
}
