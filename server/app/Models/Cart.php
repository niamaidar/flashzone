<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;
    protected $fillable = [
        'totalPrice',
        'addDate',
        'product_id',
        'client_id',
    ];

    protected $table = 'carts';

    public function command()
    {
        return $this->belongsTo(Command::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

}
