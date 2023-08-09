import { notFound } from "next/navigation";

export default async function getData(id) {
    const apiUrl = process.env.API_URL;
    const res = await fetch(`${apiUrl}/posts/${id}`);

    if (!res.ok) {
        return notFound()
    }

    return res.json();
}