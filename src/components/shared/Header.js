import styles from './Header.module.css';
import youtube_logo from '../../data/youtube_logo.png';
import { FiMenu } from 'react-icons/fi';
import { IoSearchOutline } from 'react-icons/io5';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import React, { useState } from 'react';


function Header({ hideMenu, setHideMenu }) {

    const [searchKeyword, setKeyword] = useState('');
    return (
        <div className={styles.header}>
            <div className={styles.tab}>
                <FiMenu className={styles.icon} onClick={() => setHideMenu(hideMenu => !hideMenu)} />
                <img src={youtube_logo} alt="로고" className={styles.logo} />
            </div>
            <div className={styles['center-tab']}>
                <input className={styles.input} defaultValue='' onKeyDown={(e) => setKeyword(e.target.value)} />
                <IoSearchOutline onClick={() => { console.log(searchKeyword); }} className={styles['search-icon']} />
            </div>
            <div className={styles.tab}>
                <BsGrid3X3Gap className={styles.icon} />
                <HiOutlineDotsVertical className={styles.icon} />
            </div>
        </div>
    );
}

export default Header;