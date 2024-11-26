import Image from 'next/image';
import React from 'react';

function ReadOne(props) {
   return (
      <>
         <p>Read-1</p>
         <Image src="/images/111.png" alt='img' width={300} height={300} />
      </>
   );
}

export default ReadOne;