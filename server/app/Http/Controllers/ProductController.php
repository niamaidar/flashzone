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
            'category' => 'required',
            'quantity' => 'required|numeric',
            'brand' => 'required',
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
            'brand' => $req->brand,
            'quantity' => $req->quantity,
            'category' => $req->category,
        ]);

        return response()->json(['status' => 'success', 'product' => $product]);
    }

    function list_Product()
    {
        return Product::all();
    }
    function delete($id)
    {
        $result = Product::where('id', $id)->delete();
        if ($result) {
            return ["result" => "product has been delete"];
        } else {
            return ["result" => "Operation failed"];
        }
    }
    function getProduct($id)
    {
        return Product::find($id);
    }
    public function updateProduct(Request $req, $id)
    {
        $req->validate([
            'name' => 'required',
            'description' => 'required',
            'price' => 'required|numeric',
            'category' => 'required',
            'quantity' => 'required|numeric',
            'brand' => 'required',
        ]);

        $product = Product::find($id);

        if (!$product) {
            return response()->json(['error' => 'Product not found.'], 404);
        }

        // Update the product properties
        $product->name = $req->name;
        $product->description = $req->description;
        $product->price = $req->price;
        $product->category = $req->category;
        $product->quantity = $req->quantity;
        $product->brand = $req->brand;

        try {
            $file = $req->file('file_path');

            if ($file) {
                $fileName = $file->getClientOriginalName();
                $filePath = $file->storeAs('products', $fileName);
                $filePath = Storage::url($filePath);
                $fileName = basename($filePath);
                $product->file_path = $fileName;
            }
        } catch (\Exception $e) {
            // Handle the exception here
            // For example, you can log the error or show a specific error message to the user
            // You can also redirect the user back with an error message
            return response()->json(['error' => $e]);
        }

        // Save the updated product
        $product->save();

        return response()->json(['status' => 'success', 'product' => $product]);
    }
    function search($key)
    {
        return Product::where('name', 'like', "%$key%")->get();
    }
    function categories()
    {
        return Product::select('category')->distinct()->get();
    }
    function categoryBycat($category)
    {
        $result = Product::where('category', "=", $category)->get();
        return $result;
    }


}
