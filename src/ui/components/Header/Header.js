import React from 'react';
import styles from './Header.css';

class Header extends React.Component {
    render () {
        return (
            <nav className={styles.nav}>
                <div className={styles.navMenus}>
                    <div>
                        <a className={styles.navBrandLogo} href="/">
                            Instagram
                        </a>
                    </div>
                    <div>
                        <input type="search" className={styles.search} placeholder="Поиск" />
                    </div>
                    <div>
                        <button className={styles.logInBtn}>Войти</button>
                        <button className={styles.signUpBtn}>Зарегистрироваться</button>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Header;
