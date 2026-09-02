import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { Game } from "@/utils/game_utils";
import { getGameDisplay } from "@/utils/game_display_utils";

type Properties = {
  game: Game;
};

export default function GameReview({ game }: Properties) {
  const { reviewText } = getGameDisplay(game);

  return (
    <div>
      <div className="prose prose-invert text-[0.8rem] leading-relaxed text-text-secondary max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
          {reviewText}
        </ReactMarkdown>
      </div>
    </div>
  );
}
