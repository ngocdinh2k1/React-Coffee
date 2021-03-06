import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CategoriesService from "../../services/CategoriesService";
import Button from "../button/Button";
import Input from "../input/Input";
import Textarea from "../textarea/Textarea";

const AddCategory = () => {
  const [category, setCategory] = useState({
    id: "",
    categoriesName: "",
    title: "",
    description: "",
  });
  const handleFilterChange = (e) => {
    const value = e.target.value;
    setCategory({ ...category, [e.target.name]: value });
  };
  //   const filterDebounce = useDebounce(category, 500);
  // console.log(category);
  const saveCategories = (e) => {
    e.preventDefault();
    CategoriesService.saveCategories(category)
      .then((response) => {})
      .catch((error) => {});
    setCategory({
      id: "",
      categoriesName: "",
      title: "",
      description: "",
    });
  };
  const handleResetEmployee = (e) => {
    e.preventDefault();
    setCategory({
      id: "",
      categoriesName: "",
      title: "",
      description: "",
    });
  };
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const onSubmitHandler = (values) => {
    console.log(values);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="max-w-[1280px] mx-auto my-10"
    >
      <p className="mb-3 text-4xl font-bold text-center text-gray-200">
        Add category
      </p>
      <div className="flex flex-col w-full gap-3 mb-5">
        <label htmlFor="categoriesName" className="cursor-pointer">
          Category name
        </label>
        <Input
          name="categoriesName"
          placeholder="Enter your category name"
          id="categoriesName"
          control={control}
          type="text"
          className="text-black w-[1000px]"
          value={category.categoriesName}
          onChange={handleFilterChange}
        ></Input>
        {/* <p className="text-sm text-red-500">Please enter your username</p> */}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="title" className="cursor-pointer">
          Title
        </label>
        <Input
          name="title"
          placeholder="Enter your title"
          id="title"
          control={control}
          type="text"
          className="text-black w-[1000px]"
          value={category.title}
          onChange={handleFilterChange}
        ></Input>
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="description" className="cursor-pointer">
          Description
        </label>
        <Textarea
          name="description"
          placeholder="Enter your description"
          id="description"
          control={control}
          className="text-black w-[1000px]"
          value={category.description}
          onChange={handleFilterChange}
        ></Textarea>
      </div>
      {/* <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="password" className="cursor-pointer">
          Password
        </label>
        <Input
          name="password"
          placeholder="Enter your password"
          id="password"
          control={control}
          type="password"
        ></Input>
      </div> */}
      {/* <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Gender</label>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-x-3">
            <RadioHook control={control} name="gender" value="male"></RadioHook>
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              name="gender"
              value="female"
            ></RadioHook>
            <span>Female</span>
          </div>
        </div>
      </div>
      <div className="">
        <CheckboxHook
          control={control}
          text="I accept the terms and conditions"
          name="term"
        ></CheckboxHook>
      </div> */}
      <div className="flex gap-5">
        {/* <button
          type="submit"
          className="w-2/4 p-5 mt-5 font-semibold text-white bg-blue-500 rounded-lg"
        >
          Add
        </button> */}
        <Button
          className="px-3 py-4 bg-blue-500 hover:bg-blue-700 "
          onClick={saveCategories}
        >
          Add
        </Button>
        <Button
          className="px-3 py-4 bg-red-500 hover:bg-red-700 "
          onClick={handleResetEmployee}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default AddCategory;
