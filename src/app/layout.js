"use client"; // 클라이언트 컴포넌트로 지정
// layout.js는 선택이다. (Rootlayout 제외)
// layout 이 필요없는 간단한 페이지에서는 생략 가능

import Link from "next/link";
import './globals.css';

// 페이지 전체의 공통 구조를 렌더링 할 때

// Zustand
import useAuthStore from '../../store/authStore';
import { Button, Stack } from "@mui/material";

// 부모 컴포넌트
export default function RootLayout({ children }) {
   // Zustand 상태 가져오기
   const { isAuthenticated, token, user, logout } = useAuthStore();
   console.log("token : ", token);
   console.log("isAuthenticated : ", isAuthenticated);

   const handleLogout = () => {
      // zustand에 있는 함수 호출
      logout();
      alert("로그아웃 되었습니다.")
   }
   
   return (
      <html lang="en">
         
      <body style={{textAlign:"center"}}>
         {/* <header style={{marginTop: "50px"}}>
            공통 헤더
         </header> */}
         {/* 자식 컴포넌트가 렌더링 된다. */}
         {/* {children}
         <footer style={{marginTop: "50px"}}>
            공통 푸터
         </footer> */}
         <h1><Link href="/">WEB</Link></h1>
         <nav>
            <Stack direction="row" spacing={2} justifyContent='center'>
            <ol style={{width:"100%"}}>
               <Button href="/read/1">HTML</Button>
               <Button href="/read/2">CSS</Button>
               <Button href="/read/3">JAVASCRIPT</Button>
               <Button href="/gallery">Image</Button>
               <Button href="/ItemList">ItemList(외부서버)</Button>
               <Button href="/guestBookList">Guestbook(Spring 서버)</Button>
               {isAuthenticated ? (
                  <>
                     <span>{user.m_id}님 환영합니다.</span>
                     <Button onClick={handleLogout}>Logout(Spring 서버)</Button>
                  </>
               ) : (
                  <>
                     <Button href="/login">Login(Spring 서버)</Button>
                     <Button href="/join">Join(Spring 서버)</Button>
                  </>
               )}
            </ol>
            </Stack>
         </nav>
         {children}
         <ul>
            {/* /create 이면 create 폴더를 찾는다. (page.jsx (필수), layout.jsx (선택) 가 있어야 한다.) */}
            <li><Link href="/create">Create</Link></li>
            <li>Update</li>
            <li>
               <input type="button" value="delete" />
            </li>
         </ul>
      </body>
      </html>
   );
}
