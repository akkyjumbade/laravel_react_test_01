<?php
namespace Admin\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Support\Facades\Request;

class ProductController extends Controller
{
   function index(Request $request) {
      $data = Product::query();
      $data->latest();
      $data = $data->paginate(1000);
      return response()->json($data);
   }


}
