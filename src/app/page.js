// import React from 'react'
// import Carousel from './Carousel'
// import Link from 'next/link'

// const page = () => {
//   return (
//     <>
//       <div className="responsive-container">
//         <p className="responsive-text newLooking"  >Looking for a new</p>
//         <p className="responsive-text newTechnology">technology provider?</p>
//         {/* <p className="responsive-text newExplore">Explore our <span>success stories</span>  to see how businesses like yours <br/>have transformed with Grafterr's technology.</p> */}
//         <p className="responsive-text newExplore">
//   Explore our <span>success stories</span> to see how businesses like yours
//   <br className="break-large-screen" /> have transformed with Grafterr's technology.
// </p>
//         <Link href="/success-stories" className='new-learn-more' >Learn more</Link>
//       </div>



//       <div className="responsive-container2 ">
//             <div className="vector-element bg-blue-400"></div>
//             <div className="vector-2"></div>

            
//           <p className="heading-text">
//             More ways <span>Grafterr</span> can help you <br /> grow your business
//           </p>
//           <p className="sub-text">
//             An award-winning, end-to-end restaurant technology & payments platform, designed to streamline food <br /> service and automate complex venue operations
//           </p>
       
// </div>
// <Carousel />

//     </>
//   )
// }

// export default page



























import React from 'react';
import Carousel from './Carousel';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      {/* First Container */}
      <div className="responsive-container">
        <p className="responsive-text newLooking">Looking for a new</p>
        <p className="responsive-text newTechnology">technology provider?</p>
        <p className="responsive-text newExplore">
          Explore our <span>success stories</span> to see how businesses like yours
          <br className="break-large-screen" /> have transformed with Grafterr's technology.
        </p>
        <Link href="https://www.grafterr.com/"    className="new-learn-more">
           Learn more
        </Link>
      </div>

      {/* Second Container */}
      <div className="responsive-container2">
        <div className="vector-element bg-blue-400"></div>
        <div className="vector-2"></div>
        <p className="heading-text">
          More ways <span>Grafterr</span> can help you <br /> grow your business
        </p>
        <p className="sub-text">
          An award-winning, end-to-end restaurant technology & payments platform, designed to
          streamline food <br className="break-large-screen" /> service and automate complex venue
          operations
        </p>

      
        <Carousel />
     

      </div>


     
    </>
  );
};

export default Page;