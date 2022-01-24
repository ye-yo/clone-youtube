import styles from './Layout.module.css';
import Header from './Header';
import Menu from './Menu';
import { useState } from 'react';

function Layout({ children, activeMenu }) {
    const [hideMenu, setHideMenu] = useState(false);

    return (
        <div className={styles.container}>
            <Header hideMenu={hideMenu} setHideMenu={setHideMenu} />
            <div className={styles.layout} >
                {hideMenu || <Menu activeMenu={activeMenu} />}
                <div className={`${styles.contents}${hideMenu ? ` ${styles.hide}` : ''}`}>{children}</div>
            </div >
        </div >
    );
}

export default Layout;