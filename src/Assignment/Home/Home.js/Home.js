import React from 'react';
import Review from '../../../Review/Review';
import Banner from '../../Banner';
import BusinessSummary from '../../BusinessSummary/BusinessSummary';
import Items from '../../Items/Items';


const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Items></Items>
            <Review></Review>
            
            <BusinessSummary></BusinessSummary>
           

            
          
        </div>
    );
};

export default Home;