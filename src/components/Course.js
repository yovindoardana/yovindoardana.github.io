import React from 'react'
import { courses } from '../data'

export default function Course () {
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
        <div className="flex flex-wrap -m-4">
          {courses.map((course) => (
            <a
              href={ course.link }
              target='_blank'
              key={course.title}
              className="md:w-1/3 w-100 p-4 mx-auto" rel="noreferrer">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={course.image}
                />
                <div className="px-8 py-10 relative min-h-fit w-[30rem] sm:w-100 border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-sky-400 mb-1">
                    {course.type}
                  </h2>
                  <h1 className='tracking-widest uppercase my-2'>
                    { course.source }
                  </h1>
                  <h1 className="title-font text-lg font-medium text-white mb-3 min-h-[5rem]">
                    {course.title}
                  </h1>
                  <p>Valid Until : {course.validUntil }</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
