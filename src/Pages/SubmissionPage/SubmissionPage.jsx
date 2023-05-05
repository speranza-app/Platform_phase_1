import React, { useState } from "react";
import CustomTextInput from "../../Components/CustomTextInput";

function Input({ label = "", name = "", placeholder = "", type="text", children, ...rest }) {
  if (!placeholder) {
    placeholder = label;
  }

  return (
    <div className="grid gap-1 group">
      <label
        className="text-sm transition-all group-focus-within:text-blue-800"
        htmlFor={name}
      >
        {label}
      </label>
      {children ? children : (
        <input
          {...rest}
          className="px-4 py-2 rounded border border-blue-800 transition-all outline-none group-focus-within:ring"
          placeholder={placeholder}
          type={type}
          name={name}
          id={name}
        />
      )}
    </div>
  );
}

const SubmissionPage = () => {
  return (
    <section className="section py-[120px]">
      <form action="" className="mx-auto space-y-4 max-w-md">
        <h1 className="text-2xl font-bold">Join Now</h1>
        <Input name="name" label="Full Name" />
        <Input name="phone" type="tel" label="Mobile" />
        <Input name="email" type="email" label="Your college Email" />
        <Input name="college" type="email" label="College name" />
        <Input name="rollNo" type="email" label="College Roll number" />
        <Input name="passingOutYear" type="number" label="Passing out year" />
        <Input label="Already part of Coign">
          <div className="flex gap-6 items-center px-4 py-2 rounded border border-blue-800 transition-shadow focus-within:ring">
            <label className="flex gap-3 items-center">
              Yes
              <input
                className="w-4 h-4 accent-blue-800"
                type="radio"
                name="inCoign"
                value="yes"
              />
            </label>
            <label className="flex gap-3 items-center">
              No
              <input
                className="w-4 h-4 accent-blue-800"
                type="radio"
                name="inCoign"
                value="no"
              />
            </label>
          </div>
        </Input>
        <button className="px-4 py-2 w-full text-white bg-blue-800 rounded">
          Submit
        </button>
      </form>
    </section>
  );
};

export default SubmissionPage;
