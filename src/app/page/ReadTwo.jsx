import Image from 'next/image';
import React from 'react';

function ReadTwo(props) {
   return (
      <>
         <p>Read-2</p>
         <Image src="/images/456.png" alt='img' width={300} height={300} />
      </>
   );
}

export default ReadTwo;