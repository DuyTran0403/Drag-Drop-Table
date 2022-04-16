import React, { useCallback } from 'react';
import { useFormikContext } from 'formik';
import { WrapItem, DivWrapper, PError, Title } from './styles';
import { FormikProps } from './types';

const ConditionComponent: React.FC = () => {
    const formikBag = useFormikContext<FormikProps>();

    const handeSubmit = useCallback(() => {
        formikBag.submitForm();
    }, [formikBag]);


    const onEnterEvent = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            formikBag.submitForm()
        }
    }, [formikBag]);

    const onKeyDownEvent = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            formikBag.submitForm();
        }
    }, [formikBag]);

    return (
        <DivWrapper>
            <Title>DRAG - DROP TABLE</Title>
            <WrapItem>
                <input
                    name="nValue"
                    onKeyUp={onEnterEvent}
                    onKeyDown={onKeyDownEvent}
                    value={formikBag.values.nValue}
                    onChange={formikBag.handleChange}
                    type="number"
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