import type { FC, ReactNode } from "react";

interface props {
  children: ReactNode[];
}

const WhatWeDoSection: FC<props> = ({ children }) => {
  return <div className='flex flex-row justify-between'>{children}</div>;
};

export default WhatWeDoSection;