<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'file_path',
        'description',
        'price',
        'brand',
        'quantity',
        'category',
    ];

    public function commands()
    {
        return $this->belongsToMany(Command::class, 'carts', 'product_id', 'command_id')
            ->withTimestamps();
    }

    public function carts()
    {
        return $this->hasMany(Cart::class);
    }

}
