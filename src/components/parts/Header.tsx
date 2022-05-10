import { IconButton, Paper } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <Paper
      elevation={2}
      className="flex flex-row items-center mb-6 rounded-none
    py-2 px-8 sticky top-0 z-10
    "
    >
      <Link href="/" passHref>
        <IconButton>
          <Image
            src="/favicon.ico"
            alt="Jina ML"
            width={45}
            height={45}
            className="rounded-full"
            objectFit="contain"
          />
        </IconButton>
      </Link>
    </Paper>
  );
}
