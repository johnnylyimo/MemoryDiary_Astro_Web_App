import type { APIRoute } from "astro";
import { Memory } from "@prisma/client";
import { prisma } from "../../../utils/prisma";


export const put: APIRoute = async ({ request }) => {
    const { id, content } = await request.json();
    let memoryToBeUpdated: Memory;

    try {
        memoryToBeUpdated = await prisma.memory.update({
            where:{id},
            data:{content}
        });
        return new Response(JSON.stringify(memoryToBeUpdated),{
            status: 200,
        })
    } catch (error) {
        
    }
}