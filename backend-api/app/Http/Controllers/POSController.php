<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Sale;
use App\Models\SaleItem;

class POSController extends Controller
{
    public function getProducts()
    {
        return response()->json(Product::all());
    }


    public function storeSale(Request $request)
{
    try {
        $request->validate([
            'items' => 'required|array|min:1',
            'items.*.id' => 'required|integer',
            'items.*.name' => 'required|string',
            'items.*.quantity' => 'required|integer',
            'items.*.price' => 'required|integer',
            'items.*.stock' => 'required|integer'
        ]);

        $total = collect($request->items)->sum(function ($item) {
            return $item['price'] * $item['quantity'];
        });

        $sale = Sale::create(['total' => $total]);

        foreach ($request->items as $item) {
            SaleItem::create([
                'sale_id' => $sale->id,
                'product_id' => $item['id'],
                'name' => $item['name'],
                'quantity' => $item['quantity'],
                'price' => $item['price'],
            ]);
        }

        foreach ($request->items as $item) {
            $product = Product::findOrFail($item['id']);

            if ($product->stock < $item['quantity']) {
                return response()->json([
                    'error' => 'Not enough stock for ' . $product->name
                ], 400);
            }
            $product->stock -= $item['quantity'];
            $product->save();
        }

        return response()->json(['message' => 'Sale saved successfully', 'sale_id' => $sale->id]);
    } catch (\Exception $e) {
        return response()->json(['error' => 'Failed to save: ' . $e->getMessage()], 500);
    }
}


    public function show(){
        $server = "200 : Server is Running!";
        return view('server', compact('server'));
    }
}
