<?php
namespace Admin\Http\Controllers;

use Admin\Http\Requests\OrderRequest;
use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Support\Facades\Request;

class OrderController extends Controller
{
   function index(Request $request) {
      $data = Order::query();
      $data->latest();
      $data->with('user', 'items.product');
      $data = $data->paginate(1000);
      return response()->json($data);
   }
   function store(OrderRequest $request) {
      try {
         // dd($request->validated());
         $order = Order::create($request->validated());
         if ($request->input('items')) {
            foreach ($request->items as $key => $_item) {
               $product = Product::find(@$_item['product_id']);
               $order->items()->create(array_merge($_item, [
                  'price' => $product->price,
                  'subtotal' => ($product->price * $_item['qty']),
               ]));
            }
         }
         return response()->json([
            'ok' => true,
            'data' => $order,
            'message' => 'Order created'
         ]);
      } catch (\Throwable $th) {
         throw $th;
      }
   }

   function show(OrderRequest $request, Order $order) {
      try {
         $order->load('user', 'items.product');
         return response()->json($order);
      } catch (\Throwable $th) {
         throw $th;
      }
   }

   function update(OrderRequest $request, Order $order) {
      try {
         $order->update($request->validated());
         return response()->json([
            'ok' => true,
            'message' => 'Order updated'
         ]);
      } catch (\Throwable $th) {
         throw $th;
      }
   }

   function destroy(OrderRequest $request, Order $order) {
      try {
         $order->delete();
         return response()->json([
            'ok' => true,
            'message' => 'Order removed'
         ]);
      } catch (\Throwable $th) {
         throw $th;
      }
   }

}
