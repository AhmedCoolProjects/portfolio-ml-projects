import { ProjectProps, ProjectVersionsData } from "../../types";
import { Images } from "./images";

export const projectsData: ProjectProps[] = [
  {
    title: "Image Cartoonifying",
    description:
      "A web application that allows users to upload an image and get a cartoonized version of the image.",
    image: Images.image_cartoonifying,
    link: "/ml/image_cartoonifying",
    version: "1.0.0",
  },
  {
    title: "Handwriting Digits Recognition",
    description:
      "A web application that understand the handwritten digits and recognize the digits.",
    image: Images.handwriting_digits_recognition,
    // link: "/ml/handwriting_digits_recognition",
    link: "",
  },
  {
    title: "Stock Price Prediction",
    description: "",
    image: Images.stock_price_prediction,
    // link: "/ml/stock_price_prediction",
    link: "",
  },
  {
    title: "Fake News Detection",
    description: "",
    image: Images.fake_news_detection,
    link: "/ml/fake_news_detection",
  },
  {
    title: "Color Detection",
    description: "",
    image: Images.color_detection,
    // link: "/ml/color_detection",
    link: "",
  },
  {
    title: "Wearing Mask Detection",
    description: "",
    image: Images.mask_detection,
    // link: "/ml/mask_detection",
    link: "",
  },
  {
    title: "Sign Language Recognition",
    description: "",
    image: Images.sign_language,
    // link: "/ml/sign_language",
    link: "",
  },
  {
    title: "Traffic Sign Recognition",
    description: "",
    image: Images.traffic_sign,
    // link: "/ml/traffic_sign",
    link: "",
  },
  {
    title: "Speech Emotion Recognition",
    description: "",
    image: Images.speech_emotion,
    // link: "/ml/speech_emotion",
    link: "",
  },
  {
    title: "Breast Cancer Detection",
    description: "",
    image: Images.breast_cancer,
    // link: "/ml/breast_cancer",
    link: "",
  },
  {
    title: "Handwriting Chars Recognition",
    description: "",
    image: Images.handwriting_chars_recognition,
    // link: "/ml/handwriting_chars_recognition",
    link: "",
  },
];

export const FakeNewsDetectionVersionsData: ProjectVersionsData[] = [
  {
    version: "1.0.0",
    description:
      "This version is based on a Passive Aggressive Classifier and TfidfVectorizer.",
    link: "https://blog.ahmedbargady.me/blog/2022/fake-news-detection",
    title: "Fake News Detection",
  },
];
