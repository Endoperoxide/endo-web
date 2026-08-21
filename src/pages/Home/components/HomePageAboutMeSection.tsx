import SectionTitle from "@/pages/Home/components/SectionTitle";
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
      <SectionTitle title="About" />

      <div className="flex flex-wrap-reverse items-center justify-between gap-[clamp(2rem,4vw,4rem)] px-[clamp(1.5rem,4vw,3rem)] py-[clamp(2.5rem,6vw,5rem)]">
        {/* Text */}
        <div className="min-w-0 flex-1 basis-85 pl-0 lg:pl-[clamp(2rem,8vw,9rem)]">
          <AboutMeText paragraphs={ABOUT_ME_PARAGRAPHS} />
        </div>

        {/* Display image */}
        <div className="relative min-w-0 w-[clamp(420px,48vw,900px)] max-w-full flex-1 basis-85">
          <img
            src={fayeFiredUp}
            alt="About Me"
            className="block h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
