import { Memory } from "@prisma/client";
import { prisma } from "../../../utils/prisma";
export async function get({ params, request }) {
  let memories: Memory[] = [];
  try {
    memories = await prisma.memory.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  } catch (error) {
    return new Response(JSON.stringify("Internal Server Error"), {
      status: 500,
    });
  }

  // if there no memories
  if (!memories) {
    return new Response(JSON.stringify("No Memories"), {
      status: 500,
    });
  }

  // return all memories if there no exception
  return new Response(JSON.stringify(memories), {
    status: 200,
  });
}
