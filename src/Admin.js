import React from "react";
import AddCategory from "./components/admin/category/AddCategory";
import CategoryList from "./components/admin/category/CategoryList";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Sidebar/Topbar";
import { Route, Routes } from "react-router-dom";
import UpdateCategory from "./components/admin/category/UpdateCategory";
import Nav from "./layouts/common/Nav";
import Navigation from "./components/admin/Navigation";
import AddProduct from "./components/admin/product/AddProduct";
import ListProduct from "./components/admin/product/ListProduct";
import UpdateProduct from "./components/admin/product/UpdateProduct";

const Admin = () => {
  return (
    <div>
      <Topbar></Topbar>
      <div className="flex">
        <Navigation></Navigation>
        <div className="flex flex-col w-full h-screen m-10">
          <Routes>
            <Route path="/">
              <Route
                path="/category"
                element={<CategoryList></CategoryList>}
              ></Route>
              <Route
                path="/addCategory"
                element={<AddCategory></AddCategory>}
              ></Route>
              <Route
                path="/editCategory/:id"
                element={<UpdateCategory></UpdateCategory>}
              ></Route>
              <Route
                path="/product"
                element={<ListProduct></ListProduct>}
              ></Route>
              <Route
                path="/product/add"
                element={<AddProduct></AddProduct>}
              ></Route>
              <Route
                path="/product/edit/:id"
                element={<UpdateProduct></UpdateProduct>}
              ></Route>
              <Route path="/contact" element={<div>Contact</div>}></Route>
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
