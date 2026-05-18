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
        Schema::create('projects', function (Blueprint $table): void {
            $table->id();
            $table->uuid();
            $table->string('title');
            $table->string('type')->default('web-application');
            $table->string('source_code_url')->nullable();
            $table->date('starting_date');
            $table->date('ending_date');
            $table->string('live_url')->nullable();
            $table->string('project_status')->default('completed');
            $table->timestamps();
        });
    }
};
