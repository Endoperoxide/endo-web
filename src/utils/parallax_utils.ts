import fayeArmLeftLower from "@/assets/Faye/ParallaxFaye/faye_arm_left_lower.png";
import fayeArmLeft from "@/assets/Faye/ParallaxFaye/faye_arm_left.png";
import fayeArmRightLower from "@/assets/Faye/ParallaxFaye/faye_arm_right_lower.png";
import fayeArmRight from "@/assets/Faye/ParallaxFaye/faye_arm_right.png";
import fayeHead from "@/assets/Faye/ParallaxFaye/faye_head.png";
import fayeThightLeft from "@/assets/Faye/ParallaxFaye/faye_thigh_left.png";
import fayeThightRight from "@/assets/Faye/ParallaxFaye/faye_thigh_right.png";
import fayeTorso from "@/assets/Faye/ParallaxFaye/faye_torso.png";
import fayeHips from "@/assets/Faye/ParallaxFaye/faye_hips.png";
import fayeSignature from "@/assets/Faye/ParallaxFaye/faye_signature.png";

export type ParallaxLayer = {
  src: string;
  depth: number;
};

export const FAYE_PARALLAX_LAYERS: ParallaxLayer[] = [
  { src: fayeThightLeft, depth: 4 },
  { src: fayeArmLeft, depth: 8 },
  { src: fayeHips, depth: 1 },
  { src: fayeTorso, depth: 4 },
  { src: fayeHead, depth: 4 },
  { src: fayeArmRight, depth: 8 },
  { src: fayeArmRightLower, depth: 32 },
  { src: fayeThightRight, depth: 4 },
  { src: fayeArmLeftLower, depth: 8 },
  { src: fayeSignature, depth: 4 },
];
