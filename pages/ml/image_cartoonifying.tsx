// @ts-nocheck

import { Button, Grid, Input } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { PageHeader } from "../../src/components";
import { Images } from "../../src/constants";
import { useState } from "react";
import Image from "next/image";
import http from "../../src/axios/http-commun";

const Cartoonifying: NextPage = () => {
  const [uploadedFile, setUploadedFile] = useState<string | Blob>("");
  const [imageFile, setImageFile] = useState<string | null>(null);
  const [cartoonifiedImage, setCartoonifiedImage] = useState<string | null>(
    null
  );
  const cartoonifyFct = () => {
    let formData = new FormData();
    formData.append("uploaded_file", uploadedFile);
    http
      .post("/api/ml/image_cartoonifying", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setCartoonifiedImage(
          "https://jina-ml.herokuapp.com/api/ml/files/?filename=" + res.data
        );
      })
      .catch((err) => {
        console.log(imageFile);
        console.log(err);
      });
  };

  return (
    <div>
      <Head>
        <title>Image Cartoonifying | Jina ML</title>
      </Head>
      <div>
        <PageHeader
          image={Images.image_cartoonifying}
          title="Image Cartoonifying - version 1.0"
        />
        <div className="bg-gray-400 w-full h-[1300px] md:h-[650px]">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={6}>
              <div className="w-full h-[40px] relative items-end justify-center flex flex-col">
                <Input
                  type="file"
                  onChange={(e) => {
                    setImageFile(URL.createObjectURL(e.target.files[0]));
                    setUploadedFile(e.target.files[0]);
                  }}
                />
              </div>
              {imageFile ? (
                <div
                  className="relative w-full
                h-[600px]
                "
                >
                  <Image
                    src={imageFile}
                    objectFit="contain"
                    layout="fill"
                    alt="Image Preview"
                  />
                </div>
              ) : null}
            </Grid>
            <Grid item sm={12} xs={12} md={6}>
              <div className="w-full h-[40px] relative items-start justify-center flex flex-col">
                <Button
                  disabled={!uploadedFile}
                  variant="contained"
                  color="primary"
                  onClick={cartoonifyFct}
                >
                  Cartoonify
                </Button>
              </div>
              {cartoonifiedImage ? (
                <div
                  className="relative w-full
                h-[600px]
                "
                >
                  <Image
                    src={cartoonifiedImage}
                    objectFit="contain"
                    layout="fill"
                    alt="Image Preview"
                  />
                </div>
              ) : null}
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Cartoonifying;
