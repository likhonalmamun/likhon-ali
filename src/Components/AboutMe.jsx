import React from "react";

const AboutMe = () => {
  return (
    <div className="p-10 px-40  border-t-2 border-b-2 border-rose-400 rounded-3xl items-center flex justify-between my-48">
      <div>
        <img
          className="rounded-full border-2 border-amber-200 w-full"
          src="logo.png"
          alt=""
        />
      </div>
      <div className="text-right w-[50%]">
        <h1 className="text-rose-500 text-4xl font-bold mb-3 uppercase">
          About Me
        </h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo neque
          distinctio enim quaerat error rem nihil iste iusto quae recusandae!
          Odio cumque nulla laboriosam soluta animi ex hic explicabo, voluptatum
          ducimus tempore commodi libero veritatis eum voluptates, illum ipsa
          architecto officiis earum? Nam, quae aspernatur. Mollitia perspiciatis
          similique nulla accusantium rem eos exercitationem. Expedita
          reiciendis, ex reprehenderit odio optio itaque ullam vel! Pariatur
          eveniet dolor consequatur recusandae. Ea officiis doloremque odit
          alias dicta odio quaerat sapiente quas libero totam sequi facere
          suscipit aperiam blanditiis, modi iste est aspernatur beatae fuga
          laboriosam placeat in! Iste tempora autem laudantium nemo dolor
          quibusdam distinctio veniam repellat enim voluptates quas reiciendis
          nobis error minima eum debitis quidem, placeat iusto harum commodi? Ea
          reprehenderit eligendi molestias commodi.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;