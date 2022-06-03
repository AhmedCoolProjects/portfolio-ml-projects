import type { NextPage } from "next";
import Head from "next/head";
import { PageHeader } from "../../src/components";
import { Images } from "../../src/constants";

const Cartoonifying: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Stock Price Prediction | Jina ML</title>
      </Head>
      <div>
        <PageHeader
          image={Images.stock_price_prediction}
          title="Stock Price Prediction - version 1.0"
        />
        <div className=""></div>
      </div>
    </div>
  );
};

export default Cartoonifying;
