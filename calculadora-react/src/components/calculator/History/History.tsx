import React from 'react';
import type { Operation } from '../../../types/calculator';

interface HistoryProps {
    operations: Operation[];
}

const History: React.FC<HistoryProps> = ({ operations }) => {
    return (
        <div style={{ marginTop: '20px' }}>
            <h3>📜 Historial</h3>

            {operations.map((op) => (
                <div key={op.id}>
                    {op.expression} = {op.result}
                </div>
            ))}
        </div>
    );
};

export default History;