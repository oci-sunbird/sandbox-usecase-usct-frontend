import { useFormikContext } from "formik";
import { useEffect } from "react";

export const AutoSubmitPin = () => {
    const { values, submitForm } = useFormikContext<{
      challenge: string[];
    }>();
    useEffect(() => {
      if (values?.challenge?.length === 6) {
        submitForm();
      }
    }, [values, submitForm]);
    return null;
  };