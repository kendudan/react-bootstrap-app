import React from 'react';
import styles from './UserInfo.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import setSubscribes from '../../../actions/setSubscribes';

class UserInfo extends React.Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        setSubscribes: PropTypes.func.isRequired
    };

    onClick = () => {
        window.open('http://globaldealfornature.org');
    };

    addFollower = () => {
        const { user } = this.props;
        if (this.props.user.isFollowed === false) {
            this.props.setSubscribes({
                ...user,
                numOfFollowers: user.numOfFollowers + 1,
                isFollowed: !user.isFollowed
            });
        } else if (this.props.user.isFollowed === true) {
            this.props.setSubscribes({
                ...user,
                numOfFollowers: user.numOfFollowers - 1,
                isFollowed: !user.isFollowed
            });
        }
    };
    render () {
        const { user } = this.props;
        return (
            <div className={styles.parent}>
                <div className={styles.mainInfo}>

                    <div className={styles.userImage}>
                        <img className={styles.userImg} src={user.userImageURL} alt={`Аватар ${user.name}`} />
                    </div>

                    <section className={styles.allUserInfo}>

                        <div className={styles.userName}>
                            <h1 className={styles.userNameH1}>{user.name}</h1>
                            <div>
                                <button
                                    onClick={this.addFollower}
                                    className={user.isFollowed ? styles.followingButtonClicked : styles.followingButton}>
                                    {user.isFollowed ? <p>Подписки</p> : <p>Подписаться</p>}
                                </button>
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

                    </section>

                </div>

            </div>
        );
    }
}

const mapStateToProps = ({ userInfo }) => {
    return {
        user: userInfo.user
    };
};

const mapDispatchToProps = (dispatch) => ({
    setSubscribes: (payload) => {
        dispatch(setSubscribes(payload));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
