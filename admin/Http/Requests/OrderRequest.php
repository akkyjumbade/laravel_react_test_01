<?php

namespace Admin\Http\Requests;

use App\Models\Product;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Support\Str;

class OrderRequest extends FormRequest
{
   /**
    * Determine if the user is authorized to make this request.
    *
    * @return bool
    */
   public function authorize()
   {
      return true;
   }

   /**
    * Get the validation rules that apply to the request.
    *
    * @return array
    */
   public function rules()
   {
      if ($this->isMethod('get')) {
         return [];
      } else if($this->isMethod('delete')) {
         return [];
      }
      return [
         'user_id' => [
            Rule::when($this->isMethod('patch'), [
               'nullable',
            ], [
               'required',
               'numeric',
               Rule::exists('users', 'id'),
            ]),
         ],
         'items' => [
            Rule::when($this->isMethod('patch'), [
               'nullable',
            ], [
               'required',
               // 'array:product_id,price,qty',
            ]),
         ],
         'items.*.product_id' => [
            Rule::when($this->isMethod('patch'), [
               'nullable',
            ], [
               'required',
               'numeric',
               'min:0',
               Rule::exists('products', 'id'),
            ]),
         ],
         'items.*.qty' => [
            Rule::when($this->isMethod('patch'), [
               'nullable',
            ], [
               'required',
               'numeric',
               'min:1',
               'max:1000',
            ]),
         ],
         'customer_note' => [
            Rule::when($this->isMethod('patch'), [
               'nullable',
            ], [
               'nullable',
            ]),
         ],
         'subtotal' => [
            Rule::when($this->isMethod('patch'), [
               'nullable',
            ], [
               'nullable',
            ]),
         ],
         'total' => [
            Rule::when($this->isMethod('patch'), [
               'nullable',
            ], [
               'required',
            ]),
         ],
         'tax_amount' => [
            Rule::when($this->isMethod('patch'), [
               'nullable',
            ], [
               'nullable',
            ]),
         ],
         'discount_amount' => [
            Rule::when($this->isMethod('patch'), [
               'nullable',
            ], [
               'nullable',
            ]),
         ],
         'shipping_charges' => [
            Rule::when($this->isMethod('patch'), [
               'nullable',
            ], [
               'nullable',
            ]),
         ],
         'order_status' => [
            Rule::when($this->isMethod('patch'), [
               'nullable',
            ], [
               'nullable',
            ]),
         ],
      ];
   }

   public function prepareForValidation()
   {
      // $code = Str::random(8);
      if ($this->user_id && !$this->order) {
         $subtotal = [ 0 ];
         if ($this->items && count($this->items)) {
            $items = collect($this->items)->pluck('qty', 'product_id');
            // dd($items);
            foreach ($items as $itemId => $qty) {
               $productPrice = Product::where('id', $itemId)->value('price');
               if ($productPrice) {
                  $subtotal[] = ($productPrice * $qty);
               }
            }
            $subtotal = array_sum($subtotal);
            $this->merge([
               'subtotal' => $subtotal,
            ]);
         }
      }

   }

   function attributes()
   {
      return [
         'user_id' => 'Customer',
         'items' => 'Products',
         'items.*.product_id' => 'Product',
         'items.*.qty' => 'Qty',
         // 'items.*.qty' => 'Subtotal',
      ];
   }
}
