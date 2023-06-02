<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Command extends Model
{
    use HasFactory;
    protected $fillable = [
        'datecommand',
        'totalPrice',
        'client_id',
        'product_id'

    ];
    public function products()
    {
        return $this->belongsToMany(Product::class, 'carts', 'command_id', 'product_id')
            ->withTimestamps();
    }

    public function carts()
    {
        return $this->hasMany(Cart::class);
    }
}



    