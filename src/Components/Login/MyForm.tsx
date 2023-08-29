import React, { useState } from "react";
import SingUp from "./SingUp";
import Personal from "./Personal";
import Final from "./Final";
import { useNavigate } from "react-router-dom";

export interface FormProps {
  formData: {
    email: string;
    password: string;
    name: string;
    age: string;
    number: string;
    yourDataCorrect: boolean;
  };
}

export interface CompletFormState {
  email: string;
  password: string;
  name: string;
  age: string;
  number: string;
  yourDataCorrect: boolean;
}

export interface FromDataProps extends FormProps {
  setFormData: React.Dispatch<React.SetStateAction<CompletFormState>>;
}

export default function MyForm() {
  const [page, setPge] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    age: "",
    number: "",
    yourDataCorrect: false,
  });

  const FormTitle = ["SingUp", "PersonalInfo", "Confirm"];
  const navigate = useNavigate();

  const formDisplay = () => {
    if (page === 0) {
      return (
        <SingUp
          formData={formData}
          setFormData={setFormData}
        />
      );
    } else if (page === 1) {
      return (
        <Personal
          formData={formData}
          setFormData={setFormData}
        />
      );
    } else {
      return (
        <Final
          formData={formData}
          setFormData={setFormData}
        />
      );
    }
  };

  return (
    <div style={{ width: "500px" }} className='m-auto shadow rounded p-6 bg-white '>
      <a href="#" className="flex justify-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img className="w-52 bg-cover h-auto mr-2" src="./logo.svg" alt="logo" /> 
      </a>
     <h1 className="flex text-xl justify-center font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white"> Sign in to your account</h1>
      <h3 className="justify-center flex mt-10 text-2xl text-red-500 font-medium">{FormTitle[page]}</h3>
        {formDisplay()}
        <div className='flex'>
          <button disabled={page === 0} className='mx-3 ml-24 flex bg-red-500 p-1 rounded text-white px-10'
            onClick={() => setPge((currPage) => currPage - 1)}
          >
            Prev
          </button>
          <button disabled={!formData.yourDataCorrect && FormTitle.length - 1 === page}
            className='ml-5 flex bg-blue-500 p-1 rounded px-10'
            onClick={() => {
              if (page === FormTitle.length - 1) {
                navigate(`/`)
              } else {
                setPge((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitle.length - 1 ? "submit" : "Next"}
          </button>
        </div>
    </div>
  );
}