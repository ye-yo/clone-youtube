import styles from './Layout.module.css';
import Header from './Header';
import Menu from './Menu';
import { useState } from 'react';



function Layout({ children }) {
    const [nightMode, setMode] = useState(false)
    return (
        <div className={`${styles.container} ${nightMode ? styles.night : styles.day}`}>
            <Header />
            <div className={styles.layout}>
                <Menu />
                <div className={styles.contents}>
                    <button className={styles['btn-mode']} onClick={() => setMode(nightMode => !nightMode)}>{nightMode ? '☀️ Day' : '🌙 Night'} Mode</button>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;