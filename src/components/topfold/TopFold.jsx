import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CancelIcon from '@mui/icons-material/Cancel';
import { Button } from '@mui/material';

import './topfold.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchExpanse } from '../../redux/actions/expenses';

const TopFold = () => {

   const [query, setQuery] = useState("")
   const dispatch = useDispatch()
   const handleQuery = (e) => {
      setQuery(e.target.value)
      dispatch(searchExpanse(e.target.value))
   }

   return (
      <div className="topfold">
         {window.location.pathname === "/" ? <div className='home-topfold'>
            <div className="searchBar">
               <SearchIcon className='glass' />
               <input type="text" value={query} placeholder="Search for movies, TV shows or people" onChange={(e) => handleQuery(e)} />
            </div>
            <Link to={'/add-expanse'}>
               <div className="add-btn">
                  <Button color='secondary' variant='contained'>
                     <AddCircleIcon />Add
                  </Button>
               </div>
            </Link>

         </div> :
            <div className="add-topfold">
               <Link to={'/'}><div className="add-topfold-btn my-2">
                  <ArrowBackIcon className='icon' /> <p className='m-0'>Go Back</p>
               </div>
               </Link>
               <Link to={'/'}><div className="add-topfold-btn my-2">
                  <CancelIcon className='icon' /> <p className='m-0'>Cancel</p>
               </div>
               </Link>


            </div>
         }

      </div>
   )
}

export default TopFold
