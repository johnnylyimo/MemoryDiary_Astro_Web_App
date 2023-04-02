import type { APIRoute } from "astro";
import { prisma } from "../../../utils/prisma";

export const del: APIRoute = async ({ request }) => {
    const { id } = await request.json();
    try {
        await prisma.memory.delete({
            where:{id},
        });

        return new Response(JSON.stringify({DeletedSuccessfully:'Memory has been Deleted successfuly'}),{
            status: 200,
        })

    } catch (error) {
        
    }
}