"use client"; // 클라이언트 컴포넌트로 지정

import { Avatar, Button, FormControl, Stack, TextField } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import useAuthStore from '../../../store/authStore';


function Page(props) {
   const LOCAL_API_BASE_URL = process.env.NEXT_PUBLIC_LOCAL_API_BASE_URL;
   const API_URL = `${LOCAL_API_BASE_URL}/members/login`;
   const router = useRouter(); // useRouter 초기화


   const { login } = useAuthStore(); 

   // 텍스트 필드 초기화
   const intoUvo = { 
      m_id: "",
      m_pw: "",
   }

   const [uvo, setUvo] = useState(intoUvo);
   const isBtnChk = !uvo.m_id || !uvo.m_pw;

   // 서버에서 sendRedirect로 넘어오는 것을 받아서 로그인 처리
   useEffect(() => {
      // 주소창에 있는 파라미터 가져와서 로그인 처리하자.
      const searchParams = new URLSearchParams(window.location.search);
      const token = searchParams.get("token");
      const m_id = searchParams.get("username");
      const email = searchParams.get("email");
      
      if (token && m_id && email) {
         alert("로그인 성공");
         const user = {m_id, email}
         login();
         router.push("/");         
      }

   }, [login, router]); 

   function changeUvo(e) {
      const {name, value} = e.target;
      setUvo(prev => ({...prev, 
         [name] : value}));
   }

   function goServer(params) {
      axios.post(API_URL, uvo)
         .then(response => {
            const data = response.data;
            
            if (data.success) {
               alert(data.message);
               login(data.data, data.token);
               router.push('/');
            } else {
               alert(data.message);
               setUvo(intoUvo);
            }
         });
   }

   function handleKakaoLogin() {
      // 카카오 인증 엔드 포인트 (리다이렉트 주소)
      window.location.href = "http://localhost:8080/oauth2/authorization/kakao";
   }

   function handleNaverLogin() {
      // 네이버 인증 엔드 포인트
      window.location.href = "http://localhost:8080/oauth2/authorization/naver";
   }


   return (
      <div style={{padding:"100px 0px"}}>
         <FormControl>
            <Stack direction="column" spacing={1} alignItems='center'>
               <Avatar />

               <TextField type='text' label='아이디' name='m_id' value={uvo.m_id} onChange={changeUvo} placeholder='아이디' />

               <TextField type='password' label='비밀번호' name='m_pw' value={uvo.m_pw} onChange={changeUvo} placeholder='비밀번호' />

               <Button fullWidth variant='contained' disabled={isBtnChk} onClick={goServer}>Sign in</Button>

               <Button fullWidth variant='contained' onClick={handleKakaoLogin} style={{ backgroundColor: '#FFEB3B', color: "#333" }}>카카오 로그인</Button>

               <Button fullWidth variant='contained' onClick={handleNaverLogin} style={{ backgroundColor: '#03C75A' }}>네이버 로그인</Button>

            </Stack>

         </FormControl>
      </div>
   );
}

export default Page;