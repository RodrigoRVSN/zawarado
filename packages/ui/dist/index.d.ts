import { HTMLAttributes, DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLInputElement> {
    title: string;
}
declare const Button: ({ title, ...rest }: ButtonProps) => JSX.Element;

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
}
declare const Input: ({ value, ...rest }: InputProps) => JSX.Element;

declare const Todo: ({ text }: {
    text: String;
}) => JSX.Element;

export { Button, Input, Todo };
