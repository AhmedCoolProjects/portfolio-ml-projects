import { Container, IconButton, Paper } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { LayoutProps } from "../../../types";
import { Header } from "./Header";

export function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Ahmed Bargady Machine Learning & Data Science Applications in one place"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container maxWidth="lg">{children}</Container>;
    </div>
  );
}
