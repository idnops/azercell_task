import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateDebitNumbers() {
  return Math.floor(
    Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, 16 - 1),
  );
}
