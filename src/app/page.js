
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
          Explore our <span className="success-stories"><Link href="https://www.grafterr.com/">success stories</Link></span> to see how businesses like yours
          <span className="break-large-screen" > have transformed with Grafterr&apos;s technology.</span>
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
          More ways <span className="Grafterr"><Link href="https://www.grafterr.com/">Grafterr</Link> </span> can help you <span className="grow your business"> grow your business</span>
        </p>
        <p className="sub-text">
          An award-winning, end-to-end restaurant technology & payments platform, designed to
          streamline food <span className="break-large-screen"> service and automate complex venue
          operations</span>
        </p>

      
        <Carousel />
     

      </div>


     
    </>
  );
};

export default Page;