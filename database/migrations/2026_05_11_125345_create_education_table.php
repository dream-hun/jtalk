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
        Schema::create('education', function (Blueprint $table): void {
            $table->id();
            $table->uuid();
            $table->string('institution');
            $table->string('logo');
            $table->string('degree');
            $table->date('start_date');
            $table->date('end_date')->nullable();
            $table->boolean('is_current')->nullable();
            $table->timestamps();
        });
    }
};
