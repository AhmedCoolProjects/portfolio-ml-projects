import { Button, Paper } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { ProjectProps } from "../../../types";

export function ProjectCard(props: ProjectProps) {
  const { title, description, image, link, version } = props;
  return (
    <Paper elevation={3}>
      <div className="relative w-full h-[250px]">
        <Image src={image} alt={title} layout="fill" objectFit="contain" />
      </div>
      <div className="p-3 space-y-3 items-center flex flex-col">
        <h1 className="text-2xl sm:text-xl md:text-2xl font-semibold ">
          {title}
        </h1>
        {link ? (
          <Link href={link} passHref>
            <Button fullWidth variant="contained" color="primary">
              Demo
            </Button>
          </Link>
        ) : (
          <Button fullWidth variant="contained" color="primary">
            Demo
          </Button>
        )}
      </div>
    </Paper>
  );
}
