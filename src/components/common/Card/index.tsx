import { twMerge } from "tailwind-merge";
import Badge from "../Badge";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const Card = ({
  title,
  location,
  level,
  jobId,
  description,
  className,
  image,
}: {
  title: string;
  location: string;
  level: string;
  jobId: string;
  description: string;
  image: string;
  className?: string;
}) => {
  const navigate = useNavigate();

  return (
    <div className={twMerge(`shadow-md p-6 w-full rounded`, className)}>
      <div className="flex justify-between items-center">
        <img src={image} className="max-w-32" alt="" />
      </div>
      <h3 className="mt-3 text-lg">{title}</h3>
      <div className="flex gap-3 mt-2">
        <Badge title={location} onClick={() => {}} />
        <Badge
          title={level}
          className="bg-red-50 border border-red-200"
          onClick={() => {}}
        />
      </div>
      <p
        className="text-sm font-light text-[#636363] mt-2 text-ellipsis"
        dangerouslySetInnerHTML={{ __html: description.slice(0, 120) + "..." }}
      ></p>
      <div className="flex gap-3 mt-4">
        <Button
          onClick={() => {
            navigate(`/apply-job/${jobId}`);
            scrollTo(0, 0);
          }}
          label="Apply now"
          className="w-fit text-sm"
        />
        <Button
          onClick={() => {
            navigate(`/apply-job/${jobId}`);
            scrollTo(0, 0);
          }}
          label="Learn now"
          className="w-fit text-sm bg-transparent text-[#838383] border border-[#CFCFCF]"
        />
      </div>
    </div>
  );
};

export default Card;
