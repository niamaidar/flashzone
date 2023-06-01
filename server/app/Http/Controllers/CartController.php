<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
{
    
    public function show($cartId)
    {
        $cart = Cart::findOrFail($cartId);
        return response()->json($cart);
    }
    public function addToCart(Request $request)
    {
        $request->validate([
            'command_id' => 'required|exists:commands,id',
            'product_id' => 'required|exists:products,id',
        ]);
        dd($request->all());

        $cart = Cart::create($request->all());

        return response()->json($cart, 201);
    }

    public function getCartItems($commandId)
    {
        $cartItems = Cart::where('command_id', $commandId)->get();

        return response()->json($cartItems);
    }

    public function updateCartItem(Request $request, $cartId)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
        ]);

        $cartItem = Cart::findOrFail($cartId);
        $cartItem->update($request->all());

        return response()->json($cartItem);
    }

    public function removeCartItem($cartId)
    {
        $cartItem = Cart::findOrFail($cartId);
        $cartItem->delete();

        return response()->json('Cart item deleted');
    }
}
