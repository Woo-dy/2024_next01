import Image from 'next/image';
import React from 'react';
import './gallery.css';
import Image01 from "/public/images/111.png";
import Image02 from "/public/images/456.png";
import Image03 from "/public/images/bear_new.jpg";
import Image04 from "/public/images/green_cat.png";
import Image05 from "/public/images/green_dog.jpg";
import Image06 from "/public/images/orange_heart.png";

function Page(props) {
   return (
      <>
      <h3>Gallery</h3>
         <table>
            <tbody>
               <tr>
                  <td>
                     <Image src={Image01} alt="이미지" width={200} height={200}/>
                  </td>
                  <td>
                     <Image src={Image02} alt="이미지" width={200} height={200}/>
                  </td>
                  <td>
                     <Image src={Image03} alt="이미지" width={200} height={200}/>
                  </td>
               </tr>
               <tr>
                  <td>
                     <Image src={Image04} alt="이미지"  width={200} height={200}/>
                  </td>
                  <td>
                     <Image src={Image05} alt="이미지"  width={200} height={200}/>
                  </td>
                  <td>
                     <Image src={Image06} alt="이미지"  width={200} height={200}/>
                  </td>
               </tr>
            </tbody>
         </table>
      </>
   );
}

export default Page;