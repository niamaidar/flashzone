<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);
//accessible for all
Route::get('list_Product', [ProductController::class, 'list_Product']);

Route::get('userlist', [ProductController::class, 'userlist']);

Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::post('addproduct', [ProductController::class, 'addProduct']);
    Route::delete('delete/{id}', [ProductController::class, 'delete']);
    Route::get('getProduct/{id}', [ProductController::class, 'getProduct']);
    Route::get('search/{id}', [ProductController::class, 'search']);
    Route::post('/updateProduct/{id}', [ProductController::class, 'updateProduct']);
});
Route::post('addproduct', [ProductController::class, 'addProduct']);
Route::delete('delete/{id}', [ProductController::class, 'delete']);
Route::get('getProduct/{id}', [ProductController::class, 'getProduct']);
Route::post('/updateProduct/{id}', [ProductController::class, 'updateProduct']);
Route::get('search/{id}', [ProductController::class, 'search']);
Route::get('categories', [ProductController::class, 'categories']);
Route::get('categoryBycat/{id}', [ProductController::class, 'categoryBycat']);
