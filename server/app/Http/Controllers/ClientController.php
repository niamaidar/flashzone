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
}
