<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
   <meta charset="utf-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">

   <title>Laravel</title>

   {{-- <link rel="stylesheet" href="{{ mix('css/main.css') }}"> --}}
   <link rel="stylesheet" href="{{ mix('css/admin.css') }}">
   <script src="{{ mix('js/admin.js') }}"></script>
   {{-- <script src="https://kit.fontawesome.com/42d5adcbca.js"></script> --}}
</head>

<body class="antialiased bg-gray-100">
   <div id="root"></div>
</body>
</html>
