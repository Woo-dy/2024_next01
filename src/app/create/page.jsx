import React from 'react';
import Image from 'next/image';
import Image01 from "/public/images/456.png";

// 자식 컴포넌트
function Page(props) {
   return (
      <>
         {/* 자식 페이지 */}
         <h2>Create!!</h2>
         <p><Image src={Image01} alt="이미지" width={200} height={200} style={{borderRadius:"50%"}} /></p>
      </>
   );
}

export default Page;