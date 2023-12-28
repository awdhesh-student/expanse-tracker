import React from 'react'
import CardItem from './CardItem'
import { useSelector } from 'react-redux'
import "./expanseList.css"

const ExpanseList = () => {
   const {expanseList: list, query} = useSelector((state) => state.expanse)
   const filteredList = list.filter(item => item.title.includes(query))
   return (
      <div className='expanse-list'>
         {
            filteredList.length ?
               filteredList.map((item, i) => <CardItem key={i} item={item} />)
               : "No Expanse to show"
         }
      </div>
   )
}

export default ExpanseList
