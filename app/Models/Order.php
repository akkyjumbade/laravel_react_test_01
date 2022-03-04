<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Storage;

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
   public $appends = [
      'invoice_attachment'
   ];

   function getInvoiceAttachmentAttribute() {
      $orderId = $this->id;
      return storage_path("app/public/order_{$orderId}.pdf");
   }

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
