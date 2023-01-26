export interface PostStateProps {
  userId: number;
  id: number;
  title: string;
  body: string;
  email: string;
}

export type APIResource = "posts" | "comments" | "albums";
