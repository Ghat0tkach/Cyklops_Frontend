"use client";
import axios from "axios";

const LLAVA_API_URL = " "; //Your ngrok or hosted LLaVA model url here
const FASTAPI_API_URL = ""; //Your FastAPI Url Here
const github_repo = ``; //Your username/repo which you will work as storage bucket

export const GetSplitVideoUrls = async (formData) => {
  try {
    const response = await axios.post(
      `${FASTAPI_API_URL}/video/detect-scenes/`,
      formData,
      {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      }
    );
    console.log(response);
    const directory = response.data.output_directory;
    const frame_num = response.data.frame_count;
    const public_github_bucket_name = `https://raw.githubusercontent.com/${github_repo}/main/${directory}`;

    const imageUrls = [];

    for (let i = 0; i <= frame_num; i++) {
      const imageUrl = `${public_github_bucket_name}/frame_${i}.jpg`;
      imageUrls.push(imageUrl);
    }
    const responseFromLLaVA = await sendImageUrls(imageUrls);

    return responseFromLLaVA;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const sendImageUrls = async (imageUrls) => {
  try {
    const response = await axios.post(`${LLAVA_API_URL}/generate`, imageUrls);
    const generatedTexts = response.data.generated_texts;
    return generatedTexts;
  } catch (error) {
    // Handle errors (e.g., display an error message)
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const AskQuestion = async (context, question) => {
  try {
    const response = await axios.post(
      `${FASTAPI_API_URL}/chat/create_conversation`,
      {
        context: context,
        question: question,
      }
    );
    const answer = response.data.response;
    return answer;
  } catch (error) {
    // Handle errors (e.g., display an error message)
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
