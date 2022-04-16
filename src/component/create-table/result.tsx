import React, { useState, useCallback } from 'react';
import { TableCellProps, initTableCell } from './types';
import { DivResult, DivRow, DivCell } from './styles';

type Props = {
    dataTable: TableCellProps[][];
    setDataTable: Function;
}

const ResultComponent: React.FC<Props> = ({
    dataTable,
    setDataTable,
}) => {
    const [dragValue, setDragValue] = useState<TableCellProps>(initTableCell);

    const onDragTableCell = useCallback((item: TableCellProps) => {
        setDragValue(item);
    }, [setDragValue]);

    const onDragOver = useCallback((e: any) => {
        e.preventDefault();
    }, []);

    const onDropTableCell = useCallback((item: TableCellProps) => {
        const rowDrag = dragValue.rowNum;
        const colDrag = dragValue.colNum;
        const valueDrag = dragValue.value;
        const rowDrop = item.rowNum;
        const colDrop = item.colNum;
        const valueDrop = item.value;

        const data = dataTable;
        if (data && data[rowDrag] && data[rowDrag][colDrag] && data[rowDrop] && data[rowDrop][colDrop]) {
            data[rowDrag][colDrag].value = valueDrop;
            data[rowDrop][colDrop].value = valueDrag;
        }
        setDataTable(data);
        setDragValue(initTableCell);
    }, [dataTable, dragValue, setDataTable, setDragValue]);

    return (
        <>
            <br />
            <br />
            <DivResult>
                {
                    dataTable.map((row, i: number) => {
                        return <DivRow key={`row_${i}`}>
                            {row.map((cell, j: number) => {
                                return (
                                    <DivCell
                                        key={`cell_${i}${j}`}
                                        id={`${i}_${j}`}
                                        draggable
                                        onDragStart={() => onDragTableCell(cell)}
                                        onDragOver={e => { onDragOver(e) }}
                                        onDrop={(e) => onDropTableCell(cell)}
                                    >
                                        {cell.value}
                                    </DivCell>
                                );
                            })}
                        </DivRow>
                    })}
            </DivResult>
        </>
    );
}

export default React.memo(ResultComponent);