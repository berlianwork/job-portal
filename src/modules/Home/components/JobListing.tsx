import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import { assets, JobCategories, JobLocations } from "../../../assets/assets";
import Card from "../../../components/common/Card";
import Badge from "../../../components/common/Badge";
import Button from "../../../components/common/Button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { IJob } from "../../App/interface/job.interface";

const JobListing = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("AppContext must be used within an AppContextProvider");
  }

  const { searchFilter, isSearched, setSearchFilter, jobs } = context;
  const [showFilter, setShowFilter] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [filterJobs, setFilterJobs] = useState(jobs);

  const handleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };
  const handleLocation = (location: string) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((l) => l !== location)
        : [...prev, location]
    );
  };

  useEffect(() => {
    const matchesCategory = (job: IJob) =>
      selectedCategories.length === 0 ||
      selectedCategories.includes(job.category);

    const matchesLocation = (job: IJob) =>
      selectedLocations.length === 0 ||
      selectedLocations.includes(job.location);

    const matchesTitle = (job: IJob) =>
      searchFilter.title === "" ||
      job.title.toLowerCase().includes(searchFilter.title.toLowerCase());
    const matchesSearchLocation = (job: IJob) =>
      searchFilter.location === "" ||
      job.location.toLowerCase().includes(searchFilter.location.toLowerCase());

    const newFilterJobs = jobs
      .slice()
      .reverse()
      .filter(
        (job: IJob) =>
          matchesCategory(job) &&
          matchesLocation(job) &&
          matchesTitle(job) &&
          matchesSearchLocation(job)
      );

    setFilterJobs(newFilterJobs);
    setCurrentPage(1);
  }, [jobs, selectedCategories, selectedLocations, searchFilter]);

  return (
    <div className="container mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8 ">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-white px-4">
        {/* Search Filter from Hero Compoent */}

        {isSearched &&
          (searchFilter.title !== "" || searchFilter.location !== "") && (
            <>
              <h3 className="font-medium text-lg mb-4">Current Search</h3>
              <div className="flex gap-2 mb-4 text-gray-600">
                {searchFilter.title && (
                  <Badge
                    title={searchFilter.title}
                    image={assets.cross_icon}
                    onClick={() =>
                      setSearchFilter((prev) => ({ ...prev, title: "" }))
                    }
                  />
                )}
                {searchFilter.location && (
                  <Badge
                    title={searchFilter.location}
                    image={assets.cross_icon}
                    className="bg-red-50 border border-red-200"
                    onClick={() =>
                      setSearchFilter((prev) => ({ ...prev, location: "" }))
                    }
                  />
                )}
              </div>
            </>
          )}

        <Button
          label={showFilter ? "Close" : "Filters"}
          className="bg-transparent lg:hidden runded border border-gray-400 text-black w-fit"
          onClick={() => setShowFilter((prev) => !prev)}
        />

        {/* Category Filter */}
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className="font-medium text-lg py-4">Search by Categories</h4>
          <ul className="space-y-4 text-gray-600">
            {JobCategories.map((category, index) => (
              <li key={index + category} className="flex gap-3 items-center">
                <input
                  type="checkbox"
                  className="scale-125"
                  onChange={() => handleCategory(category)}
                  checked={selectedCategories.includes(category)}
                />
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Location Filter */}
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className="font-medium text-lg py-4">Search by Location</h4>
          <ul className="space-y-4 text-gray-600">
            {JobLocations.map((location, index) => (
              <li key={index + location} className="flex gap-3 items-center">
                <input
                  type="checkbox"
                  className="scale-125"
                  onChange={() => handleLocation(location)}
                  checked={selectedLocations.includes(location)}
                />
                {location}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Job Listing */}
      <section className="w-full  max-lg:px-4">
        <h3 className="text-3xl font-medium" id="job-list">
          Latest jobs
        </h3>
        <p className="font-light text-[#797484] mt-[5px]">
          Get your desired job from top companies
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {filterJobs
            .slice((currentPage - 1) * 6, currentPage * 6)
            .map((job: any, index: number) => (
              <Card
                key={index}
                jobId={job._id}
                image={assets.company_icon}
                className="mt-8"
                title={job.title}
                description={job.description}
                level={job.level}
                location={job.location}
              />
            ))}
        </div>

        {/* Pagination */}
        {filterJobs.length > 0 && (
          <div className="flex items-center justify-center mt-9 gap-2">
            <a href="#job-list">
              <ChevronLeftIcon
                onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
              />
            </a>
            {Array.from({ length: Math.ceil(filterJobs.length / 6) }).map(
              (_, index) => (
                <a href="#job-list" key={index}>
                  <Button
                    className={`bg-transparentflex items-center justify-center border border-gray-300 rounded ${
                      currentPage === index + 1
                        ? "bg-blue-100 text-blue-500"
                        : "text-gray-500"
                    }`}
                    label={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                  />
                </a>
              )
            )}
            <a href="#job-list">
              <ChevronRightIcon
                onClick={() =>
                  setCurrentPage(
                    Math.min(currentPage + 1, Math.ceil(filterJobs.length / 6))
                  )
                }
              />
            </a>
          </div>
        )}
      </section>
    </div>
  );
};

export default JobListing;
