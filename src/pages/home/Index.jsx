import React from 'react'
import TopFold from '../../components/topfold/TopFold'
import { Container } from '@mui/material'
import ExpanseList from '../../components/expanse-list/ExpanseList'

const Home = () => {
  return (

    <Container>
      <TopFold />
      <ExpanseList />
    </Container>

  )
}

export default Home
