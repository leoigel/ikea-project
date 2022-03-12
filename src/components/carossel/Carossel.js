import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useParams, useNavigate } from 'react-router-dom';
import DataContext from '../../context/DataContext';
import Header from '../header/Header';
import './carossel.css';
import 'swiper/css';
const Carossel = () => {
    const { yesAnswer, list, setList, setYesAnser } = useContext(DataContext);
    const { id } = useParams();
    const [card, setCard] = useState(null);
    const [last, setLast] = useState('');
    let navigate = useNavigate();
    useEffect(() => {
        let uniqueItem = yesAnswer.find((item) => {
            let keys = Object.keys(item);
            let lastChart = keys.join('').slice(-1);
            setLast(lastChart)
            if (parseInt(lastChart) === parseInt(id)) {
                return item;
            }
        })
        let uniqueArr = Object.values(uniqueItem);
        setCard(uniqueArr[0]);
    }, [id]);
    const handleAddItem = (ID) => {
        const newCard = card.map((item) => {
            if (item.id === ID) {
                item = {
                    id: item.id,
                    srcImgMobile: item.srcImgMobile,
                    namePlant: item.namePlant,
                    text: item.text,
                    icons: item.icons,
                    type: !item.type,
                    read: item.read,
                    cm: item.cm,
                    balcode: item.balcode,
                    picListMobile: item.picListMobile
                }
            }
            // console.log(item)
            return item;
        })
        setCard(newCard);
        let newYesAnswer = yesAnswer.map((ansewr => {
            if (Object.getOwnPropertyNames(ansewr).join('') === 'item_' + last) {
                ansewr[Object.getOwnPropertyNames(ansewr).join('')] = newCard;
            }
            return ansewr;
        }))
        setYesAnser(newYesAnswer);
        handleListItem(newYesAnswer);

        return newCard;

    }

    const handleRead = (ID) => {
        const newCard = card.map((item) => {
            if (item.id === ID) {
                item = {
                    id: item.id,
                    srcImgMobile: item.srcImgMobile,
                    namePlant: item.namePlant,
                    text: item.text,
                    icons: item.icons,
                    type: item.type,
                    read: !item.read,
                }
            }
            return item;
        })
        setCard(newCard);

        return newCard;
    }

    const handleCurrentPage = () => {
        navigate(`/questions/${parseInt(id) + 1}`);
    }

    const handleListItem = (lists) => {

        let tmpList = [];

        Object.values(lists).map((list) => {
            Object.values(list).map((item) => {
                item.map((obj) => {
                    tmpList.push(obj)
                })
            })
        })


        const addList = tmpList.filter((list, i) => {
            return list.type === true;
        })

        // const newList = list.concat(addList);
        setList(addList);
        // console.log(list)
    }
    return (
        <div>
            <Header headerId={id} />
            <Swiper
                spaceBetween={-35}
                slidesPerView={1}>
                {card && (
                    card.map((item, i) => {
                        return (
                            <SwiperSlide>
                                <div className='wrapper-pic'>
                                    <img className='card-pic' src={item.srcImgMobile} />
                                    <div onClick={() => handleAddItem(item.id)} className={!item.type ? 'btn-add' : 'btn-removed'}>
                                        {!item.type ? <div>
                                            <span>Add to List</span>
                                        </div> : <div>
                                            <span>Added to list</span>
                                        </div>}
                                    </div>
                                </div>
                                <div className='content-wrapper'>
                                    <div className='content'>
                                        <div className='plant-name'>{item.namePlant}</div>
                                        <div className='help-container'><span className='help'>Helps reduce: </span>{item.icons.map((icon) => {
                                            return (
                                                <span className='wrapper-exegol'>
                                                    <img className='exegol' src='../assets/images/exegol.svg' />
                                                    <div className='exegol-text'>{icon.chart}</div>
                                                </span>
                                            )
                                        })}</div>
                                        <div className='wrapper-card-text'>
                                            <div className={!item.read ? 'card-text' : 'card-text-full'}>
                                                <div >
                                                    <span>{item.text}</span>
                                                </div>
                                            </div>
                                            <span className='read' onClick={() => handleRead(item.id)}>... <span>{!item.read ? 'Read less' : 'Read More'}</span></span>
                                        </div>
                                        <div onClick={handleCurrentPage} className="btn-next">Next Question</div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        )
                    })
                )}
            </Swiper>
        </div>
    );
};



export default Carossel;
