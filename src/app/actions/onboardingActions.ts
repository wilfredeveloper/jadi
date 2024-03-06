"use server";

export async function createUser(
  prevState: { message: string },
  formData: FormData
) {

  const major = formData.get('major')?.toString();
  const email = formData.get('email')?.toString();
  const institution = formData.get('institution')?.toString();

  console.log("\nCreating user with the following data:");
  console.log({ major, email, institution });

  return { message: "User created" };
}

export async function createTodo(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  const todo = formData.get('todo')?.toString();

  console.log("Creating todo with the following data:");
  console.log({ todo });

  return { message: "Todo created" };
}