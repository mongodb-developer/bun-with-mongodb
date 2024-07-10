import type { ObjectId } from "mongodb";

// Create a custom type for our movies
export interface Movie {
  _id?: ObjectId,
  title: string,
  year?: number,
}