import React from 'react';
import styles from './UserInfo.css';

class UserInfo extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            user: {
                name: 'leonardodicaprio',
                numOfPosts: 3435,
                numOfFollowers: 234,
                numOfFollowing: 45,
                userImageURL: '/client/images/leo.jpg',
                fullName: 'Leonardo DiCaprio',
                userDescription: 'Actor and Environmentalist'
            }
        };
    }

    onClick = () => {
        window.open('http://globaldealfornature.org');
    };
    render () {
        const { user } = this.state;
        return (
            <div className={styles.parent}>
                <div className={styles.mainInfo}>

                    <div className={styles.userImage}>
                        <img className={styles.userImg} src={user.userImageURL} alt={`Аватар ${user.name}`} />
                    </div>

                    <div className={styles.allUserInfo}>

                        <div className={styles.userName}>
                            <h1 className={styles.userNameH1}>{user.name}</h1>
                            <div>
                                <button className={styles.followingButton}>Подписаться</button>
                            </div>
                        </div>

                        <ul className={styles.stats}>
                            <li><span className={styles.fontBold}>{user.numOfPosts} </span> публикаций </li>
                            <li className={styles.statFollow}> <a><span className={styles.fontBold}>{user.numOfFollowers} </span> подписчиков </a> </li>
                            <li className={styles.statFollow}> <a><span className={styles.fontBold}>{user.numOfFollowing} </span> Подписки </a></li>
                        </ul>

                        <div className={styles.fullName}>
                            <h3 className={styles.fontBold}>{user.fullName}</h3>
                            <span>{user.userDescription}</span>
                            <a onClick={this.onClick} className={styles.link} href='/'>globaldealfornature.org</a>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default UserInfo;