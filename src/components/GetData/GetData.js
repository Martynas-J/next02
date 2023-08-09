import { notFound } from "next/navigation";

export default async function getData(id) {
    const apiUrl = process.env.API_URL;
    const res = await fetch(`http://127.0.0.1:3000/api/posts/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        return notFound()
    }

    return res.json();
}