<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->only('user');
    }

    public function login(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required'
        ]);


        if ($token = auth()->attempt($request->only('email', 'password'))) {

            return (new UserResource($request->user()))->additional([
                'meta' => [
                    'token' => $token
                ]
            ]);
        }


        return response()->json(['message' => 'Unauthorized'], 401);
    }

    public function user(Request $request)
    {
        return new UserResource($request->user());
    }
}
