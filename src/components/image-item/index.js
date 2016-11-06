import classnames from 'classnames';
import React from 'react';
import LazyLoad from 'react-lazyload';
import styles from './style';

export default ({ link, title, cover, id, ups, downs, comment_count }) => (
    <div className={ styles.item }>
        <a href={link}>
            <LazyLoad height={180} width={180} offset={100}>
                <img src={`//i.imgur.com/${cover || id}b.jpg`}
                  alt={title}
                />
            </LazyLoad>
        </a>

        <div className={styles.overlay}>{title}</div>

        <div className={styles['icons-wrapper']}>
            <div>
                <i className={classnames("material-icons", styles.up)}>thumb_up</i>
                <span>{ups}</span>
            </div>
            <div>
                <i className={classnames("material-icons", styles.down)}>thumb_down</i>
                <span>{downs}</span>
            </div>
            <div>
                <i className={classnames("material-icons ", styles.comments)}>comment</i>
                <span>{comment_count}</span>
            </div>
        </div>
    </div>
);
