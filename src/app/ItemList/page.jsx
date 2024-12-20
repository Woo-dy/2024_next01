"use client"
import React, { useEffect, useState } from 'react';
import './ItemList.css';
import { Divider, Grid2 } from '@mui/material';
import axios from 'axios';
import Link from 'next/link';

function Page(props) {
   const MAKEUP_API_BASE_URL  = process.env.NEXT_PUBLIC_MAKEUP_API_BASE_URL;
   const [list, setList] = useState([]); // 데이터 상태
   const [loading, setLoading] = useState(true); // 로딩 상태
   const [error, setError] = useState(null); // 에러 상태
   // const API_URL = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
   const API_URL = `${MAKEUP_API_BASE_URL}/v1/products.json?brand=maybelline`;

   // 데이터 가져오기
   const getData = async () => {
      try {
         setLoading(true); // 로딩 상태 시작
         const response = await axios.get(API_URL);
         setList(response.data.slice(0, 12));
      } catch (error) {
         console.log("에러발생", error);
         setError("Failed to fetch product data");
      } finally {
         setLoading(false); // 로딩 종료
      }
   };

   // 최초 한번만 실행
   useEffect(()=>{
      getData();
   }, []);

   // 로딩 중
   if(loading) {
      return <div style={{textAlign:"center", padding:"20px"}}>Loading...</div>;
   }

   // 에러 발생 시
   if(error) {
      return <div style={{textAlign:"center", padding:"20px", color:"red"}}>
         <h2>Error:</h2>
         <p>{error}</p>
      </div>;
   }

   return (
      <div style={{width:"80%", margin:"0 auto", padding:"20px"}}>
         <h2>베스트 상품</h2>
         <Divider />
         <Grid2 container spacing={2}>
            {list.map(k => {
               return <Grid2 key={k.id} size={{ xs: 3 }} >
                  <Link href={'/view/' + k.id}>
                     <img src={k.image_link} alt="{k.image_link}" className='img_item' />
                     <strong className='title_item'>{k.name}</strong>
                     <span className='txt_info'>{k.category}</span>
                     <span>{k.product_type}</span>
                     <strong className='num_price'>{k.price}</strong>
                  </Link>
               </Grid2>
            })}
         </Grid2>
      </div>
   );
}

export default Page;