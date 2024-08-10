import React, { useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";

interface Activity {
  time: string;
  description: string;
}

interface Day {
  date: string;
  dayTitle: string;
  activities: Activity[];
}

interface TimelineCardProps {
  event: string;
  days: Day[];
  onClose: () => void;
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  event,
  days,
  onClose,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleScrollDown = () => {
    if (cardRef.current) {
      cardRef.current.scrollBy({
        top: cardRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        ref={cardRef}
        className="relative h-[300px] w-10/12 overflow-y-auto overflow-x-hidden rounded-2xl bg-[url('/landing-page/timeline-detail/bg-timeline.png')] p-6 shadow-lg lg:h-[360px] lg:w-8/12 xl:h-[420px] xl:w-6/12"
      >
        <button
          className="absolute right-2 top-2 text-white hover:text-gray-200"
          onClick={onClose}
        >
          <IoMdClose className="h-8 w-8" />
        </button>
        <div className="my-2 text-center font-mogula text-2xl text-[#64B1F7] md:text-3xl xl:text-4xl">
          {event}
        </div>
        <div className="relative flex font-rem">
          {/* Wrapper for the time area */}
          <div className="flex w-1/2 flex-col items-end pr-6">
            {days.map((day, index) => (
              <div key={index}>
                <div className="flex items-center">
                  <h2 className="relative flex h-[60px] items-center text-xs md:h-[72px] md:text-base xl:text-lg">
                    <Image
                      src="/landing-page/timeline-detail/ombak_left.svg"
                      alt="ombak"
                      width={120}
                      height={120}
                      className="absolute left-[-20px] top-[-12px] w-8/12 md:left-[-40px] md:top-[-36px]"
                    />
                    <span className="flex w-32 justify-end rounded-full bg-[#000D76] py-2 pr-2 text-[#99E0FF] shadow-[0px_0px_16px_#64B1F7] md:w-48">
                      {day.date}
                    </span>
                  </h2>
                </div>

                <div className="space-y-2">
                  {day.activities.map((activity, idx) => (
                    <div
                      key={idx}
                      className="flex h-[40px] items-center text-xs text-[#0010A4] md:h-[48px] md:text-sm xl:text-base"
                    >
                      <span className="ml-20">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Vertical Line with Circles */}
          <div className="absolute bottom-0 left-1/2 top-0 flex w-[2px] flex-col justify-between bg-[#000D76] lg:w-[3px]">
            {days.map((day, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {/* Large circle for date and title */}
                <div className="flex h-[60px] items-center md:h-[72px]">
                  <div className="relative flex h-16 w-16 flex-col items-center justify-center">
                    {/* Place the jellyfish icon according to the activity */}
                    {index === 0 && event === "OSKM" ? (
                      <Image
                        src="/landing-page/timeline-detail/ubur.svg"
                        alt="ubur"
                        width={100}
                        height={100}
                        className="absolute"
                      />
                    ) : (
                      <div className="h-2/5 w-2/5 rounded-full bg-[#000D76] md:h-1/2 md:w-1/2"></div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  {day.activities.map((_, idx) => (
                    <div
                      key={idx}
                      className="flex h-[40px] items-center md:h-[48px]"
                    >
                      {/* Small circle for time and activity */}
                      <div className="h-3 w-3 rounded-full bg-[#000D76]"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Wrapper for the activity area */}
          <div className="w-1/2 pl-6">
            {days.map((day, index) => (
              <div key={index}>
                <div className="relative flex items-center">
                  <h2 className="flex h-[60px] items-center text-xs text-blue-800 md:h-[72px] md:text-base xl:text-lg">
                    <span className="relative flex w-32 justify-start rounded-full bg-[#000D76] py-2 pl-4 text-[#99E0FF] shadow-[0px_0px_16px_#64B1F7] md:w-72 xl:w-96">
                      {day.dayTitle}
                      <Image
                        src="/landing-page/timeline-detail/ombak_1.svg"
                        alt="ombak"
                        width={120}
                        height={120}
                        className="absolute right-[-36px] top-[-18px] w-8/12 md:right-[-40px] md:top-[-30px] md:w-4/12 xl:top-[-44px]"
                      />
                    </span>
                  </h2>
                </div>

                <div className="space-y-2">
                  {day.activities.map((activity, idx) => (
                    <div
                      key={idx}
                      className="flex h-[40px] items-center text-xs text-[#0010A4] md:h-[48px] md:text-sm xl:text-base"
                    >
                      <span>{activity.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        className="fixed bottom-40 left-1/2 z-50 -translate-x-1/2 transform rounded-full bg-[#CC007D] p-2 text-white shadow-[0px_0px_10px_#FFFFFF] hover:bg-[#FF8CD9] hover:text-[#0010A4]"
        onClick={handleScrollDown}
      >
        <MdKeyboardArrowDown className="h-6 w-6" />
      </button>
    </div>
  );
};

export default TimelineCard;
