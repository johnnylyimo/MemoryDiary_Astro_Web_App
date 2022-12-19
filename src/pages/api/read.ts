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
      },
    });
  } catch (error) {}
}
