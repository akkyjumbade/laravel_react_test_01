<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Order extends Model
{
   use HasFactory;
   protected $fillable = [
      'user_id',
      'subtotal',
      'total',
      'tax_amount',
      'discount_amount',
      'shipping_charges',
      'order_status',
      'payment_status',
   ];

   function items(): HasMany {
      return $this->hasMany(
         OrderItem::class
      );
   }

   function user(): BelongsTo {
      return $this->belongsTo(
         User::class
      );
   }
}
