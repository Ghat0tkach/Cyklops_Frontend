"use client";
import React, { useEffect, useState, useRef } from "react";
import { RingLoader } from "react-spinners";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VideoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ConversationBox from "@/components/Conversation";
import { GetSplitVideoUrls, sendImageUrls } from "../api/GetSummary";
function Page() {
  const [videoFetch, setVideo] = useState(false);
  const [videoFile, setVideoFile] = useState(null);
  const [showConversation, setShowConversation] = useState(false);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoFile(file);
      setVideo(true);
    }
  };

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    if (videoFile) {
      const formData = new FormData();
      formData.append("video", videoFile);
      const responseFromNgrok = await GetSplitVideoUrls(formData);
      setResponse(responseFromNgrok);
      setShowConversation(true);
      setLoading(false);
    }
  };
  return (
    <>
      <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit mb-10">
        Upload Your Video to Get Started &nbsp;
      </div>

      <div className="mt-20 p-10 z-10 w-full items-center justify-content font-mono text-sm lg:flex">
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Upload Video</CardTitle>
            </CardHeader>
            <CardDescription className="mt-5 mb-10 text-center">
              <input
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                className="hidden"
                id="videoInput"
                ref={fileInputRef}
              />
              <label htmlFor="videoInput" className="cursor-pointer">
                <p>Upload Video to Get Started</p>
              </label>
            </CardDescription>
            <CardContent className="text-center flex items-center justify-center">
              {videoFile ? (
                <video
                  controls
                  className="max-w-full max-h-72 rounded-md"
                  src={URL.createObjectURL(videoFile)}
                />
              ) : (
                <VideoIcon
                  height={150}
                  width={150}
                  className="border-[1px] p-4 cursor-pointer"
                  onClick={() => {
                    fileInputRef.current.click();
                  }}
                />
              )}
            </CardContent>
            <CardFooter>
              {videoFetch ? (
                loading ? (
                  <div>
                    <RingLoader color="white" />
                    <p>Analysing video and preparing detailed summary</p>
                  </div>
                ) : (
                  <Button variant="outline" onClick={handleSubmit}>
                    Lets Go{" "}
                  </Button>
                )
              ) : (
                <p className="text-center ml-[14rem]">
                  Drag and Drop or Click on The Icon
                </p>
              )}
            </CardFooter>
          </Card>
        </div>
        {showConversation ? (
          <div className="w-full lg:w-1/2 lg:ml-10">
            {/* Add your conversation box component here */}
            <div className="bg-slate-300 p-4 rounded-lg">
              {/* Your conversation box content goes here */}
              <ConversationBox response={response} />
            </div>
          </div>
        ) : null}
      </div>
      <div className="fixed left-0 bottom-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit mb-10">
        I make AI do All my work🤝🙄&nbsp;
      </div>
    </>
  );
}

export default Page;
