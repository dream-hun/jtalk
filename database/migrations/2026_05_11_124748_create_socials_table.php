<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('socials', function (Blueprint $table): void {
            $table->id();
            $table->uuid();
            $table->string('platform')->unique();
            $table->string('url')->unique();
            $table->string('icon')->nullable();
            $table->string('status')->default('active')->nullable();
            $table->timestamps();
        });
    }
};
