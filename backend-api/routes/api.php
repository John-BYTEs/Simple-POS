<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\POSController;

Route::get('/products', [POSController::class, 'getProducts']);
Route::post('/sales', [POSController::class, 'storeSale']);

Route::post('/restock', [POSController::class, 'storeStock']);