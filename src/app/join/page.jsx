"use client"; // 클라이언트 컴포넌트로 지정
import { Avatar, Button, FormControl, Stack, TextField } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function Page(props) {
   const LOCAL_API_BASE_URL = process.env.NEXT_PUBLIC_LOCAL_API_BASE_URL;
   const API_URL = `${LOCAL_API_BASE_URL}/members/join`;
   const router = useRouter(); // useRouter 초기화
   // 텍스트 필드 초기화
   const intoUvo = { 
      m_id: "",
      m_pw: "",
      m_name: "",
      m_age: "",
   }
   const [uvo, setUvo] = useState(intoUvo);

   // const [uvo, setUvo] = useState({
   //    m_id: "",
   //    m_pw: "",
   //    m_name: "",
   //    m_age: "",
   // });

   // 모든 필드가 비어있지 않아야 true => 버튼이 활성화
   const isBtnChk = !uvo.m_id || !uvo.m_pw || !uvo.m_name || !uvo.m_age;

   function changeUvo(e) {
      const {name, value} = e.target;
      setUvo(prev => ({...prev, 
         [name] : value}));
   }

   // function goServer(params) {
   //    axios.post(
   //       // 비밀번호 때문에 보안
   //       API_URL, uvo)
   //       .then(date => {
   //       if (date.success) {
   //          // console.log(date);
   //          alert(date.massage);
   //       } else {
   //          return;
   //       }
   //    });
   // }

   function goServer(params) {
      axios.post(API_URL, uvo)
         .then(data => {
            if (data.data.success) {
               alert(data.data.message);
               router.push("/login");
            } else {
               alert(data.data.message);
               setUvo(intoUvo);
            }
         });
   }

   return (
      <div style={{padding:"100px 0px"}}>
         <FormControl>
            <Stack direction="column" spacing={1} alignItems='center'>
               <Avatar />

               <TextField type='text' label='아이디' name='m_id' value={uvo.m_id} onChange={changeUvo} placeholder='아이디' />

               <TextField type='password' label='비밀번호' name='m_pw' value={uvo.m_pw} onChange={changeUvo} placeholder='비밀번호' />

               <TextField type='text' label='이름' name='m_name' value={uvo.m_name} onChange={changeUvo} placeholder='이름' />

               <TextField type='number' label='나이' name='m_age' value={uvo.m_age} onChange={changeUvo} placeholder='나이' />

               <Button fullWidth variant='contained' disabled={isBtnChk} onClick={goServer}>JOIN</Button>
            </Stack>
         </FormControl>
      </div>
   );
}

export default Page;