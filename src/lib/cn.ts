/**
 * @file cn.ts
 * @description Tailwind class merge helper. Falsy values are dropped before merge.
 */
import { twMerge } from "tailwind-merge";

/**
 * Join and merge class names, last conflicting utility wins.
 * @param classes class fragments; false/null/undefined ignored
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return twMerge(classes.filter((value): value is string => Boolean(value)));
}
