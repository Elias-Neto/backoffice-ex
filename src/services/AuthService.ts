import { User, getUserByEmail } from "./UserService"

export async function login(email: string, password: string): Promise<User> {
  const user = await getUserByEmail(email)

  if (user && user.password === password) {
    return user
  } else {
    throw new Error("Email e/ou senha inválido(s)")
  }
}
