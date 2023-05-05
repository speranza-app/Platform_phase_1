import React from "react";
import image from "../../assets/ImageFive.jpeg";

function EventCard() {
    return (
      <div className="relative p-2 w-full rounded-lg backdrop-blur bg-white/20">
        <span className="block absolute px-4 max-w-max text-xs bg-green-400 rounded-full absolute-0">
          Workshop
        </span>
        <img
          className="object-cover w-full rounded-lg aspect-video"
          src={image}
          alt=""
        />
        <div className="px-2">
          <p className="mt-1 text-2xl text-white">Event Name</p>
          <p className="mt-1 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
            exercitationem dolorem expedita possimus et, ullam illum alias odit
            quae modi!
          </p>
          <button
            className="block py-2 mt-2 w-full text-center text-blue-100 border border-current transition-colors hover:bg-blue-200/10 active:bg-blue-200/20"
            style={{
              WebkitTapHighlightColor: "transparent",
              tapHighlightColor: "transparent",
            }}
          >
            Visit Now
          </button>
        </div>
      </div>
    );
}

function Events() {
  return (
    <>
      <main className="grid place-items-center min-h-[80vh] section">
        <h1 className="text-3xl font-bold max-w-[60ch] text-center">
          Events that help you grow
        </h1>
      </main>
      <section className="grid gap-6 p-6 bg-blue-900 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <EventCard />
        <EventCard />
        <EventCard />
      </section>
    </>
  );
}

export default Events;
