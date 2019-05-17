import styles from './Foto.css';
import Tabs from './Tabs';
import React from 'react';
import { connect } from 'react-redux';
import Popup from "./Popup";

const DATA_URL = './Images.json';
class Foto extends React.Component {
    constructor() {
        super();
        this.state = {
            showPopup: false
        };
    }

    togglePopup (e) {
        e.preventDefault();
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    render () {
        const { fotoName, user, likes, comments } = this.props.foto;
        return (
            <div className={styles.parentTabs}>
                <Tabs className={styles.tabs}>
                    <div className={styles.foto} label="ПУБЛИКАЦИИ" >
                        <div className={styles.fotoRow}>
                            <a onClick={() => this.togglePopup()} className={styles.imgWrapper} href='#'>
                                <img className={styles.img} src='/client/images/posts/leo1.jpg' alt='leo' />
                            </a>
                            <a className={styles.imgWrapper} href='#'>
                                <img className={styles.img} src='/client/images/posts/leo2.jpg' alt='leo' />
                            </a>
                            <a className={styles.imgWrapper} href='#'>
                                <img className={styles.img} src='/client/images/posts/leo3.jpg' alt='leo' />
                            </a>
                        </div>
                        <div className={styles.fotoRow}>
                            <a className={styles.imgWrapper} href='#'>
                                <img className={styles.img} src='/client/images/posts/leo4.jpg' alt='leo' />
                            </a>
                        </div>
                    </div>
                    <div label="ОТМЕТКИ ">
                        <div className={styles.fotoRow}>
                            <a className={styles.imgWrapper} href='#'>
                                <img className={styles.img} src='/client/images/marks/leo1.jpg' alt='leo' />
                            </a>
                            <a className={styles.imgWrapper} href='#'>
                                <img className={styles.img} src='/client/images/marks/leo2.jpg' alt='leo' />
                            </a>
                            <a className={styles.imgWrapper} href='#'>
                                <img className={styles.img} src='/client/images/marks/leo3.jpg' alt='leo' />
                            </a>
                        </div>
                        <div className={styles.fotoRow}>
                            <a className={styles.imgWrapper} href='#'>
                                <img className={styles.img} src='/client/images/marks/leo4.jpg' alt='leo' />
                            </a>
                            <a className={styles.imgWrapper} href='#'>
                                <img className={styles.img} src='/client/images/marks/leo5.jpg' alt='leo' />
                            </a>
                        </div>
                    </div>
                </Tabs>
                {this.state.showPopup ?
                    <Popup
                        img={imgUrl}
                        closePopup={() => this.togglePopup()}
                    />
                    : null
                }
                <p>Меня зовут: {user}</p>
                <p>Мое фото {fotoName}. У него {likes} лайков и {comments} комментариев</p>
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        foto: store.foto
    };
};

export default connect(mapStateToProps)(Foto);
