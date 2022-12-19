import type { APIRoute } from "astro";
import { Memory } from "@prisma/client";

export const post: APIRoute = async ({ request }) => {
  const { title, content } = await request.json();
  let newMemory: Memory;
  try {
    newMemory = await prisma.memory.create({
      data: {
        title,
      },
    });
  } catch (error) {}
};
