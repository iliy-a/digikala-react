import { createContext, useEffect, useState } from "react";
import Body from "./components/Body/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
export const context = createContext();
const App = () => {
  const [products, setProducts] = useState({
    head: [],
    storyslider: [],
    Slider: [],
    banerlg: [],
    item: [],
    offer: [],
    box: [],
    box2: [],
    hayper: [],
    category: [],
    baner: [],
    brand: [],
    baner2: [],
    kala: [],
    bestsell: [],
    kala2: [],
    select: [],
    bestsell2: [],
    news: [],
    footer: [],
    about: [],
    belive: [],
    app: [],
    etemad: [],
    branddigi: [],
    branddigi2: [],
    mega:[],
  });
  const FetchProducts = async () => {
    let products = await fetch(`${import.meta.env.BASE_URL}products/Products.json`);
    let res = await products.json();
    setProducts(res);
  };
  useEffect(() => {
    FetchProducts();
  }, []);
  return (
    <context.Provider value={products}>
      <BrowserRouter basename="/digikala-react/" >
        <Routes>
          <Route path="/" element={<Body/>} />
         <Route path="/Login" element={<Login/>} />
         <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </context.Provider>
  );
};

export default App;
