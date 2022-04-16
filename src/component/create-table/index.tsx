import React, { useState, useCallback } from 'react';
import { FormikContext, useFormik } from 'formik';
import { FormikProps, initFormikValues, TableCellProps } from './types';
import { validationSchema } from './validations';
import ConditionComponent from './condition';
import ResultComponent from './result';

const CreateTableComponent: React.FC = () => {
    const [dataTable, setDataTable] = useState<TableCellProps[][]>([]);

    const onSubmit = useCallback((values: FormikProps) => {
        const n = Number(values.nValue);
        const data = [...Array(n)].map((_, row: number) => {
            return [...Array(n)].map((_, col: number) => {
                if (col % 2 === 0) {
                    return {
                        rowNum: row,
                        colNum: col,
                        value: col * n + row + 1,
                    }
                } else {
                    return {
                        rowNum: row,
                        colNum: col,
                        value: (col + 1) * n - row,
                    }
                }
            }, []);
        }, []);
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