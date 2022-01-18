import Layout from './components/shared/Layout';
import styles from './components/shared/Layout.module.css';
import { useState } from 'react';


function App() {
  const [open, setOpen] = useState(false)
  return (
    <Layout>
      <div>
        <button className={styles['btn-toggle']} style={{ transform: open ? 'none' : 'rotate(180deg)' }} onClick={() => { setOpen(!open) }}>🔼</button>
        <span>조건부 렌더링</span>
        {open &&
          <div className={styles['toggle-box']}>리액트에서는 JSX를 사용할 때, 컴포넌트를 조건에 따라 출력할 수 있습니다.<br></br>
이를 조건부 렌더링이라고 부르며 이 텍스트는 토글 버튼을 클릭함에 따라 출력되거나 숨길 수 있습니다.</div>
        }
      </div>
    </Layout>
  );
}

export default App;