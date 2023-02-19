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
      const result = await prisma.workout.create({
        data: {
          summary,
          when,
        },
      });

      return result;
    }),
});
