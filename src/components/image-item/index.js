import React from 'react';
import { Link } from 'react-router';
import LazyLoad from 'react-lazyload';
import styles from './style';

export default ({ link, title, cover, id }) => (
    <div className={ styles.item }>
        <Link to={link}>
            <LazyLoad height={180} width={180} offset={100}>
                <img src={`//i.imgur.com/${cover || id}b.jpg`}
                  alt={title}
                />
            </LazyLoad>
        </Link>

        <div className={styles.overlay}>{title}</div>
    </div>
);
