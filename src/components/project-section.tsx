import { Button, Image } from "@chakra-ui/react";

export default function ProjectSection() {

  return (
    <div className="flex flex-col items-center pt-4 pb-10 gap-4 sm:px-0 px-2" id="projects">
      <div className="sm:text-3xl text-xl font-bold">Projects</div>
      <div className="text-gray-400 text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-8 pt-4">
        {Array.from({ length: 6 }).map((_, idx) => {
          return (
            <div
              className="relative overflow-hidden group/image rounded-xl"
              key={idx}
            >
              <Image
                src={
                  "https://images.pexels.com/photos/29590685/pexels-photo-29590685/free-photo-of-chan-dung-m-t-chu-cho-t-sung-m-m-m-i-ngoai-tr-i.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
                className="w-full rounded-xl"
              />
              <div className="absolute -top-1 -translate-y-full transition-all duration-500 rounded-xl bg-opacity-80 bg-blue-500 left-0 right-0 bottom-0 group-hover/image:translate-y-0"></div>
              <div className="text-white gap-2 transition-all duration-300 flex p-4 justify-center items-center absolute top-0 bottom-0 translate-y-full left-0 right-0 font-bold group-hover/image:translate-y-0 group-hover/image:ease-in">
                <div className="flex flex-col gap-2 items-center">
                  <div>Project {idx + 1}</div>
                  <div className="italic text-center font-normal">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.{" "}
                  </div>
                  <div className="pt-4">
                    <Button className="bg-green-500 p-2 hover:translate-x-2 transition-all duration-300 font-bold">
                      View More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
