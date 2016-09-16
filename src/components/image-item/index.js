import React from 'react';
import { Link } from 'react-router';
import styles from './style';

export default ({ link, title, cover, id }) => (
    <div className={ styles.item }>
        <Link to={link}>
            <img src={`//i.imgur.com/${cover || id}b.jpg`}
              alt={title}
            />
        </Link>

        <div className={styles.overlay}>{title}</div>
    </div>
);
