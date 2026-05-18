<?php

declare(strict_types=1);

namespace App\Enums;

enum SocialStatus: string
{
    case Active = 'active';
    case Inactive = 'inactive';
}
