import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addExpanse } from '../../redux/actions/expenses';

const AddForms = () => {

   const dispatch = useDispatch()

   const categories = [{
      id: 1,
      title: 'Education',
   }, {
      id: 2,
      title: "Health & Wellness"
   }, {
      id: 3,
      title: "Finance"
   }, {
      id: 4,
      title: 'Shopping'
   }, {
      id: 5,
      title: 'Others'
   }]
   const [form, setForm] = useState({
      title: '',
      amount: '',
      category: ''
   })

   const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
   }

   const handleFormCategoryChange = (e) => {
      setForm({ ...form, category: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (form.title === "" || !Number(form.amount) || isNaN(Number(form.amount)) || form.category === "") {
         return
      }

      const data = {
         title: form.title,
         amount: form.amount,
         category: form.category,
         createdAt: new Date().toISOString() 
      }
      dispatch(addExpanse(data))
   }

   return (
      <div>
         <Form onSubmit={handleSubmit} style={{ boxShadow: ' 0px 0px 50px grey', padding: 50, borderRadius: 15}}>
            <Row className="mb-3">
               <Form.Group as={Col} controlId="formGridTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control name='title' value={form.title} onChange={handleChange} type="text" placeholder="Enter Title" required />
               </Form.Group>

               <Form.Group as={Col} controlId="formGridLocation">
                  <Form.Label>Amount (in ₹)</Form.Label>
                  <Form.Control name='amount' value={form.amount} min={0} onChange={handleChange} type="number" placeholder="Amount" required />
               </Form.Group>
            </Row>
            <Row className="mb-3">
               <Form.Group as={Col} controlId="formGridJobType">
                  <Form.Label>Category</Form.Label>
                  <Form.Select value={form.category} onChange={handleFormCategoryChange} style={{width: '49%'}}>
                     <option style={{ color: 'black' }}>Select Category</option>
                     {categories.map((category) => (
                        <option style={{ color: 'black' }} key={category.id} value={category.title}>
                           {category.title}
                        </option>
                     ))}
                  </Form.Select>
               </Form.Group>
            </Row>

            <Button variant="primary" className='my-4' type="submit">
               Submit
            </Button>
         </Form>
      </div>
   )
}

export default AddForms
