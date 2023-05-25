<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function addProduct(Request $req)
    {
        $product = Product::create([
            'name' => $req->name,
            'file_path' => $req->file_path,
            'description' => $req->description,
            'price' => $req->price,
        ]);
        return response()->json(['status' => 'succes', 'product' => $product]);
    }
}
