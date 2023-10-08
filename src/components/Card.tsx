import { ReactNode } from "react";

const Card = ({
  component,
  title,
  description,
  button,
}: {
  component: ReactNode;
  title: string;
  description: string;
  button?: ReactNode;
}) => {
  return (
    <div className="p-4 border rounded-md flex items-center flex-col w-full gap-4 text-slate-500 ">
      <div className="flex items-center justify-center w-full min-h-[20vh]">
        {component}
      </div>
      <hr className="border border-slate-500 w-full" />
      <div className="flex flex-col w-full items-start justify-start gap-4">
        <h3 className="font-bold ">{title}</h3>
        <p>{description}</p>
        {button}
      </div>
    </div>
  );
};

export default Card;
