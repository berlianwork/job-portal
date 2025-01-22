import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";
import Loading from "../../../components/common/Loading/Loading";
import {
  BriefcaseBusinessIcon,
  HandCoinsIcon,
  MapPinIcon,
  UserIcon,
} from "lucide-react";
import { IJob } from "../../App/interface/job.interface";
import { abbreviateNumber } from "js-abbreviation-number";
import Button from "../../../components/common/Button";
import moment from "moment";

const ApplyJob = () => {
  const { id } = useParams();
  const [jobData, setJobData] = useState<IJob | null>(null);
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("AppContext must be used within an AppContextProvider");
  }

  const { jobs } = context;

  const fetchJob = useCallback(async () => {
    const data = jobs.filter((job: any) => job._id === id);
    if (data.length !== 0) {
      setJobData(data[0]);
      console.log(data[0]);
    }
  }, [id, jobs]);

  useEffect(() => {
    if (jobs.length > 0) {
      fetchJob();
    }
  }, [id, jobs]);

  return jobData ? (
    <>
      <div className="min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto">
        <div className="bg-white text-black rounded-lg w-full ">
          <div className="flex justify-center md:justify-between flex-wrap gap-8 px-14 py-20 mb-6 bg-sky-50 border border-sky-400 rounded-xl">
            <div className="flex flex-col md:flex-row items-center ">
              <img
                className="h-24 bg-white rounded-lg p-4 mr-4 max-md:mb-4 border"
                src={jobData.companyId.image}
                alt="logo"
              />
              <div className="text-center md:text-left text-neutral-700">
                <h1 className="text-2xl sm:text-4xl font-medium">
                  {jobData.title}
                </h1>
                <div className="flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-600 mt-2">
                  <span className="flex items-center gap-1 ">
                    <BriefcaseBusinessIcon size={17} />
                    {jobData.companyId.name}
                  </span>
                  <span className="flex items-center gap-1 ">
                    <MapPinIcon size={17} />
                    {jobData.location}
                  </span>
                  <span className="flex items-center gap-1 ">
                    <UserIcon size={17} />
                    {jobData.level}
                  </span>
                  <span className="flex items-center gap-1 ">
                    <HandCoinsIcon size={17} />
                    CTC: {abbreviateNumber(jobData.salary, 0)}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center text-end text-sm max-md:mx-auto max-md:text-center">
              <Button label={"Apply Now"} className="w-fit" />
              <p className="mt-1 text-gray-600">
                Posted {moment(jobData.date).fromNow()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default ApplyJob;
