<?php

declare(strict_types=1);

namespace App\Models;

use App\Enums\ProjectStatus;
use App\Enums\ProjectType;
use Database\Factories\ProjectFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;

/**
 * @property int $id
 * @property string $uuid
 * @property string $title
 * @property string|null $description
 * @property ProjectType $type
 * @property string|null $source_code_url
 * @property Carbon $starting_date
 * @property Carbon $ending_date
 * @property string|null $live_url
 * @property string|null $featured_image
 * @property ProjectStatus $project_status
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
final class Project extends Model
{
    /** @use HasFactory<ProjectFactory> */
    use HasFactory;

    public function getRouteKeyName(): string
    {
        return 'uuid';
    }

    /** @return BelongsToMany<Tag, $this> */
    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class);
    }

    protected static function boot(): void
    {
        parent::boot();

        self::creating(function (self $project): void {
            $project->uuid ??= (string) Str::uuid();
        });
    }

    /**
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'starting_date' => 'date',
            'ending_date' => 'date',
            'type' => ProjectType::class,
            'project_status' => ProjectStatus::class,
        ];
    }
}
