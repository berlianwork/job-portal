import { twMerge } from "tailwind-merge";

const Badge = ({
  title,
  image,
  className,
  onClick,
}: {
  title: string;
  image?: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div>
      <span
        className={twMerge(
          `inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded text-xs font-medium text-[#8F8F8F]`,
          className
        )}
      >
        {title}
        {image && (
          <img
            onClick={onClick}
            src={image}
            className="cursor-pointer"
            alt={title}
          />
        )}
      </span>
    </div>
  );
};

export default Badge;
