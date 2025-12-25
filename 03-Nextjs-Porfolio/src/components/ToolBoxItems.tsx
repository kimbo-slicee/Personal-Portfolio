import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";
import { Fragment } from "react";

export const ToolBoxItems = ({
  items,
  className,
  itemsWrapperClassname,
}: {
  items: { title: string; iconType: React.ElementType }[];
  className?: string;
  itemsWrapperClassname?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none gap-6 py-0.5 pr-6",
          itemsWrapperClassname
        )}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {items.map(({ title, iconType }) => (
              <div
                key={title}
                className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
              >
                <TechIcon component={iconType} />
                <span className="font-semibold">{title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
