import type { NextPage } from "next";
import Head from "next/head";
import { PageHeader } from "../../src/components";
import { Images } from "../../src/constants";
import { axios2 } from "../../src/axios/http-commun";
import { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";

const Cartoonifying: NextPage = () => {
  const [data, setData] = useState({
    Gender: "",
    Married: "",
    Dependents: "",
    Education: "",
    Self_Employed: "",
    ApplicantIncome: "",
    CoapplicantIncome: "",
    LoanAmount: "",
    Loan_Amount_Term: "",
    Credit_History: "",
    Property_Area: "",
  });
  const [result, setResult] = useState({
    loan_pred: "",
    loan_proba: "",
  });
  const runPredictionFct = () => {
    axios2
      .post("/loan_prediction", {
        ...data,
      })
      .then((res) => {
        console.log(res.data);
        setResult(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Head>
        <title>Stock Price Prediction | Jina ML</title>
      </Head>
      <div>
        <PageHeader
          image={Images.stock_price_prediction}
          title="Jina Loan Prediction V-1.0"
        />
        <div className="flex space-y-4 flex-col items-center justify-center">
          {/* Form */}
          <Paper
            elevation={3}
            className="space-y-3 p-4 flex flex-col items-center w-full"
          >
            <FormControl fullWidth>
              <InputLabel id="gender_label">Gender</InputLabel>
              <Select
                labelId="gender_label"
                label="Gender"
                value={data.Gender}
                onChange={(e) => setData({ ...data, Gender: e.target.value })}
              >
                <MenuItem value="1">Male</MenuItem>
                <MenuItem value="0">Female</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="married_label">Married</InputLabel>
              <Select
                labelId="married_label"
                label="Married"
                value={data.Married}
                onChange={(e) => setData({ ...data, Married: e.target.value })}
              >
                <MenuItem value="1">Yes</MenuItem>
                <MenuItem value="0">No</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="dependents_label">Dependents</InputLabel>
              <Select
                labelId="dependents_label"
                label="Dependents"
                value={data.Dependents}
                onChange={(e) =>
                  setData({ ...data, Dependents: e.target.value })
                }
              >
                <MenuItem value="0">0</MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3+</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="education_label">Education</InputLabel>
              <Select
                labelId="education_label"
                label="Education"
                value={data.Education}
                onChange={(e) =>
                  setData({ ...data, Education: e.target.value })
                }
              >
                <MenuItem value="0">Graduate</MenuItem>
                <MenuItem value="1">Not Graduate</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="self_employed_label">Self Employed</InputLabel>
              <Select
                labelId="self_employed_label"
                label="Self Employed"
                value={data.Self_Employed}
                onChange={(e) =>
                  setData({ ...data, Self_Employed: e.target.value })
                }
              >
                <MenuItem value="1">Yes</MenuItem>
                <MenuItem value="0">No</MenuItem>
              </Select>
            </FormControl>
            <TextField
              margin="dense"
              id="ApplicantIncome"
              label="ApplicantIncome"
              type="text"
              fullWidth
              placeholder="0 - 81.000"
              variant="standard"
              value={data.ApplicantIncome}
              onChange={(e) =>
                setData({ ...data, ApplicantIncome: e.target.value })
              }
            />
            <TextField
              margin="dense"
              id="CoapplicantIncome"
              label="CoapplicantIncome"
              type="text"
              fullWidth
              placeholder="0 - 42.000"
              variant="standard"
              value={data.CoapplicantIncome}
              onChange={(e) =>
                setData({ ...data, CoapplicantIncome: e.target.value })
              }
            />
            <TextField
              margin="dense"
              id="LoanAmount"
              label="LoanAmount"
              type="text"
              fullWidth
              placeholder="9 - 700"
              variant="standard"
              value={data.LoanAmount}
              onChange={(e) => setData({ ...data, LoanAmount: e.target.value })}
            />
            <TextField
              margin="dense"
              id="Loan_Amount_Term"
              label="Loan Amount Term"
              type="text"
              fullWidth
              placeholder="6 - 500"
              variant="standard"
              value={data.Loan_Amount_Term}
              onChange={(e) =>
                setData({ ...data, Loan_Amount_Term: e.target.value })
              }
            />
            <FormControl fullWidth>
              <InputLabel id="Credit_History_label">Credit History</InputLabel>
              <Select
                labelId="Credit_History_label"
                label="Credit History"
                value={data.Credit_History}
                onChange={(e) =>
                  setData({ ...data, Credit_History: e.target.value })
                }
              >
                <MenuItem value="1">Yes</MenuItem>
                <MenuItem value="0">No</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="Property_Area_label">Property Area</InputLabel>
              <Select
                labelId="Property_Area_label"
                label="Property Area"
                value={data.Property_Area}
                onChange={(e) =>
                  setData({ ...data, Property_Area: e.target.value })
                }
              >
                <MenuItem value="1">Semiurban</MenuItem>
                <MenuItem value="2">Urban</MenuItem>
                <MenuItem value="0">Rural</MenuItem>
              </Select>
            </FormControl>
          </Paper>
          {/* Submit */}
          <Button onClick={runPredictionFct} variant="outlined">
            Predict Loan
          </Button>
          {/* Result */}
          {result.loan_pred ? (
            <Paper elevation={3} className="p-4">
              <h1>
                Loan Status:
                <span className="ml-3 font-semibold text-base">
                  {result.loan_pred}
                </span>
              </h1>
              <h1>
                With Probability:
                <span className="ml-3 font-semibold text-base">
                  {result.loan_proba}
                </span>
              </h1>
            </Paper>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Cartoonifying;
