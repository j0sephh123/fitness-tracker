import { z } from "zod";
import { prisma } from "../../db";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const workoutsRouter = createTRPCRouter({
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
  create: protectedProcedure
    .input(
      z.object({
        summary: z.string(),
        when: z.string(),
      })
    )
    .mutation(async ({ input: { summary, when } }) => {
      // TODO let's install valtio to keep the global state
      const result = await prisma.workout.create({
        data: {
          summary,
          when: `${when}T00:00:00.000Z`, // TODO find a workaround
          // need to add accountId
        },
      });

      return result;
    }),
});
