import { Link } from "react-router-dom";
import { assets } from "../../../assets/assets";
import Button from "../Button";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div className="shadow py-4 mb-10">
      <div className="container mx-auto flex justify-between items-center px-3 2xl:px-20 overflow-hidden">
        <img src={assets.logo} alt="insider-logo" />
        {user ? (
          <div className="flex  items-center gap-3">
            <Link to={"/applications"}>Applied Jobs</Link>
            <p>|</p>
            <p className="max-sm:hidden">
              Hi, {user.firstName} {user.lastName}
            </p>
            <UserButton />
          </div>
        ) : (
          <div className="flex  max-sm:text-xs items-center">
            <Button
              label="Recruiter Login"
              className="bg-transparent text-[#545454] w-fit"
            />
            <Button
              label="Login"
              onClick={openSignIn}
              className="md:w-[150px] w-fit rounded-[50px] "
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
