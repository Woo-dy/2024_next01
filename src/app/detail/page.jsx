"use client"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Link from 'next/link';
import React from 'react';

function page({item}) {
   return (
      <>
         <TableContainer component={Paper} className="table-container">
               <Table className="custom-table">
                  <TableHead>
                     <TableRow>
                        <TableCell className="table-header">이름</TableCell>
                        <TableCell className="table-header">제목</TableCell>
                        <TableCell className="table-header">내용</TableCell>
                        <TableCell className="table-header">이메일</TableCell>
                        <TableCell className="table-header">등록일</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     <TableRow>
                        <TableCell className="table-cell">{item.gb_name}</TableCell>
                        <TableCell className="table-cell">
                           {item.gb_subject}
                        </TableCell>
                        <TableCell className="table-cell">{item.gb_content}</TableCell>
                        <TableCell className="table-cell">{item.gb_email}</TableCell>
                        <TableCell className="table-cell">{item.gb_regdate.substring(0, 10)}</TableCell>
                     </TableRow>
                  </TableBody>
               </Table>
         </TableContainer>
         <div className="back_btn">
            <Link href="/guestBookList">뒤로가기</Link>
         </div>
      </>
   );
}

export default page;