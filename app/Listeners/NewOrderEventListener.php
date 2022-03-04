<?php

namespace App\Listeners;

use App\Events\NewOrderEvent;
use App\Notifications\NewOrderNotification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Barryvdh\DomPDF\Facade\Pdf;

class NewOrderEventListener
{
   /**
    * Create the event listener.
    *
    * @return void
    */
   public function __construct()
   {
      //
   }

   /**
    * Handle the event.
    *
    * @param  \App\Events\NewOrderEvent  $event
    * @return void
    */
   public function handle(NewOrderEvent $event)
   {
      $order = $event->order;
      try {
         $data['order'] = $order;
         $pdf = Pdf::loadView('pdf.invoice', $data);
         $pdf->save(storage_path("app/public/order_{$order->id}.pdf"));
         $order->user->notify(
            new NewOrderNotification($order)
         );
      } catch (\Throwable $th) {
         throw $th;
      }
   }
}
