import { lazy, Suspense, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Search from "./Components/Search/Search";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Pages/Home";
const About = lazy(() => import("./Components/Pages/About"));
const Contact = lazy(() => import("./Components/Pages/Contact"));
const AllCollections = lazy(() => import("./Components/Pages/AllCollections"));
const Login = lazy(() => import("./Components/Pages/Login"));
const Product = lazy(() => import("./Components/ProductID/Product"));
const ProductPage = lazy(() => import("./Components/Pages/ProductPage"));
const PaymentPage = lazy(() => import("./Components/Pages/PaymentPage"));
const Cart = lazy(() => import("./Components/Pages/Cart"));
const MyOrders = lazy(() => import("./Components/Pages/MyOrders"));
import { Routes, Route } from "react-router-dom";

function App() {
  const [search, setsearch] = useState(false);
  const [searchtext, setsearchtext] = useState("");
  const [login, setlogin] = useState(false);

  return (
    <>
      <Navbar
        login={login}
        setlogin={setlogin}
        search={search}
        setsearch={setsearch}
      />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/allcollections"
            element={
              <AllCollections
                searchtext={searchtext}
                setsearchtext={setsearchtext}
                search={search}
                setsearch={setsearch}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/login"
            element={<Login login={login} setlogin={setlogin} />}
          />
          <Route path="/productpage/:productId" element={<ProductPage />} />
          <Route path="/payment" element={<PaymentPage login={login} />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
