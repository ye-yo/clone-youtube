import styles from "./title.module.css";
function Title() {
    console.log(styles)
    return (
        <div className={styles['title-box']}>
            <h1 className={styles.red}>Netflix</h1>
            <p className={styles.content}>넷플릭스(Netflix)는 대표적인 OTT(over-the-top media service) 스트리밍 플랫폼으로 인터넷을 통해 다양한 미디어 콘텐츠를 제공하는 서비스를 말한다.
            <br></br>1997년 Reed Hastings와 Marc Randolph에 의해 설립되었으며 넷플릭스 본사는 미국 캘리포니아에 위치해 있다.
            </p>
        </div >
    );
}

export default Title;