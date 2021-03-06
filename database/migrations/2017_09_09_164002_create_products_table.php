<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    
    /*Let's add columns for title, description, price, availability */
   public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('ID');
			$table->string('Name')->default('');
			$table->string('Key')->default('')->unique();
            $table->integer('ProductType')->default('0');
			$table->integer('Unit')->default('0');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
