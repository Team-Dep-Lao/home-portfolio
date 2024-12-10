import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { Image, Input, Textarea } from "@chakra-ui/react";
import { Field } from "./ui/field";
import { Button } from "./ui/button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormValues {
  name: string;
  email: string;
  title: string;
  content: string;
}

const formSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .trim()
    .min(3, "Name must be at least 3 characters"),
  email: yup.string().required("Email is required").email("Email is invalid"),
  title: yup
    .string()
    .required("Title is required")
    .trim()
    .min(3, "Title must be at least 3 characters."),
  content: yup.string().trim().min(10, "Content is not empty."),
});

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(formSchema) });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (!errors) {
      try {
        await axios.post(
          "https://dashboard.teamzeplao.io.vn/api/user-contacts",
          {
            data: {
              name: data.name.trim(),
              email: data.email,
              title: data.title.trim(),
              content: data.content.trim(),
            },
          }
        );

        alert("Send request successfully");
        reset({
          content: "",
          email: "",
          name: "",
          title: "",
        });
      } catch (e) {
        console.log(e);
        alert("Something went wrong!");
      }
    }
  };

  return (
    <div className="web-container flex sm:flex-row flex-col gap-4" id="contact">
      <div className="flex-1 p-4 sm:flex hidden">
        <Image
          src={"/hand-model.png"}
          className="hover:scale-90 transition-all duration-500 aspect-square"
        />
      </div>
      <div className="flex-1 flex p-6 flex-col gap-4 sm:py-12 py-6">
        <div className="text-5xl font-bold capitalize">Get in touch</div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid sm:grid-cols-2 grid-cols-1 gap-6"
        >
          <Field invalid={!!errors.name} errorText={errors.name?.message}>
            <Input
              className="bg-white placeholder:text-gray-900 text-black bg-opacity-50 px-2"
              placeholder="Name"
              {...register("name")}
            />
          </Field>
          <Field invalid={!!errors.email} errorText={errors.email?.message}>
            <Input
              placeholder="Email"
              type="email"
              autoComplete="email"
              className="bg-white placeholder:text-gray-900 text-black bg-opacity-50 px-2"
              {...register("email")}
            />
          </Field>
          <Field
            invalid={!!errors.title}
            errorText={errors.title?.message}
            className="sm:col-span-2 col-span-1"
          >
            <Input
              placeholder="Title"
              className="bg-white placeholder:text-gray-900 text-black bg-opacity-50 px-2"
              {...register("title")}
            />
          </Field>
          <Field
            invalid={!!errors.content}
            errorText={errors.content?.message}
            className="sm:col-span-2 col-span-1"
          >
            <Textarea
              placeholder="Message"
              className="bg-white placeholder:text-gray-900 text-black bg-opacity-50 px-2 min-h-48"
              {...register("content")}
            />
          </Field>
          <Button className="bg-blue-500 font-bold text-white" type="submit">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}
