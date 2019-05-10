import styles from './Foto.css';
import Tabs from './Tabs';
import React from 'react';

export default class Foto extends React.Component {
    render () {
        return (
            <div className={styles.tabs}>
                <Tabs>
                    <div label="ПУБЛИКАЦИИ" >
                        <div>Фотки</div>
                    </div>
                    <div label="ОТМЕТКИ ">
                        <div>Отметки</div>
                    </div>
                </Tabs>
            </div>
        );
    }
}
