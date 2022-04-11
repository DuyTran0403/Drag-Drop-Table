import React, { useState, useCallback } from 'react';
import { TableCellProps, initTableCell } from './types';
import { TableCustom, TdCustom, DivTable } from './styles';

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
        const rowDrag = dragValue.rowNum - 1;
        const colDrag = dragValue.colNum - 1;
        const valueDrag = dragValue.value;
        const rowDrop = item.rowNum - 1;
        const colDrop = item.colNum - 1;
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
        <DivTable>
            <TableCustom>
                <tbody>
                    {dataTable.map((col, index) => (
                        <tr key={index}>
                            {col.map((row, indexb) => (
                                <TdCustom key={indexb} id={row.id} draggable onDragStart={() => onDragTableCell(row)}
                                    onDragOver={e => { onDragOver(e) }} onDrop={(e) => onDropTableCell(row)}>
                                    {row.value}
                                </TdCustom>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </TableCustom>
        </DivTable>
    );
}

export default React.memo(ResultComponent);