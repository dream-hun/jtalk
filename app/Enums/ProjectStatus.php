<?php

declare(strict_types=1);

namespace App\Enums;

enum ProjectStatus: string
{
    case InProgress = 'in-progress';
    case Completed = 'completed';
    case OnHold = 'on-hold';
    case Archived = 'archived';
}
