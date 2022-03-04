<?php
namespace Admin\Http\Controllers;

use Admin\Http\Requests\ProductRequest;
use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\User;
use Illuminate\Support\Facades\Request;

class ProductController extends Controller
{
   function index(Request $request) {
      $data = Product::query();
      $data->latest();
      $data = $data->paginate(1000);
      return response()->json($data);
   }
   function store(ProductRequest $request) {
      try {
         $product = Product::create($request->validated());
         return response()->json([
            'ok' => true,
            'data' => $product,
            'message' => 'Product created'
         ]);
      } catch (\Throwable $th) {
         throw $th;
      }
   }

   function show(ProductRequest $request, Product $product) {
      try {
         return response()->json($product);
      } catch (\Throwable $th) {
         throw $th;
      }
   }

   function update(ProductRequest $request, Product $product) {
      try {
         $product->update($request->validated());
         return response()->json([
            'ok' => true,
            'message' => 'Product updated'
         ]);
      } catch (\Throwable $th) {
         throw $th;
      }
   }

   function destroy(ProductRequest $request, Product $product) {
      try {
         $product->delete();
         return response()->json([
            'ok' => true,
            'message' => 'Product removed'
         ]);
      } catch (\Throwable $th) {
         throw $th;
      }
   }

}
