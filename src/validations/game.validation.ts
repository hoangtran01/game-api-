import { z } from "zod";

export const createGameSchema = z.object({
  body: z.object({
    title: z
      .string()
      .trim()
      .min(1, "Title là bắt buộc và không được để trống"),

    genre: z
      .string()
      .trim()
      .min(1, "Genre là bắt buộc và không được để trống"),

    platforms: z
      .array(z.string().trim().min(1))
      .min(1, "Phải có ít nhất một platform"),

    releaseYear: z
      .number()
      .int("Release year phải là số nguyên")
      .min(1950, "Release year không hợp lệ"),

    rating: z
      .number()
      .min(0, "Rating phải lớn hơn hoặc bằng 0")
      .max(10, "Rating không được lớn hơn 10"),

    price: z
      .number()
      .min(0, "Price phải là số lớn hơn hoặc bằng 0"),

    isMultiplayer: z.boolean(),
  }),
});

export const updateGameSchema = z.object({
  body: z
    .object({
      title: z.string().trim().min(1).optional(),

      genre: z.string().trim().min(1).optional(),

      platforms: z
        .array(z.string().trim().min(1))
        .min(1)
        .optional(),

      releaseYear: z
        .number()
        .int()
        .min(1950)
        .optional(),

      rating: z
        .number()
        .min(0)
        .max(10)
        .optional(),

      price: z
        .number()
        .min(0)
        .optional(),

      isMultiplayer: z.boolean().optional(),
    })
    .refine(
      (data) => Object.keys(data).length > 0,
      {
        message: "Phải cung cấp ít nhất một trường để cập nhật",
      }
    ),
});

export const gameIdSchema = z.object({
  params: z.object({
    id: z
      .string()
      .regex(/^[0-9a-fA-F]{24}$/, "ID game không hợp lệ"),
  }),
});