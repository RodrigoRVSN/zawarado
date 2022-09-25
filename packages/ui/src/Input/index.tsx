import { DetailedHTMLProps, InputHTMLAttributes } from "react"

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

export const Input = ({ value, ...rest }: InputProps) => {
  return (
    <input className="bg-gray-300 p-2 rounded-lg" {...rest} />
  )
}