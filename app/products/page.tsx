"use client";

import Link from 'next/link';
 
 
import { useEffect, useState } from 'react';

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
  }
  
  export default function Products() {
    const [products, setProducts] = useState<Product[]>([]);
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Products</h1>
        <div className="grid grid-cols-3 gap-4">
          {products.map(product => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md">
              <img src={product.image} alt={product.title} className="h-40 w-auto mx-auto" />
              <h2 className="text-lg font-bold mt-2">{product.title}</h2>
              <p className="text-gray-700">${product.price}</p>
              <Link href={`/products/${product.id}`}>
                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Know More</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }