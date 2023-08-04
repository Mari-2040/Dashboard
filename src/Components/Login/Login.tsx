import React from "react";
import MyForm from "./MyForm";

const Login = () => {
  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className='md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <MyForm />
        </div>
      </div>
    </section>
  );
};

export default Login;
