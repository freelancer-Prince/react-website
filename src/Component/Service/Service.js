import React from 'react';
import Cards from '../Card/Cards';
import FackData from '../FackData/FackData';
const Service = () => {

    return (
    <>
        <div className="my-5">
            <h1 className="text-center">Our Services</h1>
        </div>
    <div className="container-fluid mb-5">
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row gy-4">
                    {
                        FackData.map(FackData =><Cards FackData={FackData}></Cards>)
                    }
                 </div>
                 </div>
            </div>
        </div>
    </>

    );
};

export default Service;