<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Invoice {{ $order->id }}</title>
</head>
<body>
   <div>
      <div>
         <x-application-logo />
      </div>
      <div>
         <p>
            Invoice #{{ $order->id }}
         </p>
      </div>
      <address>
         <h4 style="margin-bottom: 4px;">Customer</h4>
         <div>
            {{ $order->user->name }}
         </div>
         <div>
            {{ $order->user->email }}
         </div>
         <div>
            {{ $order->user->phone_number }}
         </div>
      </address>
      <div>
         <p>
            Particulars
         </p>
      </div>
      <table style="width: 100%">
         <thead>
            <tr>
               <th style="text-align: left;">Product</th>
               <th style="text-align: right;">Price (unit)</th>
               <th style="text-align: right;">Qty</th>
               <th style="text-align: right;">Subtotal</th>
            </tr>
         </thead>
         <thead>
            @forelse ($order->items as $item)
            <tr>
               <td>{{ $item->product->title ?? '' }}</td>
               <td style="text-align: right;">{{ $item->price ?? '' }}</td>
               <td style="text-align: right;">{{ $item->qty ?? '' }}</td>
               <td style="text-align: right;">{{ $item->subtotal ?? '' }}</td>
            </tr>
            @empty

            @endforelse
         </thead>
      </table>
      <table style="width: 100%">
         <tbody>
            <tr>
               <td style="text-align: right">Subtotal</td>
               <td style="text-align: right">{{ $order->subtotal }}</td>
            </tr>
            <tr>
               <td style="text-align: right">Total</td>
               <td style="text-align: right">{{ $order->total }}</td>
            </tr>
         </tbody>
      </table>
   </div>
</body>
</html>
