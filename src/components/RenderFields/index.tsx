import { RegisterOptions, FieldErrors } from "react-hook-form";
import Field from "../Field";
import { ErrorMessage } from '@hookform/error-message';
import style from "./style.module.scss";

export interface FieldI {
  id: string;
  type: "inputText" | "inputEmail" | "inputPassword";
  label: string;
  defaultValue?: string;
  required?: boolean;
}

interface FormFieldsProps {
  fields: FieldI[];
  errors: FieldErrors;
  register: (name: string, options?: RegisterOptions) => {};
}

const RenderFields = ({ fields, register, errors }: FormFieldsProps) => {
  return (
    <>
      {fields.map((field) => (
        <div className={style.wrap_field} key={field.id}>
          <Field
            {...field}
            register={register}
          />
          <ErrorMessage
            errors={errors}
            name={field.id}
            render={({ message }) => (
              <p className={style.error}>
                {message}
              </p>
              )
            }
          />
        </div>
      ))}
    </>
  );
}

export default RenderFields;