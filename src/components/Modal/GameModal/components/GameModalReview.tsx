import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { Game } from "@/utils/game_utils";
import TextBox from "@/components/TextBox";

type Properties = {
  game: Game;
};

export default function GameModalReview({ game }: Properties) {
  return (
    <div>
      <div className="h-full overflow-y-auto py-5">
        <TextBox>
          <p className="prose prose-invert text-[0.8rem] leading-relaxed text-text-secondary max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks]}>
              {game.review}
            </ReactMarkdown>
          </p>
        </TextBox>
      </div>
    </div>
  );
}
