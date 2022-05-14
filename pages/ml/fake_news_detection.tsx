import { Grid } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { PageHeader, ProjectVersionCard } from "../../src/components";
import { FakeNewsDetectionVersionsData, Images } from "../../src/constants";

const FakeNewsDetection: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Fake News Detection | Jina ML</title>
      </Head>
      <div>
        <PageHeader
          image={Images.fake_news_detection}
          title="Fake News Detection"
        />
        <Grid container spacing={3}>
          {FakeNewsDetectionVersionsData.map((version) => (
            <Grid item xs={12} sm={6} md={6} key={version.version}>
              <ProjectVersionCard {...version} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default FakeNewsDetection;
