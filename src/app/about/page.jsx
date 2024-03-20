"use client";

import Brain from "@/ui/aboutPage/cogWheelAnimation";
import EducationBlock from "@/ui/aboutPage/educationBlock/educationBlock";
import SummaryBlock from "@/ui/aboutPage/summaryBlock/summaryBlock";
import Timeline from "@/ui/aboutPage/workExperienceBlock/timeline";
import { useScroll } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  return (
    <div className="h-full overflow-scroll" ref={containerRef}>
      <div className="flex">
        {/* TEXT CONTAINER */}
        <div className="justify-center flex flex-col md:w-7/8 lg:w-3/4 xl:w-5/8 gap-24 md:gap-32 lg:gap-48 xl:gap-64 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
          {/* SUMMARY CONTAINER */}
          <SummaryBlock />
          {/* EXPERIENCE CONTAINER */}
          <div className="">
            <Timeline />
          </div>
          {/* EDUCATION CONTAINER */}
          <div className="flex flex-col justify-center items-center">
            <EducationBlock />
          </div>
        </div>

        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-10 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
