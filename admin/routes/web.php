<?php

// use Admin;

use Admin\Http\Controllers\OrderController;
use Admin\Http\Controllers\ProductController;
use Admin\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::group([
   'prefix' => 'admin',
   'as' => 'admin.',
   'middleware' => [ 'web', 'auth' ],
], function() {
   Route::get('dashboard', function () {
      return view('admin::dashboard');
   })->name('dashboard');
});

// API
Route::group([
   'prefix' => 'api',
   'as' => 'api.',
   'middleware' => [ 'web', 'auth' ],
], function() {
   Route::resource('users', UserController::class)->names('users');
   Route::resource('products', ProductController::class)->names('products');
   Route::resource('orders', OrderController::class)->names('orders');
});
