import { Button } from "@chakra-ui/react";
import { ArrowRightCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <div
      className="web-container sm:grid sm:grid-cols-3 gap-2 sm:pt-28 pt-8"
      id=""
    >
      <div className="flex sm:col-span-2 col-span-1 flex-col gap-4 sm:items-start items-center">
        <div className="bg-gradient-to-r from-purple-500 font-bold to-blue-500  border-white border-2 rounded-none sm:text-2xl text-xl text-center p-2">
          Welcome to my Portfolio
        </div>
        <div className="sm:text-5xl text-3xl font-bold">
          Hello there! I'm Kendev - leader of TeamZepLao
        </div>
        <div className="text-gray-300 text-justify sm:text-sm text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <Button className="font-bold">
          <div className="flex items-center gap-1">
            <ArrowRightCircle />
            <p>Let Connect</p>
          </div>
        </Button>
      </div>
      <div className="flex justify-end">
        <img src="/pc-model.png" className="bg-transparent" loading="lazy" />
      </div>
    </div>
  );
}
