import React from 'react';
import styles from './Display.module.css';

interface DisplayProps {
    value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
    return (
        <div className={styles.display}>
            <p className={styles.value}>{value}</p>
        </div>
    );
};

export default Display;