import React,{useContext} from 'react';
import DataContext from '../../context/DataContext';
import {Link} from 'react-router-dom';
import './home.css';


const Home = () => {
    const {page} = useContext(DataContext);
    return (
        <div className='main-home'>
            
            <div className='wrapper-pic'>
               <Link to={"/about"} className="about-link">About the project</Link>
                <img className='logo-ikea' src='../assets/images/logo-ikea.png'/>
                <img className='yellow-bg' src="../assets/images/yellow-bg.svg"/>
                <img className='pic-home only_mobile' src='../assets/images/pic-bg-home.png'/>
           </div>
            <p className='content-home'>
              Happy Plants are a range of IKEA
              <br/>
              indoor plants that don’t just look good,
              <br/>
              but do good, by helping to remove
              <br/>
              harmful toxins from the home.
            </p>
            <p className='answer-text'>
            Answer a few questions to find the
            <br/>
             plants that best suit your needs.
            </p>
            <div className='btn-plants'>
            <Link className='link-plant-home' to={`/questions/${1}`}>Find My Plants</Link>
            </div>
            <div className='btn-tellmemore'>
                <Link className='link-tellmemore' to={"/"}>Tell me more about the pollutants</Link>
            </div>
        </div>
    );
};



export default Home;