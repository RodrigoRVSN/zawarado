import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ ...rest }: InputProps) => {
  return (
    <input className="bg-gray-300 p-2 rounded-lg" {...rest} />
  )
}