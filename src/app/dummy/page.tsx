import { AddForm } from "./add-form"

export default async function Home() {

  return (
    <main>
      <h1 className="sr-only">Todos</h1>
      <AddForm />
      <ul>
        <li>Todo 1</li>
        <li>Todo 2</li>
      </ul>
    </main>
  );
}