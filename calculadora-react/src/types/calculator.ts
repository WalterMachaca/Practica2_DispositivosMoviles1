export type Operator = '+' | '-' | '*' | '/';

export interface Operation {
    id: number;
    expression: string;
    result: number;
    timestamp: Date;
}

export interface CalculatorState {
    display: string;
    previousValue: number | null;
    currentOperator: Operator | null;
    isNewNumber: boolean;
    history: Operation[];
}