import React from "react";
import { courses } from "../data";

export default function Course() {
  return (
    <section id="course" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Course & Certification
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            These are courses & certifications
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {courses
            .sort((a, b) => new Date(b.validUntil) - new Date(a.validUntil))
            .map((course) => (
              <a
                href={course.link}
                target="_blank"
                key={course.title}
                className="w-full h-full group relative"
                rel="noreferrer"
              >
                <div className="flex">
                  <img
                    alt="gallery"
                    className=""
                    // className="absolute inset-0 w-full h-full object-cover object-center"
                    src={course.image}
                  />
                  <div className="absolute top-0 left-0 z-20 border-4 border-gray-800 bg-gray-900 opacity-0 group-hover:opacity-100 h-full w-full py-4 px-10 overflow-auto">
                    <h2 className="tracking-widest text-sm title-font font-medium text-sky-400 mb-1">
                      {course.type}
                    </h2>
                    <h1 className="tracking-widest uppercase my-2">
                      {course.source}
                    </h1>
                    <h1 className="title-font text-lg font-medium text-white mb-3 min-h-[5rem]">
                      {course.title}
                    </h1>
                    <p>Valid Until : {course.validUntil}</p>
                  </div>
                </div>
              </a>
            ))}
        </div>
      </div>
    </section>
  );
}
