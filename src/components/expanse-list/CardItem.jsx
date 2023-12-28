import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteExpanse } from '../../redux/actions/expenses';

const CardItem = ({ item }) => {
   const time = moment(item.createdAt).fromNow();
   const dispatch = useDispatch()

   const handleDelete = () => {
      dispatch(deleteExpanse(item));

   }
   return (
      <div className="card-container">
         <Card
            key={item.id}
            sx={{
               backgroundColor: 'black',
               position: 'relative',
               width: 250,
               margin: 1,
            }}
         >
            <CardContent style={{ position: 'relative' }}>
               <Typography gutterBottom variant="h5" component="div">
                  {item.title}
               </Typography>
               <IconButton
                  aria-label="delete"
                  style={{
                     position: 'absolute',
                     top: 30,
                     right: 25,
                     transform: 'translate(50%, -50%)', 
                  }}
                  onClick={handleDelete}
               >
                  <DeleteIcon />
               </IconButton>
               <Typography variant="body2" color="white">
                  ₹{item.category}
               </Typography>
               <Typography className='mt-2' variant="body2" color="white">
                  ₹{item.amount}
               </Typography>
               <Typography className='mt-3' style={{color: 'gray'}} variant="p" component="div">
                  {time}
               </Typography>
            </CardContent>
         </Card>
      </div>
   );
};

export default CardItem;
