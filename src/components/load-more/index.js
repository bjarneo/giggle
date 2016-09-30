import React from 'react';
import styles from './style';

export default ({ action, page, isFetching }) => (
    <div
      className={ styles.loadmore }
      onClick={() => action(page)}
      style={isFetching ? { display: 'none' } : { display: 'block' }}
    >
        Load more
    </div>
);
