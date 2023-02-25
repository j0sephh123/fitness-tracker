import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { messages } from "../../../utils/constants";
import { prisma } from "../../db";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const exercisesRouter = createTRPCRouter({
  list: protectedProcedure
    .input(
      z.object({
        userId: z.string(),
      })
    )
    .query(async ({ input: { userId } }) => {
      try {
        const { exercises } = await prisma.account.findFirstOrThrow({
          where: {
            userId,
          },
          select: {
            exercises: true,
          },
        });

        return exercises;
      } catch (e) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: messages.accountNotFound,
        });
      }
    }),
  create: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        exrx: z.string(),
      })
    )
    .mutation(async ({ input: { title, exrx }, ctx }) => {
      try {
        const { id: accountId } = await prisma.account.findFirstOrThrow({
          where: { userId: ctx.session.user.id },
          select: {
            id: true,
          },
        });

        return prisma.exercise.create({
          data: {
            title,
            exrx,
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
});
