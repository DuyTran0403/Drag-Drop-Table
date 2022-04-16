export type FormikProps = {
    nValue: string;
}

export type TableCellProps = {
    rowNum: number;
    colNum: number;
    value: number;
}

export const initFormikValues: FormikProps = {
    nValue: '',
}

export const initTableCell: TableCellProps = {
    rowNum: 0,
    colNum: 0,
    value: 0,
}