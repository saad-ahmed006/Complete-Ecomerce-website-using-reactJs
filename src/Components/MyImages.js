import React, { useState } from "react";
import styled from "styled-components";
const Wrapper = styled.section`
.Container{
  display: flex;
}
.FirstColoum img{
width: 15rem;
padding: 0.3rem;
border-radius: 6px;
}

.SecondColoum img{
  padding:0.3rem;
  border-radius: 6px;
width: 25rem;
}

@media (max-width: ${({ theme }) => theme.media.tab}){
  .Container{
  display:flex;
  padding: 0rem ;
  flex-direction: column; 
}
.FirstColoum {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

}
.FirstColoum img {
width: 15rem;
height:10rem;
padding: 0.3rem;
border-radius: 6px;
}
.SecondColoum img{
  padding:0.3rem;
  border-radius: 6px;
width: 100%;
}
}
`;


const MyImage = ({ imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);

  return (
    <Wrapper>
      <div className="Container">
      <div className="FirstColoum">
        {imgs.map((curElm, index) => {
          return (
            <figure>
              <img
                src={curElm.url}
                alt={curElm.filename}
                className="box-image--style"
                key={index}
                onClick={() => setMainImage(curElm)}
              />
            </figure>
          );
        })}
      </div>
      {/* 2nd column  */}

      <div className="SecondColoum">
        <img src={mainImage.url} alt={mainImage.filename} />
      </div>
      </div>
    </Wrapper>
  );
};

export default MyImage


// import { useState } from 'react';
// import styled from 'styled-components'
// const Wrapper = styled.section`
// .Container{
//   display: flex;
// }
// .FirstColoum img{
// width: 15rem;
// padding: 0.3rem;
// border-radius: 6px;
// }

// .SecondColoum img{
//   padding:0.3rem;
//   border-radius: 6px;
// width: 30rem;
// }
// `;
// export default function MyImages({ imgs = [{ url: "" }] }) {
//      const [mainImag, setMainImag] = useState(imgs[0])

//   return (
//     <Wrapper>
//       <div className='Container'>
//         <div className='FirstColoum'>
//           {imgs.map((curElm, index) => {
//             return (
//               <figure>
//                 <img
//                   src={curElm.url}
//                   alt={curElm.filename}
//                   className="box-image--style"
//                   key={index}
//                   onClick={() => setMainImag(curElm)}
//                 />
//               </figure>
//             );
//           })}
//         </div>
//         <div className='SecondColoum'>
//           <figure>
//           <img src={mainImag.url} alt={mainImag.filename} />
//           </figure>
//         </div>
//       </div>
//     </Wrapper>
//   )
// }
