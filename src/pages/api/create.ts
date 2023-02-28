import type { APIRoute } from "astro";
import { Memory } from "@prisma/client";

export const post: APIRoute = async ({ request }) => {
  const { title, content } = await request.json();
  let newMemory: Memory;
  try {
    newMemory = await prisma.memory.create({
      data: {
        title,
        content,
      },
    });

    return new Response(JSON.stringify(newMemory), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify("Unsuccesfully, new memory failed to be created"),
      {
        status: 400,
      }
    );
  }
};
