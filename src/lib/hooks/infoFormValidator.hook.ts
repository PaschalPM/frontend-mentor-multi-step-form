import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { infoFormBaseObj } from "../constants";

const useInfoFormValidator = (
    formObj: Record<string, string>,
    errors: Record<string, string>,
    setErrors: Dispatch<SetStateAction<Record<string, string>>>
  ) => {
    const [isValidatingForm, setValidatingForm] = useState<boolean>(false);
    const [isValid, setIsValid] = useState<boolean>(false);
  
    useEffect(() => {
      if (isValidatingForm) {
        // Required Validation
        for (let key in formObj) {
          if (formObj[key].length === 0) {
            setErrors((errors) => ({
              ...errors,
              [key]: "This field is required",
            }));
          } else {
            setErrors((errors) => ({ ...errors, [key]: "" }));
          }
        }
  
        // Email Validation
        const emailRegexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  
        if (formObj["email"] && !emailRegexPattern.test(formObj["email"])) {
          setErrors((errors) => ({ ...errors, email: "Invalid email address" }));
        }
  
        // Phone Validation
        const phoneRegexPattern = /^(\+\d)?\s?([0-9]{3}\s?[0-9]{3}\s?[0-9]{4})$/;
  
        if (formObj["phone"] && !phoneRegexPattern.test(formObj["phone"])) {
          setErrors((errors) => ({
            ...errors,
            phone: "Invalid phone number address",
          }));
        }
      }
    }, [JSON.stringify(formObj), isValidatingForm]);
  
    const validateForm = () => {
      setValidatingForm(true);
    };
  
    useEffect(() => {
      const formObjStr = JSON.stringify(formObj)
      const infoFormBaseObjStr = JSON.stringify(infoFormBaseObj)
      const errorsStr = JSON.stringify(errors)
  
      if (formObjStr === infoFormBaseObjStr){
        setIsValid(false)
      }
      else if (infoFormBaseObjStr === errorsStr) {
        setIsValid(true)
      }
    }, [JSON.stringify(errors), JSON.stringify(formObj)]);
  
    return { validateForm, isValid };
  };
  
  export default useInfoFormValidator