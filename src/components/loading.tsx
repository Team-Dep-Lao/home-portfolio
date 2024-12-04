import { Loader } from "lucide-react";

export default function LoadingScreen () {
  return (
    <div className="absolute bg-white top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <Loader className="size-16 animate-spin"/>
    </div>
  )
}