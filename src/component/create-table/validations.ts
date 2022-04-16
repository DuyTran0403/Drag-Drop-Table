
import * as Yup from 'yup';

export const validationSchema = () => {
    return Yup.object().shape({
        nValue: Yup.string()
            .required("Please input number")
    });
};
