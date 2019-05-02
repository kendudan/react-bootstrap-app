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
                            <h1 id="userNameH1">{userName}</h1>
                            <div className={styles['following-button']}>
                                <button>Подписаться</button>
                            </div>
                        </div>

                        <ul className={styles.stats}>
                            <li><strong>{numOfPosts} </strong> публикаций </li>
                            <li className={styles.statFollow}> <a><strong>{numOfFollowers} </strong> Подписчиков </a> </li>
                            <li className={styles.statFollow}> <a><strong>{numOfFollowing} </strong> Подписки </a></li>
                        </ul>

                        <div className={styles.fullName}>
                            <h3>{fullName}</h3><br/>
                            <span className={styles.userDescription}>{userDescription}</span>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default Main;
