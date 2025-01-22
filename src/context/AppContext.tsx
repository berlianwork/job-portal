import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";
import { IJob } from "../modules/App/interface/job.interface";

interface AppContextType {
  searchFilter: {
    title: string;
    location: string;
  };
  setSearchFilter: React.Dispatch<
    React.SetStateAction<{ title: string; location: string }>
  >;
  jobs: IJob[];
  isSearched: boolean;
  setIsSearched: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
export const AppContextProvider = (props: any) => {
  const [searchFilter, setSearchFilter] = useState({
    title: "",
    location: "",
  });

  const [isSearched, setIsSearched] = useState(false);
  const [jobs, setJobs] = useState<any>([]);

  // Function to fetch job data
  const fetchJobs = async () => {
    setJobs(jobsData);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const value = {
    searchFilter,
    isSearched,
    setSearchFilter,
    setIsSearched,
    jobs,
    setJobs,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
