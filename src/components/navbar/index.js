import React from 'react';
import { IndexLink } from 'react-router';
import styles from './style.scss';

export default () => (
    <div className={styles.navbar}>
        <div className="wrapper">
            <ul>
                <li>
                    <IndexLink
                      to="/"
                      className={styles.a}
                      activeClassName={styles.active}
                    >
                        Gi<span className={styles.giggle}>gg</span>le
                    </IndexLink>
                </li>
            </ul>
        </div>
    </div>
);
