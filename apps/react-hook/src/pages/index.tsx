import Head from "next/head";
import { FormEvent, useState } from "react";
import { Button, Input, Todo } from "ui";

export default function Home() {
  const [todos, setTodos] = useState([])
  const [todoTask, setTodoTask] = useState('')

  const handleAddTask = (event: FormEvent<HTMLFormElement>) => {
    if (!todoTask.trim()) return

    event.preventDefault()

    setTodos(prevState => [...prevState, todoTask])
    setTodoTask('')
  }

  return ( 
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>React hook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8" onSubmit={handleAddTask}>
        <Input 
          placeholder="Digitar texto" 
          value={todoTask}
          onChange={(event) => setTodoTask(event.target.value)} 
        />

        <Button title="Adicionar" type='submit' />
      </form>

      {todos.map(todo => (
        <Todo key={Math.random()} text={todo} />
      ))}
    </div>
  );
}
