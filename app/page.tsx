import Link from "next/link";
 
 
 

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-2xl font-bold">Welcome to the Store</h1>
    <Link href="/products">
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Go to Product Page</button>
    </Link>
  </div>
 
  );
}
