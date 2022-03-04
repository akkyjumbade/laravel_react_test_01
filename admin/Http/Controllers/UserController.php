<?php
namespace Admin\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Request;

class UserController extends Controller
{
   function index(Request $request) {
      $data = User::query();
      $data->latest();
      $data = $data->paginate(1000);
      return response()->json($data);
   }


}
