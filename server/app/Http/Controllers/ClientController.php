<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function index()
    {
        $clients = Client::with('user')
            ->whereHas('user', function ($query) {
                $query->where('is_admin', 0);
            })
            ->get();

        \DB::listen(function ($query) {
            \Log::info($query->sql);
            \Log::info($query->bindings);
            \Log::info($query->time);
        });
        

        return response()->json($clients);
    }
   
    public function store(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'city' => 'required',
            'address' => 'required',
            'telephone' => 'required',
        ]);
    
        // Create a new client
        $client = new Client();
        $client->first_name = $validatedData['first_name'];
        $client->last_name = $validatedData['last_name'];
        $client->city = $validatedData['city'];
        $client->address = $validatedData['address'];
        $client->telephone = $validatedData['telephone'];
        $client->save();
    
        // Return the created client as a JSON response
        return response()->json($client, 201);
    }
    public function destroy($id)
    {
        try {
            $client = Client::findOrFail($id);
            $client->delete();
            return response()->json(['message' => 'Client deleted successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to delete client'], 500);
        }
    }
    public function update(Request $request, $id)
    {
        try {
            $client = Client::FindOrFail($id);
            $client->update([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'city' => $request->city,
                'address' => $request->address,
                'telephone' => $request->telephone,
            ]);
            return response()->json(['message' => 'Client updated successfully', 'client' => $client], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e], 500);
        }
    }
    
    public function show($id)
    {
        try {
            $client = Client::findOrFail($id);
            return response()->json($client, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Client not found'], 404);
        }
    }



}
