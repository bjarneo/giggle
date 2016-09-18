import React from 'react';
import styles from './style';

export default ({ action, page }) => (
    <div className={ styles.loadmore } onClick={() => action(page)}>
        Load more
    </div>
);
