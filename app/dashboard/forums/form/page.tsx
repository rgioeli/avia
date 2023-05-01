import PostsWithReplyCount from "@/app/(templates)/(PostsWithReplyCount)/PostsWithReplyCount";
import CreateFormPost from "@/app/(user input)/CreateFormPost";
import { getAllPostsWithReplyCounts } from "@/lib/prisma/crud/read/getAllPostsWithReplyCount";
import { getCheckForValidTermId } from "@/lib/prisma/crud/read/getCheckForValidTermId";
import { notFound, redirect } from "next/navigation";

async function checkForValidTermId(termId: string) {
  const request = await getCheckForValidTermId(termId);
  return request;
}

async function getPostsThatPertainToForm(id: string) {
  const request = await getAllPostsWithReplyCounts(id);
  return request;
}

export default async function FormPage({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const { id } = searchParams;
  const validIdCheck = await checkForValidTermId(id);
  const posts = await getPostsThatPertainToForm(id);

  if (!validIdCheck) return redirect("/dashboard/forums");
  console.log(posts);

  return (
    <div>
      <h1 className="py-3 text-lg font-medium">{validIdCheck.term}</h1>
      {posts &&
        posts.map((post) => <PostsWithReplyCount key={post.id} post={post} />)}
      <CreateFormPost termId={id} />
    </div>
  );
}
