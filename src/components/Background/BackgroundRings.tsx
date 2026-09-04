import innerRing from "@/assets/Vector/inner_ring.svg";
import outerRing from "@/assets/Vector/outer_ring.svg";

export default function BackgroundRings() {
  return (
    <div className="pointer-events-none absolute inset-0 z-1">
      <img
        src={outerRing}
        alt="Ring"
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover animate-[spin_30s_linear_infinite]"
      />
      <img
        src={innerRing}
        alt="Ring"
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover animate-[spin_15s_linear_infinite_reverse]"
      />
    </div>
  );
}
