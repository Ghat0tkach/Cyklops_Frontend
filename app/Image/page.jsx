"use client";
import React, { useEffect, useState } from "react";
import cyklops from "@/public/cyklops.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ConversationBox from "@/components/Conversation";
import { sendImageUrls } from "../api/GetSummary";
function Page() {
  const [imgFetch, setImg] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [showConversation, setShowConversation] = useState(false);
  const [response, setResponse] = useState(null);
  const handleUrlChange = (event) => {
    setImageUrl(event.target.value);
    setImg(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const imageUrls = [imageUrl]; // Convert the single URL to an array
    const responseFromNgrok = await sendImageUrls(imageUrls);
    setResponse(responseFromNgrok);
    setShowConversation(true);
  };
  return (
    <>
      <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit mb-10">
        Upload Your Image to Get Started &nbsp;
      </div>

      <div className="mt-20 p-10 z-10 w-full items-center justify-content font-mono text-sm lg:flex">
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Upload Image using URL</CardTitle>
            </CardHeader>
            <CardDescription className="mt-5 mb-10">
              <input
                type="text"
                placeholder="Paste URL Here"
                className="rounded-md ml-5 w-1/2 h-11 p-5  text-black "
                value={imageUrl}
                onChange={handleUrlChange}
              ></input>
            </CardDescription>
            <CardContent className="text-center flex items-center justify-center">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="Uploaded Image"
                  className="max-w-full max-h-72 rounded-md"
                />
              ) : (
                <ImageIcon height={100} width={100} />
              )}
            </CardContent>
            <CardFooter>
              {imgFetch ? (
                <Button variant="outline" onClick={handleSubmit}>
                  Lets Go{" "}
                </Button>
              ) : (
                <p>Upload Image to Get Started</p>
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
