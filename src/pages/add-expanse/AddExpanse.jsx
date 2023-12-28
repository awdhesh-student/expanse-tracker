import React from 'react'
import TopFold from '../../components/topfold/TopFold'
import { Container } from '@mui/material'
import AddForms from '../../components/addforms/AddForms'

const AddExpanse = () => {
   return (
      <Container className='add-expanse'>
         <TopFold />
         <AddForms />
      </Container>
   )
}

export default AddExpanse
