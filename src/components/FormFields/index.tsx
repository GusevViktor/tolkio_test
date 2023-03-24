import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import RenderFields, { FieldI } from "../RenderFields";
import style from "./style.module.scss";
import clown from "./clown.png";

interface FormFieldsProps {
  fields: FieldI[];
  onSubmit: (data: Record<string, string>) => void;
}

const FormFields = ({ fields, onSubmit }: FormFieldsProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    mode: "onChange"
  });

  const onSubmitHandler = (data: Record<string, string>) => {
    onSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className={style.wrap}>
      <img src={clown} alt="clown" className={style.clown} />
      <RenderFields
        fields={fields}
        register={register}
        errors={errors}
      />
      <button className={style.button_submit} type="submit">Submit</button>
    </form>
  );
}

export default FormFields;