import React, { useCallback } from 'react';
import { useFormikContext } from 'formik';
import { WrapItem, DivWrapper, PError, Title } from './styles';
import { FormikProps } from './types';

const ConditionComponent: React.FC = () => {
    const formikBag = useFormikContext<FormikProps>();

    const handeSubmit = useCallback(() => {
        formikBag.submitForm();
    }, [formikBag]);

    return (
        <DivWrapper>
            <Title>DRAG - DROP TABLE</Title>
            <WrapItem>
                N: <input
                    type="text"
                    name="nValue"
                    value={formikBag.values.nValue}
                    onChange={formikBag.handleChange}
                />
                {formikBag.errors.nValue && (
                    <PError>{formikBag.errors.nValue}</PError>
                )}
            </WrapItem>
            <WrapItem>
                <button onClick={handeSubmit}>Submit</button>
            </WrapItem>
        </DivWrapper>
    );
}


export default React.memo(ConditionComponent);