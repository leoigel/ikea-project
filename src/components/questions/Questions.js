import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import DataContext from '../../context/DataContext';
import './questions.css';
import Header from '../header/Header.js';

const Questions = () => {
    const { id } = useParams();
    const [currentPage, setCurrentPage] = useState(null)
    const { page, chooseNo, setPage, list } = useContext(DataContext);
    let navigate = useNavigate();
    const size = chooseNo.length;
    useEffect(() => {
        const newPage = chooseNo.find((item) => item.id === parseInt(id));
        if (newPage) {
            setCurrentPage(newPage);
            // setPage(prevState => prevState + 1);
        }
    }, [id]);
    const handleCurrentPage = () => {
        console.log(id)
        if ((size) === parseInt(id)) {
            navigate('/list-items')
        } else {
            navigate(`/questions/${parseInt(id) + 1}`);
        }

    }
    const handleCarosselPage = () => {
        navigate(`/carossel-page/${id}`);
    }
    console.log(list)
    return (
        <div>
            <Header />
            {currentPage && currentPage.id == id && (
                <div className='main-page'>
                    <video className='video' autoPlay muted loop>
                        <source className='currentPage-pic' src={currentPage.srcImgMobile} type="video/mp4" />
                    </video>
                    <div className='wrapperCurrentText'>
                        <p className='currentText'>{currentPage.text}</p>
                    </div>
                    <div className='btn-wrapper'>
                        <span className='btn-question btn-yes' onClick={handleCurrentPage}>No</span>
                        <span className='btn-question btn-no' onClick={handleCarosselPage}>Yes</span>
                    </div>
                    <div className='wrapper-hamburguer'>
                        {list.length > 0 && list && (<div className='countItems'>{list.length}</div>)}
                        <img className='hambuguer' src='../assets/images/hambuguer.svg' />
                        <div className='problem'>Why does it matter?</div>
                    </div>
                </div>

            )}
        </div>
    );
};

{/* <img className='currentPage-pic' src={currentPage.srcImgMobile}/> */ }

export default Questions;