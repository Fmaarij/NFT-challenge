import React,{useState} from 'react';
import './header.css';
// import imgHeader from '../../../images/image-equilibrium.jpg';
import imgHeader from '../../images/image-equilibrium.jpg';
import imgAchanger from '../../images/icon-view.svg';
// let  imgheader = document.querySelector('#imgheader');


export default function Header() {
    let [state,setState] = useState(false)
    console.log(state)
    let hoverr = () => {
        setState(!state)
    }
    return (
        <div onClick={hoverr} className='header'>
            <div className='imgheader'>
                {
                    state? (
                        <img id="imgheader" src={imgHeader} alt="image"></img>
                        
                        ):(
                            
                            <img id="imgheader" src={imgAchanger} alt="image"></img>
                    )

                }
            </div>
        </div>
        
    )
}

// state? (
//     <img id="imgheader" src={imgHeader} alt="image"></img>
    
//     ):(
        
//         <img id="imgheader" src={imgAchanger} alt="image"></img>
// )

// if(state){
// <img id="imgheader" src={imgHeader} alt="image"></img>
// } else {
// <img id="imgheader" src={imgAchanger} alt="image"></img>
// }
