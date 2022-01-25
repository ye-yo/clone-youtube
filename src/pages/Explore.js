import styles from './Explore.module.css';
import Layout from '../components/shared/Layout';
import ContentsLayout from '../components/shared/ContentsLayout';
import youtubeData from '../data/youtubeData.json';
import ExploreCard from '../components/explore/ExploreCard';
import { useState } from 'react';


function Explore() {
    const filterList = ['전체', 'POP', 'MV', 'ENG', '라디오스타', '유퀴즈'];
    const [filterWordIndex, setFilterWord] = useState(0);
    function isMatched(data) {
        let filterWord = filterList[filterWordIndex];
        if (filterWord === '전체')
            filterWord = '';
        return data.title.includes(filterWord) || data.description.includes(filterWord);
    }
    return (
        <Layout activeMenu="explore">
            <div className={styles.filterList}>
                {filterList.map((filter, index) => (
                    <button className={filterWordIndex === index ? styles.selected : ''}
                        onClick={() => setFilterWord(index)} key={index}>{filter}</button>
                ))}
            </div>
            <ContentsLayout>
                {youtubeData['data'].map(function (data, index) {
                    if (isMatched(data))
                        return <ExploreCard key={`explore-card-${index}`} data={data} />;
                })}
            </ContentsLayout>
        </Layout >
    );
}

export default Explore;