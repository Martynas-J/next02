import { NextResponse } from "next/server";
import connect from "@/utils/db";
import PostModel from "@/models/Post"; // Pakeista pavadinimas, kad nesukurtų painiavos su 'Post' modelio vardu

export const GET = async (request) => {
    try {
        await connect();
        const posts = await PostModel.find(); // Naudojame 'PostModel' vietoj 'Post'
        return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (err) {
        return new NextResponse("Database Error :(", { status: 500 });
    }
}
