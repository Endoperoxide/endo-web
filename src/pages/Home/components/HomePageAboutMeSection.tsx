import EyebrowTitle from "@/components/EyebrowTitle";
import AboutMeText from "@/pages/Home/components/AboutMeText";
import fayeFiredUp from "@/assets/Faye/faye_fired_up.png";

const ABOUT_ME_PARAGRAPHS = [
  `
  I think it goes without saying that I'm a huge nerd when it comes to
  video games. They have always been a core part of my life and i've
  realised that they are so much more than a form of entertaining
  escapism, but rather an artform to express emotions, stories, talent, etc.
  `,
  `
  This site is to show my appreciation for the medium, as many games
  have completely altered the way I percieve life as a whole. With
  some games expressing messages in ways that make me learn more about
  myself or simply existing during tough parts of my life.
  `,
  `
  This site serves as a personal repository of *most* games I have played, and giving my
  thoughts and opinions on each game, whilst also considering what the game is trying to achieve,
  along with the effort and workforce behind it.
  `,
];

export default function HomePageAboutMeSection() {
  return (
    <section className="relative flex flex-col bg-background-main">
      <EyebrowTitle title="About" eyebrow="What is this site?" />

      <div className="flex flex-col gap-8 py-5 md:px-10 md:py-12 lg:flex-row lg:items-center lg:gap-12">
        {/* Display image */}
        <div className="order-first mx-auto w-full shrink-0 lg:order-last lg:w-[48%]">
          <img
            src={fayeFiredUp}
            alt="About Me"
            className="block h-auto w-full object-contain"
          />
        </div>

        {/* Text */}
        <div className="min-w-0 flex-1 lg:pl-[clamp(2rem,5vw,6rem)]">
          <AboutMeText paragraphs={ABOUT_ME_PARAGRAPHS} />
        </div>
      </div>
    </section>
  );
}
