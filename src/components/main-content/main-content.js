import React from 'react';
import Vehicle from '../vehicle/vehicle';

import './main-content.css';

class MainContent extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
            
    //     }
    // }
    render () {
        return (
            <div className="main-content-main-div">
               <div className='header'>
                   <h2>Featured Vehicles</h2>
               </div>
                <div className="featured-wrapper">
                <Vehicle/> 
                <Vehicle/> 
                <Vehicle/> 
                <Vehicle/> 
                <Vehicle/> 
                <Vehicle/> 
                <Vehicle/> 
                <Vehicle/> 
               </div>
            </div>
        )
    }
}

export default MainContent;
