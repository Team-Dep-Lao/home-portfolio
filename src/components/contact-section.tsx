import axios from "axios";
import { useForm } from "react-hook-form";
import { Image, Input, Textarea } from "@chakra-ui/react";
import { Field } from "./ui/field";
import { Button } from "./ui/button";

interface FormValues {
  name: string;
  email: string;
  title: string;
  content: string;
}

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit(async (data) => {
    if (data.name.trim() === "") {
      setError("name", {
        message: `"Name" needs at least 3 characters. The name you entered is not valid.`,
      });
    }
    if (data.title.trim() === "") {
      setError("title", {
        message: `"Name" needs at least 5 characters. The name you entered is not valid.`,
      });
    }
    if (data.content.trim() === "") {
      setError("content", {
        message: `"Content" cannot be empty.`,
      });
    }

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
  });

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
          onSubmit={onSubmit}
          className="grid sm:grid-cols-2 grid-cols-1 gap-6"
        >
          <Field
            required
            invalid={!!errors.name}
            errorText={errors.name?.message}
          >
            <Input
              className="bg-white placeholder:text-gray-900 text-black bg-opacity-50 px-2"
              placeholder="Name"
              {...register("name", {
                required: "Name is required",
                minLength: 3,
                min: "At lease 3 characters.",
              })}
            />
          </Field>
          <Field
            required
            invalid={!!errors.email}
            errorText={errors.email?.message}
          >
            <Input
              placeholder="Email"
              type="email"
              autoComplete="email"
              required
              className="bg-white placeholder:text-gray-900 text-black bg-opacity-50 px-2"
              {...register("email", { required: "Email is invalid" })}
            />
          </Field>
          <Field
            invalid={!!errors.title}
            errorText={errors.title?.message}
            className="sm:col-span-2 col-span-1"
            required
          >
            <Input
              placeholder="Title"
              required
              className="bg-white placeholder:text-gray-900 text-black bg-opacity-50 px-2"
              {...register("title", { required: "Title is required", min: 5 })}
            />
          </Field>
          <Field
            invalid={!!errors.content}
            errorText={errors.content?.message}
            className="sm:col-span-2 col-span-1"
            required
          >
            <Textarea
              required
              placeholder="Message"
              className="bg-white placeholder:text-gray-900 text-black bg-opacity-50 px-2 min-h-48"
              {...register("content", {
                required: "Content cannot be empty",
              })}
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
