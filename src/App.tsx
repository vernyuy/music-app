/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import CartDetail from "./components/CartDetail";
import { FileUploader } from "@aws-amplify/ui-react-storage";
import "@aws-amplify/ui-react/styles.css";
import { ThemeProvider, Theme } from '@aws-amplify/ui-react';
// import { list } from "aws-amplify/storage";

const client = generateClient<Schema>();

function App() {
  const theme: Theme = {
    name: 'my-theme',
    tokens: {
      colors: {
        font: {
          primary: { value: '#F472B6' },
          secondary: { value: '#FB923C' },
          // ...
        },
      },
    },
  };
  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      // next: (data) => setTodos([...data.items]),
    });
  }, []);

  const [cart, setCart]: any[] = useState([]);
  // const [images, setImages]: any[] = useState([]);

  // Function to handle adding products to the cart
  const addToCart = (product: any) => {
    setCart((prevCart: any) => [...prevCart, product]);
  };
  // Remove item from the cart
  const removeFromCart = (productId: any) => {
    setCart(cart.filter((item: any) => item.id !== productId));
  };

  // Clear the entire cart
  const clearCart = () => {
    setCart([]);
  };
  
//   const result = async () =>{
//     const res = await list({
//     path: 'songs/'
//   })
//   setImages(res.items)
// }
  ;
  const featuredProducts = [
    {
      id: 1,
      name: "Electric Guitar",
      price: 499.99,
      image: "https://via.placeholder.com/300x200?text=Electric+Guitar",
    },
    {
      id: 2,
      name: "Acoustic Guitar",
      price: 299.99,
      image: "https://via.placeholder.com/300x200?text=Acoustic+Guitar",
    },
    {
      id: 3,
      name: "DJ Turntable",
      price: 399.99,
      image: "https://via.placeholder.com/300x200?text=DJ+Turntable",
    },
    {
      id: 4,
      name: "Headphones",
      price: 129.99,
      image: "https://via.placeholder.com/300x200?text=Headphones",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
    <Router>
      <div className="font-sans bg-gray-100">
        {/* Header Section with Cart Icon */}
        <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white p-6">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold">MusicShop</h1>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:text-gray-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#shop" className="hover:text-gray-200">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="#about" className="hover:text-gray-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="#contact" className="hover:text-gray-200">
                  Contact
                </Link>
              </li>
              {/* Cart Icon with item count */}
              <li className="relative">
                <Link to="/cart" className="text-white hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="10" cy="28" r="2" fill="currentColor"/><circle cx="24" cy="28" r="2" fill="currentColor"/><path fill="currentColor" d="M28 7H5.82L5 2.8A1 1 0 0 0 4 2H0v2h3.18L7 23.2a1 1 0 0 0 1 .8h18v-2H8.82L8 18h18a1 1 0 0 0 1-.78l2-9A1 1 0 0 0 28 7m-2.8 9H7.62l-1.4-7h20.53Z"/></svg>
                  {cart.length > 0 && (
                    <span className="absolute top-0 right-0 text-sm bg-red-500 text-white rounded-full px-1 py-1/2">
                      {cart.length}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <section id="shop" className="py-16 bg-white">
                <FileUploader
                  acceptedFileTypes={["image/*", "video/*"]}
                  path="songs/"
                  maxFileCount={3}
                  isResumable
                  autoUpload={false}
                  showThumbnails={true}
                />

                <div className="container mx-auto text-center">
                  <h3 className="text-3xl font-bold mb-6">Featured Products</h3>
                  <div className="grid px-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {featuredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                        isInCart={cart.some(
                          (item: any) => item.id === product.id
                        )}
                      />
                    ))}
                  </div>
                </div>
              </section>
            }
          />

          <Route
            path="/cart"
            element={
              <CartDetail
                cart={cart}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
              />
            }
          />
        </Routes>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
