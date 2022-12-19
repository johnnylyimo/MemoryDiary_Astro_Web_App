import type { APIRoute } from "astro";
import { Memory } from "@prisma/client";

export const post: APIRoute = async ({ request }) => {
  const { title, content } = await request.json();
  let newMemory: Memory;
  try {
    
  } catch (error) {
    
  }
};
