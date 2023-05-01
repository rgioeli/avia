import Image from "next/image";
import photo from "@/public/prop-journal-trimmed.png";

export default function ForumsPage() {
  return (
    <div>
      <h1 className="py-3 font-medium text-lg">Forums</h1>
      <div className="flex">
        <div>
          <Image
            src={photo}
            width={400}
            height={400}
            alt={"Photo of a health journal"}
          />
        </div>
        <div className="pl-10">
          <h1 className="text-lg font-medium">How to use forums</h1>
          <nav>
            <ol className="list-decimal">
              <li>Search for a diagnosis you are interested in</li>
              <li>Click on the diagnosis to enter the discussion</li>
              <li>
                Interact with the discussion by helping others find answers to
                their questions or learning more about the diagnosis
              </li>
            </ol>
          </nav>
          <p></p>
        </div>
      </div>
    </div>
  );
}
