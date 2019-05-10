import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import UserInfo from '../../components/UserInfo/UserInfo';
import styles from '../../../css/main.css';
import Foto from '../../components/Tabs/Foto';

class MainPage extends Component {
    render () {
        return <div className={styles.mainPage}>
            <div className={styles.header}><Header /></div>
            <div className={styles.main}><UserInfo /></div>
            <div><Foto /></div>
        </div>;
    }
}

export default MainPage;
