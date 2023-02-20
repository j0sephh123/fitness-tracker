import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { messages } from "../../../utils/constants";
import { generateDate } from "../../../utils/date";
import { prisma } from "../../db";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const workoutsRouter = createTRPCRouter({
  list: protectedProcedure
    .input(
      z.object({
        userId: z.string(),
      })
    )
    .query(async ({ input: { userId } }) => {
      try {
        const { workouts } = await prisma.account.findFirstOrThrow({
          where: {
            userId,
          },
          select: {
            workouts: true,
          },
        });

        return workouts;
      } catch (e) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: messages.accountNotFound,
        });
      }
    }),
  single: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ input: { id } }) => {
      // TODO this seems unprotected, probably need to compare if session user is the correct one
      try {
        const workout = await prisma.workout.findFirstOrThrow({
          where: {
            id,
          },
        });

        return workout;
      } catch (e) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: messages.workoutNotFound,
        });
      }
    }),
  create: protectedProcedure
    .input(
      z.object({
        summary: z.string(),
        when: z.string(),
      })
    )
    .mutation(async ({ input: { summary, when }, ctx }) => {
      try {
        const { id: accountId } = await prisma.account.findFirstOrThrow({
          where: { userId: ctx.session.user.id },
          select: {
            id: true,
          },
        });

        return prisma.workout.create({
          data: {
            summary: summary || messages.defaultSummary,
            when: generateDate(when),
            accountId,
          },
        });
      } catch (e) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: messages.accountNotFound,
        });
      }
    }),
  remove: protectedProcedure
    .input(z.string())
    .mutation(async ({ input: id }) => {
      try {
        return prisma.workout.delete({
          where: {
            id,
          },
        });
      } catch (e) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: messages.failedToDeleteWorkout,
        });
      }
    }),
});
