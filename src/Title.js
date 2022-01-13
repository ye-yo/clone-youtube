import { useState } from 'react';
import styles from "./title.module.css";

function Title() {
    const [voteNumber, setVoteNumber] = useState(0);
    const [rating, setValue] = useState(0);
    function updateRating(value) {
        setVoteNumber(voteNumber + 1);
        setValue(rating + value);
    }
    return (
        <main>
            <div className={styles['title-box']}>
                <h1 className={styles.red}>Netflix</h1>
                <p className={styles.content}>넷플릭스(Netflix)는 대표적인 OTT(over-the-top media service) 스트리밍 플랫폼으로 인터넷을 통해 다양한 미디어 콘텐츠를 제공하는 서비스를 말한다.
            <br></br>1997년 Reed Hastings와 Marc Randolph에 의해 설립되었으며 넷플릭스 본사는 미국 캘리포니아에 위치해 있다.
            </p>
            </div >
            <div>
                <span>⭐️ 평점 {voteNumber == 0 ? 0 : (rating / voteNumber).toFixed(1)} / {voteNumber}</span>
                <div className={styles['btn-wrap']}>
                    <button onClick={() => updateRating(5)}>❤️ 좋아요</button>
                    <button onClick={() => updateRating(1)}>👎 싫어요</button>
                </div>
            </div>
        </main>

    );
}

export default Title;