<?php
namespace Admin;

use Illuminate\Support\Facades\Blade;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Schema;

use function Composer\Autoload\includeFile;

class AdminServiceProvider extends ServiceProvider {
   function boot() {

      Schema::defaultStringLength(191);

      $this->loadRoutesFrom(__DIR__.'/routes/web.php');
      $this->loadViewsFrom(__DIR__.'/views', 'admin');

      $this->registerPolicies();
   }

   function register() {

   }
}
