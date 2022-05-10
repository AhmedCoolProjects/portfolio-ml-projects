import Image from "next/image";
import { PageHeaderProps } from "../../../types";

export function PageHeader(props: PageHeaderProps) {
  const { title, image } = props;
  return (
    <div className="flex mb-8 flex-col items-center justify-center">
      <Image
        src={image}
        width={200}
        height={200}
        alt={title}
        className="rounded-full"
        objectFit="cover"
      />
      <h1 className="text-2xl font-bold text-center">{title}</h1>
    </div>
  );
}
