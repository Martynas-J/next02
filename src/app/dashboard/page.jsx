"use client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
// import useSWR from "swr"

const Dashboard = () => {

    const session = useSession()

    const router = useRouter()

    // const fetcher = (...args) => fetch(...args).then(res => res.json())
    // const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher)
    useEffect(() => {
        if (session.status === "unauthenticated") {
            router?.push("/dashboard/login");
        }
    }, [session.status, router]);

    if (session.status === "loading") {
        return <p>Loading...</p>
    }

    if (session.status === "authenticated") {
        return <div>Dashboard</div>
    }
}

export default Dashboard