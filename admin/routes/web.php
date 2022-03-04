<?php

// use Admin;

use Illuminate\Support\Facades\Route;
use \Admin\Http\Controllers\{
   DashboardController,
};

Route::group([
   'prefix' => 'admin',
   'as' => 'admin.',
   'middleware' => [ 'web', 'auth' ],
], function() {
   Route::get('dashboard', function () {
      return view('admin::dashboard');
   })->name('dashboard');
});
