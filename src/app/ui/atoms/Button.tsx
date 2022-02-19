import {ReactNode} from "react";

type ButtonTypes =  "button"|"submit"|"reset"|undefined;

interface Props {
    children: ReactNode,
    version: string,
    isDisabled: boolean,
    type: ButtonTypes
}

const Button = ({children, version, isDisabled, type}: Props) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    version: "primary",
    type: "button",
    isDisabled: false
}

export default Button