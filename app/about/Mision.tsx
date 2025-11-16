import React from 'react';
import Image from 'next/image';

type CardData = {
  title: string;
  description: string;
  imgSrc: string;
  iconSrc: string;
  altImg: string;
  altIcon: string;
};

const cards: CardData[] = [
  {
    title: "Our Mission",
    description:
      "To revolutionize agriculture through innovation and sustainability, ensuring food security through sustainable production, processing, and distributing of high-quality agricultural products while empowering farmers and agribusinesses.",
    imgSrc: "/about/mission.png",
    iconSrc: "/icons/mission.svg",
    altImg: "Agriculture Mission",
    altIcon: "Mission Icon",
  },
  {
    title: "Our Vision",
    description:
      "To be a globally recognized agribusiness, driving sustainable agricultural development, fostering food self-sufficiency, and enhancing economic growth through technology and partnerships.",
    imgSrc: "/about/vision.png",
    iconSrc: "/icons/vision.svg",
    altImg: "Agriculture Vision",
    altIcon: "Vision Icon",
  },
];

const MissionVision: React.FC = () => {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal Scroll Container - Fixed */}
        <div className="flex overflow-x-auto foo py-4 scroll-smooth">
          <div className="flex space-x-10 flex-nowrap">
            {cards.map(({ title, description, imgSrc, iconSrc, altImg, altIcon }, index) => (
              <article
                key={title}
                className="flex-shrink-0 w-[85vw] sm:w-[600px] md:w-[700px] lg:w-[800px] rounded-3xl cursor-pointer flex group transition-transform duration-300 hover:scale-[1.03]"
              >
                {/* Image Container */}
                <div className="relative w-1/3 h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-l-3xl flex-shrink-0">
                  <Image
                    src={imgSrc}
                    alt={altImg}
                    fill
                    className="object-cover transition-transform duration-300 rounded-l-3xl group-hover:scale-105"
                    priority={index === 0}
                  />
                </div>

                {/* Content Container*/}
                <div className="flex flex-col justify-center p-6 sm:p-8 w-2/3 rounded-r-3xl bg-[#F4F5F0]">
                  <div className="flex items-center mb-4 sm:mb-6 gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#246A21] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#2a7a26] transition-colors duration-300">
                      <Image
                        src={iconSrc}
                        alt={altIcon}
                        width={24}
                        height={24}
                        className="filter brightness-0 invert w-4 h-4 sm:w-6 sm:h-6"
                      />
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">{title}</h3>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;