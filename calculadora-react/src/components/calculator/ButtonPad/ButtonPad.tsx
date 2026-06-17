import React from 'react';
import Button from '../Button/Button';
import type { Operator } from '../../../types/calculator';
import styles from './ButtonPad.module.css';

interface ButtonPadProps {
    onNumber: (num: string) => void;
    onOperator: (op: Operator) => void;
    onEquals: () => void;
    onClear: () => void;
    onBackspace: () => void;
    onPercentage: () => void;
}

const ButtonPad: React.FC<ButtonPadProps> = ({
    onNumber,
    onOperator,
    onEquals,
    onClear,
    onBackspace,
    onPercentage,
}) => {
    return (
        <div className={styles.buttonPad}>
            <Button label="C" onClick={onClear} variant="special" />
            <Button label="←" onClick={onBackspace} variant="special" />
            <Button label="%" onClick={onPercentage} variant="special" />
            <Button label="÷" onClick={() => onOperator('/')} variant="operator" />

            <Button label="7" onClick={() => onNumber('7')} />
            <Button label="8" onClick={() => onNumber('8')} />
            <Button label="9" onClick={() => onNumber('9')} />
            <Button label="×" onClick={() => onOperator('*')} variant="operator" />

            <Button label="4" onClick={() => onNumber('4')} />
            <Button label="5" onClick={() => onNumber('5')} />
            <Button label="6" onClick={() => onNumber('6')} />
            <Button label="-" onClick={() => onOperator('-')} variant="operator" />

            <Button label="1" onClick={() => onNumber('1')} />
            <Button label="2" onClick={() => onNumber('2')} />
            <Button label="3" onClick={() => onNumber('3')} />
            <Button label="+" onClick={() => onOperator('+')} variant="operator" />

            <Button label="0" onClick={() => onNumber('0')} />
            <Button label="." onClick={() => onNumber('.')} />
            <Button label="=" onClick={onEquals} variant="equals" />
        </div>
    );
};

export default ButtonPad;