import { Prisma } from "@prisma/client";

export interface PostWithReplyCountType {
  id: string;
  content: string;
  user: {
    image: string | null;
    id: string;
    username: string | null;
  } | null;
  replies: {
    _count: Prisma.ReplyCountOutputType;
  }[];
  likes: {
    user: {
      id: string;
      username: string | null;
    } | null;
    id: string;
  }[];
  createdAt: Date;
}
