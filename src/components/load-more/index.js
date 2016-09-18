import React from 'react';
import styles from './style';

export default ({ requestMostViral, page }) => (
    <div className={ styles.loadmore } onClick={() => requestMostViral(page)}>
        Load more
    </div>
);
