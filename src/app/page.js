// page.js는 필수이다. (생략불가)
// 각 경로(/, /about, /content 등) 마다 페이지를 렌더링 하려면 
// 해당 경로에 page.js 파일이 반드시 필요하다.

// 자식 컴포넌트
export default function Home() {
   return (
      <>
         {/* 해당 내용은 부모 컴포넌트의 props => {chuldren} 에 삽입된다.  */}
         {/* <h1>WelCome Home</h1> */}
         {/* 이미지를 import 하지 않으면 너비와 높이를 넣어줘야 합니다. */}
         {/* <p><Image src="/images/111.png" alt="이미지" width={100} height={100} /></p> */}
         {/* 너비 높이는 선택 사항 */}
         {/* <p><Image src={Image01} alt="이미지" /></p>
         <p><Image src={Image01} alt="이미지" width={100} height={100} /></p> */}
      </>
   );
}
