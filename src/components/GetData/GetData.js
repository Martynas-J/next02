import { API_URL } from "@/utils/config";
import { notFound } from "next/navigation";

export default async function getData(id) {
    
    const res = await fetch(`${API_URL}/posts/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        return notFound()
    }

    return res.json();
}