<?php

namespace App\Http\Controllers;


use App\Models\Cart;
use App\Models\Client;
use App\Models\Command;
use App\Models\Product;
use Illuminate\Http\Request;

class CommandController extends Controller
{
    public function show($cartId)
    {
        $cart = Cart::find($cartId);
        return response()->json([$cart]);
    }
    public function store(Request $request)
    {
        $request->validate([
            'datecommand' => 'required|date',
            'totalPrice' => 'required|numeric',
            'client_id' => 'required|exists:clients,id',
            'product_id' => 'required|exists:products,id',
        ]);

        $command = Command::create([
            'datecommand' => $request->datecommand,
            'totalPrice' => $request->totalPrice,
            'client_id' => $request->client_id,
        ]);
        
        $product = Product::find($request->product_id);

        $command = Command::create($request->all());

             // Create a cart entry for the command and product
             $cart = new Cart();
             $cart->command_id = $command->id;
             $cart->product_id = $product->id;
             $cart->save();
     
             // Update the client's command history
             $client = Client::find($request->client_id);
             $client->commands()->attach($command->id);
     
             return response()->json($command, 201);
         }
       
}

