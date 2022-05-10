import { Grid } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { ProjectCard } from "../src/components";
import { projectsData } from "../src/constants";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jina ML | Ahmed Bargady</title>
      </Head>
      <div>
        <Grid container spacing={3}>
          {projectsData.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.title}>
              <ProjectCard
                key={project.title}
                image={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Home;
