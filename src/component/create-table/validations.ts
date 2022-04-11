
import * as Yup from 'yup';

export const validationSchema = () => {
    return Yup.object().shape({
        nValue: Yup.string()
            .required("N is required")
            .matches(/^[0-9]*$/, "N's value must be numeric")
    });
};
