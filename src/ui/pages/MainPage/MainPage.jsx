import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import UserInfo from '../../components/UserInfo/UserInfo';
import styles from '../../../css/main.css';
import Foto from '../../components/Tabs/Foto';

class MainPage extends Component {
    render () {
        return <div className={styles.mainPage}>
            <Header />
            <UserInfo />
            <Foto />
        </div>;
    }
}

export default MainPage;
