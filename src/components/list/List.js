import React, { useContext, useEffect, useState } from 'react';
import DataContext from '../../context/DataContext';
import Header from '../header/Header';
import './list.css';

const List = () => {
    const { list, setList, yesAnswer, setYesAnser } = useContext(DataContext);
    const handleDeleteItem = (ID, NAME) => {
        const newList = list.filter((item, i) => {
            return item.id !== ID;
        })



        setList(newList);

        let test2 = yesAnswer.map((ans) => {
            let nameOfprop = Object.keys(ans);
            let obj = { [nameOfprop]: ans[nameOfprop] }
            let u = obj[nameOfprop].find(item => {
                return item.id === ID
            })
            if (u) {
                return {
                    [nameOfprop]: u
                }
            }

        })
        let test3 = test2.filter((element => {
            return element !== undefined
        }))

        yesAnswer.map((ans) => {
            let nameOfprop = Object.keys(ans);
            let obj = { [nameOfprop]: ans[nameOfprop] }
            if (Object.keys(obj).join('') === Object.keys(test3[0]).join('')) {
                let rr = Object.values(obj)[0].find((el => el.id === test3[0][Object.keys(test3[0]).join('')].id))
                if (rr) {
                    rr.type = false
                }
            }
        })

    }
    return (
        <div>
            <Header />
            <div className='wrapper-list'>
                {list.length !== 0 && list && (
                    list.map((item) => {
                        return (
                            <div className='list-item'>
                                <div className='wrapper-pic-list'>
                                    <img onClick={() => handleDeleteItem(item.id, item.namePlant)} className='delete-list' src='../assets/images/delete.svg' />
                                    <img className='list-pic' src={item.picListMobile} />
                                </div>
                                <div>
                                    <div className='name-plant-list'>{item.namePlant}</div>
                                    <div className='wrapper-exegol-list'>{item.icons.map((icon) => {
                                        return (
                                            <div className='exegol-container'>
                                                <img className='list-exegol' src="../assets/images/exegol.svg" />
                                                <div className='list-chart'>{icon.chart}</div>
                                            </div>
                                        )
                                    })}</div>
                                    <div className='cm'>{item.cm}</div>
                                    <div className='balcode'>{item.balcode}</div>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    );
};



export default List;