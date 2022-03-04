<?php
namespace Admin\Http\Controllers;

use Admin\Http\Requests\UserRequest;
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
   function store(UserRequest $request) {
      try {
         $user = User::create($request->validated());
         return response()->json([
            'ok' => true,
            'data' => $user,
            'message' => 'User created'
         ]);
      } catch (\Throwable $th) {
         throw $th;
      }
   }

}
