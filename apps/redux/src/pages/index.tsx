import Head from "next/head";
import { useState } from "react";
import { Button, Input, Todo } from "ui";
import { createTodo } from "../store/features/todos/todosSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export default function Home() {
  const { todos } = useAppSelector(state => state.todos)
  const dispatch = useAppDispatch()

  const [todoTask, setTodoTask] = useState('')

  const handleAddTask = () => {
    if (!todoTask.trim()) return
    
    setTodoTask('')
    dispatch(createTodo(todoTask))
  }

  return ( 
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Redux</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <Input 
          placeholder="Digitar texto" 
          onChange={(event) => setTodoTask(event.target.value)} 
          value={todoTask} 
        />

        <Button title="Adicionar" onClick={handleAddTask} />
      </main>

      {todos.map(todo => (
        <Todo key={new Date().getDate()} text={todo} />
      ))}
    </div>
  );
}
