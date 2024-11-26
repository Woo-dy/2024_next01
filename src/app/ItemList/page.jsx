"use client"
import React, { useEffect, useState } from 'react';
import './ItemList.css';
import { Divider, Grid2 } from '@mui/material';
import axios from 'axios';


function Page(props) {
   const [list, setList] = useState([]);
   const API_URL = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
   const getData = () => {
      axios.get(
         API_URL
      ).then(res =>{
         // console.log(res.data);
         setList(res.data);
      }).catch(
         console.log("에러발생")
      )
   };

   // 최초 한번만 실행
   useEffect(()=>{
      getData();
   }, [])

   return (
      <div style={{width:"80%", margin:"0 auto", padding:"20px"}}>
         <h2>베스트 상품</h2>
         <Divider />
         <Grid2 container spacing={2}>
            {list.map(k => {
               return <Grid2 key={k.id} size={{ xs: 3 }} >
                  <img src={k.image_link} alt="{k.image_link}" className='img_item' />
                  <strong className='title_item'>{k.name}</strong>
                  <span className='tex_info'>{k.category}</span>&nbsp;&nbsp;<span>{k.product_type}</span>
                  <strong className='num_price'>{k.price}</strong>
               </Grid2>
            })}
         </Grid2>
      </div>
   );
}

export default Page;