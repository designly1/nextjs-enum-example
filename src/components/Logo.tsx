import React from "react";
import Image from "next/image";

import logo from "@/assets/svg/designly-logo-trans.svg";

const DEFAULT_WIDTH = 300;
const DEFAULT_HEIGHT = 101;

interface Props {
  width?: number;
  className?: string;
}

export default function Logo(props: Props) {
  const { width = DEFAULT_WIDTH, className } = props;

  const height = (width / DEFAULT_WIDTH) * DEFAULT_HEIGHT;

  return (
    <Image
      src={logo}
      alt="Designly"
      width={width}
      height={height}
      className={className}
    />
  );
}
