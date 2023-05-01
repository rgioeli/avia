import { convertDate } from "@/lib/convert-date/convert-date";
import { PostWithReplyCountType } from "@/types/PostsWithReplyCountType";
import Image from "next/image";

export default function PostsWithReplyCount({
  post,
}: {
  post: PostWithReplyCountType;
}) {
  return (
    <div className="w-full border-2 border-primary p-3 mb-3 bg-white rounded-md">
      <div className="flex items-center space-x-3">
        <div>
          {/** image */}
          <Image
            src={post.user?.image as string}
            width={35}
            height={35}
            alt={"pfp"}
          />
        </div>
        <div>
          <div className="flex items-center space-x-3">
            {/** username and createdAt */}
            <h5 className="font-medium">{post.user?.username}</h5>
            <p className="text-sm">{convertDate(post.createdAt.toString())}</p>
          </div>
        </div>
      </div>
      <div className="py-3">
        {/**Content Type */}
        <p>{post.content}</p>
      </div>
    </div>
  );
}
