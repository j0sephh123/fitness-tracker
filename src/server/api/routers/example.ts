import { z } from "zod";
import { prisma } from "../../db";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getAccount: protectedProcedure
    .input(z.string().nullish())
    .query(async ({ input }) => {
      if (input) {
        const result = await prisma.account.findFirst({
          where: {
            userId: input,
          },
          include: {
            workouts: true,
          },
        });

        return {
          result: result,
          message: "you can now see this secret message!",
        };
      }

      return {
        message: "you can now see this secret message!",
      };
    }),
});
