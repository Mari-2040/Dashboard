import React from "react";
import { FromDataProps } from "./MyForm";
import Form from "react-bootstrap/Form";

export default function Final({ formData, setFormData }: FromDataProps) {
  return (
    <Form className='m-10'>
      <Form.Group className='mb-3 flex flex-col gap-1' controlId='exampleForm.ControlInput1'>
        <Form.Label>Is all the data taht you have entered correct ?</Form.Label>
        <Form.Check
          onChange={(e) => setFormData({ ...formData, yourDataCorrect: !formData.yourDataCorrect})}
          checked={formData.yourDataCorrect} type="checkbox" key="yourDataCorrect"
        />
      </Form.Group>
    </Form>
  );
}

