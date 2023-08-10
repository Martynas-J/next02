"use client"
import { useRouter } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react'
import styles from './login.module.css'
import { useEffect } from 'react'

const Login = () => {
  const session = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session.status === "authenticated") {
      router?.push("/dashboard");
    }
  }, [session.status, router]);

  if (session.status === "loading") {
    return <p>Loading...</p>
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", { email, password })
  };
  if (session.status === "unauthenticated") {
    return (
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Email"
            required
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            required
            className={styles.input}
          />
          <button className={styles.button}>Login</button>
        </form>
        <button onClick={() => signIn("google")}>Login whit Google</button>

      </div>
    )
  }
}

export default Login