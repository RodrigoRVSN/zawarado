import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}
declare const Button: ({ title, ...rest }: ButtonProps) => JSX.Element;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}
declare const Input: ({ ...rest }: InputProps) => JSX.Element;

declare const Todo: ({ text }: {
    text: String;
}) => JSX.Element;

export { Button, Input, Todo };
