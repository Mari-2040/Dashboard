import React from "react";
import { FromDataProps } from "./MyForm";
import { Form } from "react-bootstrap";

export default function Personal({ formData, setFormData }: FromDataProps) {
  return (
    <Form className="m-10">
      <Form.Group className='mb-3 flex flex-col gap-1' controlId='exampleForm.ControlInput1'>
        <Form.Label>Yor Name :</Form.Label>
        <Form.Control className="p-2 border border-gray-800 rounded-md focus:outline-none "
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          value={formData.name}
          type='name'
          placeholder='Yor Name'
        />
      </Form.Group>
      <Form.Group className='mb-3 flex flex-col gap-1' controlId='exampleForm.ControlInput1'>
        <Form.Label>Your Age :</Form.Label>
        <Form.Control className="p-2 border border-gray-800 rounded-md focus:outline-none"
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          value={formData.age}
          type='number'
          placeholder='Your Age....'
        />
      </Form.Group>
      <Form.Group className='mb-3 flex flex-col gap-1' controlId='exampleForm.ControlInput1'>
        <Form.Label>Your Phone Number :</Form.Label>
        <Form.Control className="p-2 border border-gray-800 rounded-md focus:outline-none"
          onChange={(e) => setFormData({ ...formData, number: e.target.value })}
          value={formData.number}
          type='text'
          placeholder='Your Phone Number'
        />
      </Form.Group>
    </Form>
  )
}
