import Building from "../assets/bg-transparent.png";
import PatternLight from "../assets/pattern-light.svg";
import PatternDark from "../assets/pattern-dark.svg";

export const MainBg = () => {
  return (
    <div className="absolute inset-0 z-0 h-screen translate-z-0 overflow-hidden">
      <img
        src={PatternLight}
        alt="light pattern background"
        className="h-full w-full object-cover object-center brightness-120 select-none dark:hidden"
      />
      <img
        src={PatternDark}
        alt="light pattern background"
        className="hidden h-full w-full object-cover object-center select-none dark:block"
      />

      <img
        src={Building}
        alt="Building Background"
        className="absolute inset-0 bottom-0 mx-auto aspect-auto h-full object-cover object-center select-none dark:brightness-50"
        draggable="false"
      />
    </div>
  );
};
