import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    label: string;
    onClick: () => void;
    variant?: 'number' | 'operator' | 'equals' | 'special';
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    variant = 'number'
}) => {
    return (
        <button
            className={`${styles.button} ${styles[variant]}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;