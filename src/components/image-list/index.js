import React from 'react';
import ImageItem from '../image-item';
import styles from './style';

export default ({ items }) => (
    <div className={ styles.list }>
        {items.map(item => <ImageItem key={item.id} {...item} />)}
    </div>
);
