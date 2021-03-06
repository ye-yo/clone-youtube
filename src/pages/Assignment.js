import Layout from '../components/shared/Layout';
import styles from '../components/shared/Layout.module.css';
import { useState } from 'react';
function Assignment() {
    const [open, setOpen] = useState(false)
    return (
        <Layout>
            <div>* Assignment ํ์ด์ง</div>
            <div>
                <button className={styles['btn-toggle']} style={{ transform: open ? 'none' : 'rotate(180deg)' }} onClick={() => { setOpen(!open) }}>๐ผ</button>
                <span>์กฐ๊ฑด๋ถ ๋ ๋๋ง</span>
                {open &&
                    <div className={styles['toggle-box']}>๋ฆฌ์กํธ์์๋ JSX๋ฅผ ์ฌ์ฉํ  ๋, ์ปดํฌ๋ํธ๋ฅผ ์กฐ๊ฑด์ ๋ฐ๋ผ ์ถ๋ ฅํ  ์ ์์ต๋๋ค.<br></br>
์ด๋ฅผ ์กฐ๊ฑด๋ถ ๋ ๋๋ง์ด๋ผ๊ณ  ๋ถ๋ฅด๋ฉฐ ์ด ํ์คํธ๋ ํ ๊ธ ๋ฒํผ์ ํด๋ฆญํจ์ ๋ฐ๋ผ ์ถ๋ ฅ๋๊ฑฐ๋ ์จ๊ธธ ์ ์์ต๋๋ค.</div>
                }
            </div>
        </Layout>
    );
}

export default Assignment;