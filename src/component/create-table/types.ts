export type FormikProps = {
    nValue: string;
}

export type TableCellProps = {
    rowNum: number;
    colNum: number;
    id: string;
    value: string;
}

export const initFormikValues: FormikProps = {
    nValue: '',
}

export const initTableCell: TableCellProps = {
    rowNum: 0,
    colNum: 0,
    id: '',
    value: '',
}