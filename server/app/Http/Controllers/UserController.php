<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{
    function register(Request $req)
    {
        // $user=new User;
        // $user->name= $req->input('name');
        // $user->email= $req->input('email');
        // $user->password= Hash::make($req->input('password'));
        // $user->save();
        // return $user;
        $user = User::create([
            "name"=>$req->name,
            "email"=>$req->email,
            "password"=>Hash::make($req->password),
            'is_admin' => false, // Set the user as admin

        ]);
        return response()->json([
            'status'=>'success',
            'user'=>$user,
            'message_admin'=>'user registered successfully'
        ]);
        

    }
    function login(Request $req)
    {
        $user=User::where('email',$req->email)->first();
        if(!$user || !Hash::check($req->password,$user->password))
        {
            return ["error"=>"Email or password is not match"];
        }
        return $user;
    }
    
}
