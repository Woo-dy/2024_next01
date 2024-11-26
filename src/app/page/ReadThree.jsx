import Image from 'next/image';
import React from 'react';

function ReadThree(props) {
   return (
      <>
         <p>Read-3</p>
         <Image src="/images/green_cat.png" alt='img' width={300} height={300} />
      </>
   );
}

export default ReadThree;