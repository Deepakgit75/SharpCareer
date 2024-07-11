import React from "react";
import { Typewriter } from "react-simple-typewriter";
import imageImg from "../assets/image.jpeg";

const Hero = () => {
  return (
    <div>
      <section className="bg-blue-100 dark:bg-gray-900">
        <div className="py-16 relative px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            <div className="Typewriter" data-testid="typewriter-wrapper">
              <span className="Typewriter__wrapper">
                <strong className="text-blue-950">
                  We are providing services like
                </strong>

                <p className=" text-green-600 font-extrabold text-center text-highlighter text-4xl">
                  <Typewriter
                    words={[" AC", " Washing Machine", " Refrigerator", " LED"]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </p>
              </span>
            </div>
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Searching through dozens of home service providers is a thing of the
            past. Rely on our national network of trusted, local home service
            professionals for all your home service needs.
          </p>

          <div>
            <span className="font-semibold text-gray-400 uppercase mb-5">
              Stats that matter
            </span>
            <dl className="mt-5 grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl md:text-4xl font-bold">
                  <span>50,000</span>+
                </dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">
                  Clients
                </dd>
              </div>

              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl md:text-4xl font-bold">
                  <span>100</span>+
                </dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">
                  Cities
                </dd>
              </div>

              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl md:text-4xl font-bold">
                  <span>24*7</span>
                </dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">
                  Available
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <div className="overflow-hidden bg-blue-100 py-24 sm:py-16 md:px-0 px-3">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-primary-600">
                  1 Stop Solution for All Your Needs
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-blue-950   sm:text-4xl">
                  The ServicePros
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We are here to provide you with skilled, affordable services
                  that occur on your schedule. We are here when you need us!
                  Every one of our technicians is courteous and will show up in
                  uniform.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold  text-blue-950 ">
                      Mission{" "}
                    </dt>{" "}
                    <dd class="inline">
                      {" "}
                      To create encore experiences that customers can't wait to
                      share with others.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-blue-950 ">
                      Vision{" "}
                    </dt>{" "}
                    <dd className="inline">
                      {" "}
                      To be the appliance service leader renowned for integrity
                      and dependability.{" "}
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt class="inline font-semibold text-blue-950 ">
                      Code of Values{" "}
                    </dt>
                    <dd className="inline">
                      {" "}
                      Mr. Appliance locations share a Code of Values and culture
                      to live by, which not only outline how we work but also
                      how we live our daily lives.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <div>
              <h1 className="mt-16    text-3xl font-bold tracking-tight text-blue-950  sm:text-4xl "></h1>
              <a href="">
                <img
                  src={imageImg}
                  alt=""
                  className=" mr-20 object-fill bg-blue-50 justify-start w-auto h-96 "
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
