import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:helmiagustiawan905@gmail.com?subject=${formData.subject}&body=Hi, my name is${formData.name}. ${formData.message} ${formData.email}`;
  };

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-4 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-4 md:mt-8 mt-[80px] items-center">
        <h4 className="text-[16px] md:text-4xl font-semibold text-center mb-2">
          I have got just what you need.
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-2 md:space-y-5">
          <div className="flex items-center space-x-3 justify-start md:space-x-5 md:justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <span className="text-[14px] md:text-2xl">+6281319982858</span>
          </div>
          <div className="flex items-center space-x-3 justify-start md:space-x-5 md:justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <span className="text-[14px] md:text-2xl">
              helmiagustiawan905@gmail.com
            </span>
          </div>
          <div className="flex items-center space-x-3 justify-start md:space-x-5 md:justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <span className="text-[14px] md:text-2xl">
              Jln Parakan Jati, Bojong Gede Bogor.
            </span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 mx-auto w-full md:w-fit md:px-4"
        >
          <div className="flex md:flex-row flex-col md:space-y-0 md:space-x-2 space-x-0 space-y-2 w-full">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
