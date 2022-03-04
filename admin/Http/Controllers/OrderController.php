<?php
namespace Admin\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Support\Facades\Request;

class OrderController extends Controller
{
   function index(Request $request) {
      $data = Order::query();
      $data->latest();
      $data = $data->paginate(1000);
      return response()->json($data);
   }


}
