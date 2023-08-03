import React, { useState } from "react";
import SingUp from "./SingUp";
import Personal from "./Personal";
import Final from "./Final";
import { ProgressBar } from "react-bootstrap";
import { colors } from "@mui/material";

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
    <div
      style={{ width: "500px" }}
      className='m-auto shadow rounded p-5 bg-white'
    >
      <ProgressBar className=" rounded-lg bg-blue-800 p-1 text-white" 
         now={FormTitle.length - 1 === page ? 100 : (page + 1) * 33}
         label={`${FormTitle.length - 1 === page ? 100 : (page + 1) * 33}%`}
      />

      <h3 className=" justify-center flex mt-10 text-2xl text-red-500 font-medium">{FormTitle[page]}</h3>
      {formDisplay()}
      <div className='flex'>
        <button
          disabled={page === 0}
          className='mx-3 ml-24 flex bg-red-500 p-1 rounded text-white px-10'
          onClick={() => setPge((currPage) => currPage - 1)}
        >
          Prev
        </button>
        <button
          disabled={!formData.yourDataCorrect && FormTitle.length - 1 === page}
          className='ml-5 flex bg-blue-500 p-1 rounded text-white px-10'
          onClick={() => {
            if (page === FormTitle.length - 1) {
              alert("mari");
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

{
  /* <div className='light mt-10'>
        <div className='beam'></div>
        <div className='hilt'>
          <div className='crown'></div>
          <div className='stripes'>
            <div className='part'></div>
            <div className='part'></div>
            <div className='part'></div>
          </div>
          <div className='part-circle'></div>
        </div>
      </div> */
}
