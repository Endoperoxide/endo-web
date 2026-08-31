import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { Game } from "@/utils/game_utils";
import SubHeader from "@/components/SubHeader";

type Properties = {
  game: Game;
};

export default function GameModalReview({ game }: Properties) {
  return (
    <div className="h-full overflow-y-auto py-5">
      <SubHeader title="Description" />
      <div className="flex flex-col gap-4 p-5">
        <p className=" prose prose-invert text-[0.8rem] leading-relaxed text-text-secondary max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
            {game.review}
          </ReactMarkdown>
        </p>
      </div>
    </div>
  );
}
