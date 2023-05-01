import { prisma } from "../../connect";

export const createPost = async (
  content: string,
  userId: string,
  medicalSearchTermId: string
) => {
  //Create a post for the user
  const post = await prisma.post.create({
    data: {
      content,
      user: {
        connect: {
          id: userId,
        },
      },
      MedicalSearchTerm: {
        connect: {
          id: medicalSearchTermId,
        },
      },
    },
  });

  if (!post) return false;
  return post;
};
