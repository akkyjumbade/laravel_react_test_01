<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
   use HasFactory;
   protected $fillable = [
      'title',
      'price',
      'stock',
      'qty',
      'created_by_user_id',
      'code',
   ];
}
