import React from 'react';
import Header from './header.js';
import Section1 from './section1.js';
import Section2 from './section2.js';
import Hr from './hr.js';
import Footer from './footer.js';
import './body.css'
class Body extends React.Component {
    render() {
        return (
        <div className='divGeneral'>
            <div className='body'>
                    < Header />
                    < Section1 />
                    < Section2 />
                    < Hr />
                    < Footer />
                </div>
            </div>
        );
    }
}
export default Body;