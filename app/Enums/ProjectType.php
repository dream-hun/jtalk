<?php

declare(strict_types=1);

namespace App\Enums;

enum ProjectType: string
{
    case WebApplication = 'web-application';
    case MobileApplication = 'mobile-application';
    case Api = 'api';
    case CliTool = 'cli-tool';
    case Library = 'library';
    case Other = 'other';
}
