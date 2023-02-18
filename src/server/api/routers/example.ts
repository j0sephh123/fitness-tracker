import { z } from "zod";
import { prisma } from "../../db";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const exampleRouter = createTRPCRouter({
  // TODO input shouldn't be nullish. This request should be done when
  // the id is a string. This route will be refactored or removed in the future.
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
  getWorkouts: protectedProcedure
    .input(
      z.object({
        userId: z.string(),
      })
    )
    .query(async ({ input: { userId } }) => {
      const result = await prisma.account.findFirst({
        where: {
          userId,
        },
        select: {
          workouts: true,
        },
      });

      return result?.workouts;
    }),
});
