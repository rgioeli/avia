import Image from "next/image";
import photo from "../../public/people-meeting.jpg";

export default function DashboardPage() {
  return (
    <div className="flex items-center">
      <Image
        src={photo}
        width={500}
        height={400}
        alt={"people talking in a meeting"}
      />
      <div className="pl-10">
        <h1 className="text-lg">
          People <i>need</i> <b>people 🤝</b>.
        </h1>
        <h3>
          Specifically, other people who have or are currently going through
          what you are.
        </h3>
        <p className="pt-3">
          Sometimes you're left with questions when you leave the doctor. Or
          maybe you just need advice from other people who know what you're
          going through.
        </p>
        <p className="pt-3">
          This is why <span className="font-medium">Avia</span>
          <span className="font-light"> exists</span>; to connect and support
          each other.
        </p>
      </div>
    </div>
  );
}
