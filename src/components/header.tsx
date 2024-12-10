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
import { Avatar } from "./ui/avatar";

const items = [
  {
    label: "Home",
    link: "home",
  },
  {
    label: "Skills",
    link: "skills",
  },
  {
    label: "Projects",
    link: "projects",
  },
  {
    label: "Contact",
    link: "contact",
  },
];

const subItems = [
  {
    label: "Home",
    link: "home",
  },
  {
    label: "Skills",
    link: "skills",
  },
  {
    label: "Projects",
    link: "projects",
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

  const onNavigate = (link: string) => {
    const element = document.querySelector(`#${link}`); // Tìm phần tử mục tiêu
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Cuộn mượt
    }
  };

  return (
    <header
      className={cn([
        "bg-transparent sticky top-0 text-white font-bold shadow-gray-700 shadow-sm transition-all duration-300 z-50",
        !isAtTop ? "bg-white text-black" : "",
      ])}
    >
      <div className="web-container justify-between sm:flex hidden items-center py-4">
        <Avatar name="Ken Dev" src="" className="size-14" />
        <div className="flex flex-row items-center">
          {subItems.map((item, idx) => (
            <Button
              onClick={() => onNavigate(item.link)}
              className={cn([
                "rounded-md hover:shadow-md hover:text-blue-400 shadow-blue-400 p-4",
                !isAtTop ? "text-black" : "text-white",
              ])}
              key={idx}
            >
              {item.label}
            </Button>
          ))}
        </div>
        <div className="flex flex-row items-center gap-2">
          {socials.map((social, idx) => (
            <div
              key={idx}
              onClick={() => onNavigate(social.link)}
              className={cn([
                "border rounded-full p-1",
                isAtTop ? "border-white" : "border-black",
              ])}
            >
              <social.icon
                className={cn([isAtTop ? "stroke-white" : " stroke-black"])}
              />
            </div>
          ))}
        </div>
        <Button
          onClick={() => onNavigate("contact")}
          className={cn([
            "font-bold p-4 rounded-none border  hover:text-gray-400 hover:border-gray-400 bg-transparent hover:bg-transparent active:bg-transparent",
            isAtTop ? "border-white text-white" : "text-black border-black",
          ])}
        >
          Let Connect
        </Button>
      </div>
      <ActionBarRoot open={isMobile}>
        <ActionBarContent
          className={cn([
            "translate-y-[400px] transition-all duration-700",
            !isScrollingUp ? "translate-y-0" : "translate-y-[400px]",
          ])}
        >
          {items.map((item, idx) => (
            <Fragment key={idx}>
              <Button onClick={() => onNavigate(item.link)}>
                {item.label}
              </Button>
              <ActionBarSeparator
                className={cn([idx === items.length - 1 ? "hidden" : "flex"])}
              />
            </Fragment>
          ))}
        </ActionBarContent>
      </ActionBarRoot>
      {/* <ActionBarRoot open={isMobile}>
        <ActionBarContent
          className={cn([
            "translate-y-[400px] transition-all duration-700",
            isScrollingUp ? "translate-y-0" : "translate-y-[400px]",
            isAtTop ? "hidden" : ""
          ])}
        >
          <Button
            className="text-white bg-blue-500"
            onClick={() => onNavigate("home")}
          >
            <ArrowUp className="size-6" />
          </Button>
        </ActionBarContent>
      </ActionBarRoot> */}
      <div className={cn(["sm:hidden flex items-center p-2 justify-between"])}>
        <Avatar name="Ken Dev" src="" className="size-14" />
      </div>
    </header>
  );
}
