import type { PodiumGame } from "@/utils/podium_utils";
import GameShowcase from "@/components/GameShowcase/GameShowcase";

type Properties = {
  games: PodiumGame[];
};

export default function ListSection({ games }: Properties) {
  return (
    <div style={{ marginBottom: 25 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {games.map((game) => (
          <GameShowcase games={[game]} />
        ))}
      </div>
    </div>
  );
}
