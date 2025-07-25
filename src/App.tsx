import "./App.css";

import { Route, Routes } from "react-router";
import Home from "../src/home";
import ProductsPage from "./modules/Products/ProductPage";
import Layout from "./Layout";
import CreateProductPage from "./modules/Products/CreateProduct";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          index
          element={<Home />}
        />
        <Route path="products">
          <Route
            index
            element={<ProductsPage />}
          ></Route>
          <Route
            path="add-product"
            element={<CreateProductPage />}
          ></Route>
        </Route>
      </Route>
    </Routes>
  );
}
