import React from 'react';
import './section2.css';
import diamond from '../../images/icon-ethereum.svg';
import clock from '../../images/icon-clock.svg';   
class Section2 extends React.Component {
    render() {
        return (
            <div className='section2'>
                <div className='row '>
                    <div className='col d-flex gap-2'> 
                    <div className='imagediamonds '>
                        <img src={diamond}></img> 
                    </div>
                    <p className=' txtDiam'>0.041ETH</p>
                    
                    </div>
                    <div className='col d-flex  gap-2'>
                        <div className='imageclock'>
                        <img src={clock}></img>
                        </div>
                        <p className=' txtclock'>3 days left</p>
                    </div>
                </div>
            </div>    
        );
    }
}
export default Section2;