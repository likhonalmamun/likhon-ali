import React from "react";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nec6x9a",
        "template_sqsgb9x",
        e.target,
        "GuI-sbNBgefnHFm7f"
      )
      .then((res) =>
        toast.success("You message successfully set to MD. Likhon Ali.")
      )
      .catch((er) => console.error(er));
    e.target.reset();
  };
  return (
    <div
      className="lg:p-10 flex justify-between
     items-center px-4 2xl:px-40 my-20"
    >
      <div className="md:w-1/2 w-full">
        <h1
          className="uppercase text-4xl font-bold
         text-rose-500 text-center"
        >
          Send an email
        </h1>
        <form onSubmit={sendEmail} className="py-5 w-full" action="">
          <label
            className="hover:text-teal-300 duration-100 
            text-lg font-bold text-amber-300 block my-2"
            htmlFor=""
          >
            Your Name :
          </label>
          <input
            name="name"
            required
            className="hover:border-rose-500 duration-300 
            px-7 py-3 rounded-sm bg-[rgba(0,0,0,1)] 
            border-l border-b border-teal-300 w-full block"
            type="text"
          />
          <label
            className="hover:text-teal-300 duration-100 
            text-lg font-bold text-amber-300 block my-2"
            htmlFor=""
          >
            Your Email :
          </label>
          <input
            name="email"
            required
            className="hover:border-rose-500 duration-300 px-7
             py-3 rounded-sm bg-[rgba(0,0,0,1)] border-l 
             border-b border-teal-300 w-full block"
            type="email"
          />
          <label
            className="hover:text-teal-300 duration-100 text-lg
             font-bold text-amber-300 block my-2"
            htmlFor=""
          >
            Subject :
          </label>
          <input
            name="subject"
            required
            className="hover:border-rose-500 duration-300 px-7
             py-3 rounded-sm bg-[rgba(0,0,0,1)] border-l
              border-b border-teal-300 w-full block"
            type="text"
          />
          <label
            className="hover:text-teal-300 duration-100 text-lg font-bold
             text-amber-300 block my-2"
            htmlFor=""
          >
            Your Message :
          </label>
          <textarea
            name="message"
            required
            className="px-7 py-3 hover:border-rose-500 duration-300 
            rounded-sm bg-[rgba(0,0,0,1)] border-l border-b
             border-teal-300 w-full block"
            rows={3}
          />
          <button
            className="w-full transition-all  duration-300  uppercase rounded-md hover:scale-95 text-white 
            font-bold text-lg my-5 py-3  hover:bg-black 
            border-2 border-rose-500 bg-rose-500"
            type="submit"
          >
            Send email
          </button>
        </form>
      </div>
      <div>
        <img
          className="rounded-full border-2 hidden md:block 
          border-amber-200 hover:border-rose-500 hover:scale-95 duration-300 w-[350px] xl:w-full"
          src="logo.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Contact;
