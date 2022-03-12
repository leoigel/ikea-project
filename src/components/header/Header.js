import React,{useEffect,useState} from 'react';
import {useNavigate,useParams,useLocation, Link} from 'react-router-dom';
import DataContext from '../../context/DataContext';

import './header.css';


const Header = () => {
    const [bulls,setbull] = useState([
        {id:1,backgroundColor:'transprent'},
        {id:2,backgroundColor:'transprent'},
        {id:3,backgroundColor:'transprent'},
        {id:4,backgroundColor:'transprent'},
        {id:5,backgroundColor:'transprent'},
        {id:6,backgroundColor:'transprent'},
        
    ])
 
  
    
    const { id } = useParams();
    let navigate = useNavigate();
    const location = useLocation();
    const goBack = () => {
        // need to fix here!!!
         navigate(-1);
    }
    useEffect(() => {
        paintBull();
       
    },[id]);

    const paintBull = () => {
        const firstPart = bulls.slice(0,parseInt(id));
        const LastPart = bulls.slice(parseInt(id));
        
        const newFirstPart = firstPart.map((first) => {
            return {
                id:first.id,
                backgroundColor:'#000'
            };
        })
      let finalArray =  newFirstPart.concat(LastPart)
      setbull(finalArray)
    }

    return (
        <div className='wrapperHeader'>
            <Link to={'/nothing'}>
            <img onClick={goBack} className='arrow-back' src='../assets/images/arrow-back.png'/>
            </Link>
             <img className='logo-ikea-header' src='../assets/images/logo-ikea.png'/>
             <div className='wrapper-bulls'>
                {bulls.map((bull,i) => {
                    return (
                        <div className='bull' style={{backgroundColor:bull.backgroundColor}}></div>
                    )
                })}
             </div>
        </div>
    );
};



export default Header;