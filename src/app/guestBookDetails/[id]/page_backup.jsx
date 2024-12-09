import axios from "axios";
import './guestBookDetails.css';
import Detail from '@/app/detail/page';


async function Page({params}) {
   const param = await params;
   const gb_idx = param.id;
   
   const API_URL = `http://localhost:8080/api/guestbook/detail?gb_idx=${gb_idx}`;
   
   try {
      const response = await axios.get(API_URL);
      const item = response.data;
      return <Detail item={item}/>;
   } catch (error) {
      console.log("에러발생", error);
      return <div>Error.</div>
   }
}

export default Page;