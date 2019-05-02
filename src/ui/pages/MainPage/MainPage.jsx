import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import styles from '../../../css/main.css';

class MainPage extends Component {
    render () {
        return <div className={styles.mainPage}>
            <div className={styles.header}><Header /></div>
            <div className={styles.main}><Main /></div>
        </div>;
    }
}

export default MainPage;
