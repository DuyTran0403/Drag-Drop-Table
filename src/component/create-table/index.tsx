import React, { useState, useCallback } from 'react';
import { FormikContext, useFormik } from 'formik';
import { FormikProps, initFormikValues, TableCellProps } from './types';
import { validationSchema } from './validations';
import ConditionComponent from './condition';
import ResultComponent from './result';

const CreateTableComponent: React.FC = () => {
    const [dataTable, setDataTable] = useState<TableCellProps[][]>();

    const onSubmit = useCallback((values: FormikProps) => {
        const data = [];
        let diff = 0;
        const n = Number(values.nValue);
        for (let row = 1; row <= n; row++) {
            const rowData: TableCellProps[] = [];

            for (let col = 1; col <= n; col++) {
                if (col % 2 === 0) {
                    rowData.push({
                        rowNum: row,
                        colNum: col,
                        id: (col * n - diff).toString(),
                        value: (col * n - diff).toString(),
                    })
                } else {
                    rowData.push(
                        {
                            rowNum: row,
                            colNum: col,
                            id: ((col - 1) * n + 1 + diff).toString(),
                            value: ((col - 1) * n + 1 + diff).toString(),
                        }
                    );
                }
            }
            diff++;
            data.push(rowData);
        }
        setDataTable(data);
    }, [setDataTable]);

    const formikBag = useFormik({
        initialValues: initFormikValues,
        validationSchema: validationSchema(),
        onSubmit,
    });

    return (
        <>
            <FormikContext.Provider value={formikBag}>
                <ConditionComponent />
            </FormikContext.Provider>
            {dataTable && dataTable.length > 0 && (
                <ResultComponent dataTable={dataTable} setDataTable={setDataTable} />
            )}
        </>
    );
}

export default React.memo(CreateTableComponent);