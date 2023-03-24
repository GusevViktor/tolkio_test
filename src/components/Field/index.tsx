import { RegisterOptions } from "react-hook-form";
import style from "./style.module.scss";
interface Field {
  id: string;
  type: "inputText" | "inputEmail" | "inputPassword";
  label: string;
  defaultValue?: string;
  errorText?: string;
  required?: boolean;
  register: (name: string, options?: RegisterOptions) => {};
}

const types = {
  inputText: "text",
  inputEmail: "email",
  inputPassword: "password",
}

const Input = (props: Field) => {
  const {
    id,
    defaultValue,
    required,
    type,
    register
  } = props
  const registerOptions = {
    required: required ? 'This field is required' : false
  }

  if(type === "inputPassword") {
    const pattern = {
      value: /\S+@\S+\.\S+/,
      message: "Invalid email address"
    }
    Object.assign(registerOptions, pattern)
  }
  return (
    <input
      className={style.input}
      type={types[type]}
      id={id}
      defaultValue={defaultValue}
      {...register(id, registerOptions)}
    />
  )
}

const Field = (props: Field) => {
  const {
    id,
    label,
    type,
  } = props
  const isValidType = Object.keys(types).some((key) => key === type)
  return (
    isValidType ? (
      <div className={style.wrap}>
      <label
        htmlFor={id}
        className={style.label}
      >
        {label}
      </label>
      <Input {...props}/>
    </div>
    ) : (<></>)
  )
}


export default Field