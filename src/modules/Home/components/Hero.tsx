import { useContext, useRef } from "react";
import { assets } from "../../../assets/assets";
import Button from "../../../components/common/Button";
import { AppContext } from "../../../context/AppContext";
import Input from "../../../components/common/Input";
import { MapPinIcon, SearchIcon } from "lucide-react";

const Hero = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("AppContext must be used within an AppContextProvider");
  }

  const { searchFilter, setSearchFilter, setIsSearched } = context;

  const titleRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);

  const onSearch = () => {
    if (titleRef.current && locationRef.current) {
      setSearchFilter({
        title: titleRef.current.value,
        location: locationRef.current.value,
      });
      setIsSearched(true);
    }
  };

  return (
    <div className="max-lg:px-4">
      <div className="bg-gradient-to-r from-[#4F0487] to-[#130121] flex flex-col justify-center items-center text-white py-16 rounded-[15px]">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
          Over 10,000+ jobs to apply
        </h2>
        <p className="md:text-sm text-xs mb-8 max-w-xl mx-auto  font-light px-5 text-center">
          Your Next Big Career Move Starts Right Here - Explore the Best Job
          Opportunities and Take the First Step Toward Your Future!
        </p>
        <div className="flex items-center  bg-white rounded text-gray-600 max-w-xl p-2 mx-4 sm:mx-auto">
          <Input
            icon={<SearchIcon color="#7A7B7D" size={18} />}
            placeholder="Search"
            ref={titleRef}
          />
          <Input
            icon={<MapPinIcon color="#7A7B7D" size={20} />}
            placeholder="Location"
            ref={locationRef}
          />
          <Button
            className="w-fit max-sm:text-xs"
            label="Search"
            onClick={onSearch}
          />
        </div>
      </div>

      <div className="border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md ">
        <div className="flex items-center gap-10 lg:gap-16 flex-wrap ">
          <p className="font-medium">Trusted By</p>
          <img src={assets.microsoft_logo} className="h-6" alt="microsoft" />
          <img src={assets.walmart_logo} className="h-6" alt="walmart" />
          <img src={assets.accenture_logo} className="h-6" alt="accenture" />
          <img src={assets.adobe_logo} className="h-6" alt="adobe" />
          <img src={assets.amazon_logo} className="h-6" alt="amazon" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
