import React from 'react';
import styles from './style.scss';
import gh from './gh.png';

export default () => (
    <div className={styles.footer}>
        <div className="wrapper">
            <a href="http://github.com/bjarneo/" alt="Github.com bjarneo" className={styles.bjarneo}>
                @bjarneo
            </a>
            <a href="http://github.com/bjarneo/giggle" alt="Github.com bjarneo giggle">
                <img className={styles.gh} src={gh} />
            </a>
            <a href="http://github.com/rocjs/roc" alt="Github.com roc">
                <img className={styles.roc}
                  src={"//raw.githubusercontent.com/rocjs/roc/master/roc.png"}
                />
            </a>
        </div>
    </div>
);
