import React, { useEffect, useState } from 'react';
import BackBtn from '../../buttons/backBtn/BackBtn';
import style from '../menuItems/style.module.css';
function MenuItems() {
    return (
        <div className={style.menuItems__wrapper}>
            <div className={style.links}>
                <a className={style.link_item+' '+style.link} href="#">arrow is shows before this item</a>
                <a className={style.link_item+' '+style.link} href="#">arrow is shows before this item</a>
                <a className={style.link_item+' '+style.link} href="#">arrow is shows before this item</a>
                <a className={style.link_item+' '+style.link} href="#">arrow is shows before this item</a>
            </div>
            <div className={style.gradientBlock}>
                <a href="#" className={style.gradientLink}> beautiful border under the link</a>
                <a href="#" className={style.gradientLink}> beautiful border under the link</a>
                <a href="#" className={style.gradientLink}> beautiful border under the link</a>
                <a href="#" className={style.gradientLink}> beautiful border under the link</a>
            </div>
            <BackBtn/>
        </div>
    );

}
export default MenuItems;
