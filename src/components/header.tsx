import { Image, Link } from "@chakra-ui/react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ActionBarContent,
  ActionBarRoot,
  ActionBarSeparator,
} from "@/components/ui/action-bar";
import { Fragment, useMemo } from "react";
import useSizeScreen from "@/hooks/useSizeScreen";
import { useScroll } from "@/hooks/useScroll";
import { cn } from "@/lib/utils";

const items = [
  {
    label: "Home",
    link: "/#",
  },
  {
    label: "Skills",
    link: "/#skills",
  },
  {
    label: "Projects",
    link: "/#projects",
  },
];

const socials = [
  {
    icon: Linkedin,
    link: "",
  },
  {
    icon: Facebook,
    link: "",
  },
  {
    icon: Instagram,
    link: "",
  },
];

export default function Header() {
  const { width } = useSizeScreen();
  const { isAtTop, isScrollingUp } = useScroll();
  const isMobile = useMemo(() => width < 640, [width]);

  return (
    <header
      className={cn([
        "bg-transparent sticky top-0 text-white font-bold shadow-gray-700 shadow-sm transition-all duration-300 z-50",
        !isAtTop ? "bg-white text-black" : "",
      ])}
    >
      <div className="web-container justify-between sm:flex hidden items-center py-4">
        <Image
          src="https://bit.ly/sage-adebayo"
          alt="logo"
          className="aspect-square rounded-full size-14 "
        />
        <div className="flex flex-row items-center">
          {items.map((item, idx) => (
            <Link
              href={item.link}
              className={cn([
                "rounded-md hover:shadow-md hover:text-gray-400 p-4",
                !isAtTop ? "text-black" : "text-white",
              ])}
              key={idx}
              scrollBehavior={"smooth"}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-row items-center gap-2">
          {socials.map((social, idx) => (
            <Link
              key={idx}
              href={social.link}
              className={cn([
                "border rounded-full p-1",
                isAtTop ? "border-white" : "border-black",
              ])}
            >
              <social.icon
                className={cn([isAtTop ? "stroke-white" : " stroke-black"])}
              />
            </Link>
          ))}
        </div>
        <Button
          className={cn([
            "font-bold p-4 rounded-none border  hover:text-gray-400 hover:border-gray-400 bg-transparent hover:bg-transparent active:bg-transparent",
            isAtTop ? "border-white text-white" : "text-black border-black",
          ])}
        >
          Let Connect
        </Button>
      </div>
      <ActionBarRoot open={isMobile && !isScrollingUp}>
        <ActionBarContent>
          {items.map((item, idx) => (
            <Fragment key={idx}>
              <Link href={item.link} scrollBehavior={"smooth"}>
                <Button>{item.label}</Button>
              </Link>
              <ActionBarSeparator
                className={cn([idx === items.length - 1 ? "hidden" : "flex"])}
              />
            </Fragment>
          ))}
        </ActionBarContent>
      </ActionBarRoot>
      <div className={cn(["sm:hidden flex items-center p-2 justify-between"])}>
        <Image
          src="https://bit.ly/sage-adebayo"
          alt="logo"
          className="aspect-square rounded-full size-14 "
        />
      </div>
    </header>
  );
}
