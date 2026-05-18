<?php

declare(strict_types=1);

namespace App\Models;

use App\Enums\EmploymentType;
use Database\Factories\WorkFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;

/**
 * @property int $id
 * @property string $uuid
 * @property string $title
 * @property string $company
 * @property string $logo
 * @property string $location
 * @property EmploymentType $employment_type
 * @property Carbon $start_date
 * @property Carbon|null $end_date
 * @property bool $is_current
 * @property string $description
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
final class Work extends Model
{
    /** @use HasFactory<WorkFactory> */
    use HasFactory;

    public function getRouteKeyName(): string
    {
        return 'uuid';
    }

    protected static function boot(): void
    {
        parent::boot();

        self::creating(function (self $work): void {
            $work->uuid ??= (string) Str::uuid();
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
            'employment_type' => EmploymentType::class,
        ];
    }
}
