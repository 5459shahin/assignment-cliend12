import React from 'react';
import Review from '../../../Review/Review';
import Reviews from '../../../Review/Reviews';
import Banner from '../../Banner';
import BusinessSummary from '../../BusinessSummary/BusinessSummary';
import Items from '../../Items/Items';


const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Items></Items>
            <Reviews></Reviews>
            
            <BusinessSummary></BusinessSummary>
           

            
          
        </div>
    );
};

export default Home;