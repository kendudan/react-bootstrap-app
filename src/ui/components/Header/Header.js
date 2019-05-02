import React from 'react';
import styles from './Header.css';

class Header extends React.Component {
    render () {
        return (
            <nav className={styles.nav}>
                <div className={styles['nav-menus']}>
                    <div>
                        <a className={styles['nav-brand-logo']} href="/">
                            Instagram
                        </a>
                    </div>
                    <div>
                        <input type="text" className={styles['search']} placeholder="Поиск" />
                    </div>
                    <div>
                        <button className={styles['logInBtn']}>Войти</button>
                        <button className={styles['signUpBtn']}>Зарегистрироваться</button>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Header;
