import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { Game } from "@/utils/game_utils";

type Properties = {
  game: Game;
};

export default function GameReview({ game }: Properties) {
  return (
    <div>
      <div className="flex flex-col">
        <p className="prose prose-invert text-[0.8rem] leading-relaxed text-text-secondary max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
            {game.review}
          </ReactMarkdown>
        </p>
      </div>
    </div>
  );
}
