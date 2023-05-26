<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function addProduct(Request $req)
    {
        $req->validate([
            'name' => 'required',
            'file_path' => 'required|file',
            'description' => 'required',
            'price' => 'required|numeric',
            'category'=> 'required',
            'quantity' => 'required|numeric',
            'marque'=> 'required',
        ]);

        $file = $req->file('file_path');

        if ($file) {
            $filePath = $file->store('products');
        } else {
            return response()->json(['error' => 'No file provided.'], 400);
        }

        $product = Product::create([
            'name' => $req->name,
            'file_path' => $filePath,
            'description' => $req->description,
            'price' => $req->price,
            'marque'=>$req->marque,
            'quantity'=>$req->quantity,
            'category'=>$req->category,
        ]);

        return response()->json(['status' => 'success', 'product' => $product]);
    }
    function list_Product()
    {
        return Product::all();
    }
}
