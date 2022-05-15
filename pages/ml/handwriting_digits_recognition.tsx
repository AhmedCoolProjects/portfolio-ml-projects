import { Grid } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { PageHeader, PaperDisplay } from "../../src/components";
import { DrawingPaperCard } from "../../src/components";
import { Images } from "../../src/constants";

const HandWringDigits: NextPage = () => {
  const [char, setChar] = useState<string>("");
  return (
    <div>
      <Head>
        <title>Image Cartoonifying | Jina ML</title>
      </Head>
      <div>
        <div className="mb-2">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
              <DrawingPaperCard />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <PaperDisplay char={char} />
            </Grid>
          </Grid>
        </div>
        <PageHeader
          image={Images.handwriting_digits_recognition}
          title="Handwriting Digits Recognition"
        />
      </div>
    </div>
  );
};

export default HandWringDigits;
