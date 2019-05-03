import React from 'react';
import styles from './Main.css';

class Main extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            user: 'Leo',
            userID: 1,
            userName: 'leonardodicaprio',
            numOfPosts: 3435,
            numOfFollowers: 234,
            numOfFollowing: 45,
            userImageURL: '/client/images/leo.jpg',
            fullName: 'Leonardo DiCaprio',
            userDescription: 'Actor and Environmentalist'
        };
    }

    render () {
        const { userName, numOfFollowers, numOfPosts, numOfFollowing, userImageURL, fullName, userDescription } = this.state;
        return (
            <div>
                <div className={styles.mainInfo}>

                    <div className={styles.userImage}>
                        <img className={styles.userImg} src={userImageURL} alt={`Аватар ${userName}`} />
                    </div>

                    <div className={styles.allUserInfo}>

                        <div className={styles.userName}>
                            <h1 className={styles.userNameH1}>{userName}</h1>
                            <div>
                                <button className={styles['following-button']}>Подписаться</button>
                            </div>
                        </div>

                        <ul className={styles.stats}>
                            <li><span className={styles.fontBold}>{numOfPosts} </span> публикаций </li>
                            <li className={styles.statFollow}> <a><span className={styles.fontBold}>{numOfFollowers} </span> подписчиков </a> </li>
                            <li className={styles.statFollow}> <a><span className={styles.fontBold}>{numOfFollowing} </span> Подписки </a></li>
                        </ul>

                        <div className={styles.fullName}>
                            <h3 className={styles.fontBold}>{fullName}</h3>
                            <span>{userDescription}</span>
                            <a className={styles.link} href="http://globaldealfornature.org">globaldealfornature.org</a>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default Main;
