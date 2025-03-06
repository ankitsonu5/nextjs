 
"use client";
 
import { useEffect, useState } from 'react';


interface ProductDetailProps {
    params: {
      id: string;
    };
  }
  
  interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    rating: {
      rate: number;
      count: number;
    };
  }
  
  export default function ProductDetail({ params }: ProductDetailProps) {
    const { id } = params;
    const [product, setProduct] = useState<Product | null>(null);
  
    useEffect(() => {
      if (id) {
        fetch(`https://fakestoreapi.com/products/${id}`)
          .then(res => res.json())
          .then(data => setProduct(data));
      }
    }, [id]);
  
    if (!product) return <p>Loading...</p>;
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <img src={product.image} alt={product.title} className="h-60 w-auto mx-auto" />
        <p className="text-lg text-gray-700">{product.description}</p>
        <p className="text-xl font-bold">Price: ${product.price}</p>
        <p className="text-md">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
      </div>
    );
  }