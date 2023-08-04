import React from "react";
import { FromDataProps } from "./MyForm";
import Form from "react-bootstrap/Form";


export default function SingUp({ formData, setFormData }: FromDataProps) {
  return (
    <Form className="m-10">
      <Form.Group className='mb-3 flex flex-col gap-1' controlId='exampleForm.ControlInput1'>
        <Form.Label>Email address</Form.Label>
        <Form.Control className="p-2 border border-gray-800 rounded-md focus:outline-none "
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          value={formData.email} type='email' placeholder='name@example.com'
        />
      </Form.Group>
      <Form.Group className='mb-3 flex flex-col gap-1' controlId='exampleForm.ControlInput1'>
        <Form.Label>Password</Form.Label>
        <Form.Control className="p-2 border border-gray-800 rounded-md focus:outline-none"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          value={formData.password} type='password' placeholder='***********'
        />
      </Form.Group>
    </Form>
  );
}
