import React from 'react';
import NavigationBar from './NavigationBar';
import CarouselComp from './CarouselComp';
import GridDisp from './GridDisp';

function Homepage() {
    return (
        <>
            <NavigationBar />
            <CarouselComp />
            <h1 style={{backgroundColor : '#343a40',color:'gray'}}>Categories</h1>
            <GridDisp />
        </>
    );
}

export default Homepage;