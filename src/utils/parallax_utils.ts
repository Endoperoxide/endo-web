import fayeArmLeftLower from "@/assets/Faye/ParallaxFaye/faye_arm_left_lower.png";
import fayeArmLeft from "@/assets/Faye/ParallaxFaye/faye_arm_left.png";
import fayeArmRightLower from "@/assets/Faye/ParallaxFaye/faye_arm_right_lower.png";
import fayeArmRight from "@/assets/Faye/ParallaxFaye/faye_arm_right.png";
import fayeThightRight from "@/assets/Faye/ParallaxFaye/faye_thigh_right.png";
import fayeSignature from "@/assets/Faye/ParallaxFaye/faye_signature.png";
import fayeHeadTorso from "@/assets/Faye/ParallaxFaye/faye_head_torso.png";
import fayeHipsLeftThigh from "@/assets/Faye/ParallaxFaye/faye_hips_left_thigh.png";

export type ParallaxLayer = {
  src: string;
  depth: number;
};

export const FAYE_PARALLAX_LAYERS: ParallaxLayer[] = [
  { src: fayeHipsLeftThigh, depth: 2 },
  { src: fayeArmLeft, depth: 8 },
  { src: fayeHeadTorso, depth: 4 },
  { src: fayeArmRight, depth: 8 },
  { src: fayeArmRightLower, depth: 32 },
  { src: fayeThightRight, depth: 6 },
  { src: fayeArmLeftLower, depth: 8 },
  { src: fayeSignature, depth: 4 },
];
