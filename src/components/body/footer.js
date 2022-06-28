import React from 'react';
import avatar from '../../images/image-avatar.png';
import './footer.css';
class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <div className=''>
                    <div className='d-flex align-items-center justify-content-start avatarImg gap-2'>
                        <img className="w-25" src={avatar}></img>
                        <p  className=" text-white">
                        <span>Creation of </span>Jules Wyvern
                    </p>
                    </div>
                   

                </div>
            </div>
        );
    }
}
export default Footer;