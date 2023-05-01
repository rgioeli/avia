"use client";

import { createAPostStore } from "@/zustand/createAPostStore";
import { BsArrow90DegLeft } from "react-icons/bs";
import {
  initial,
  animate,
  transition,
} from "@/lib/framer-motion/slideRightToLeft";
import { motion } from "framer-motion";
import { fetchPostApi } from "@/lib/fetch/fetchPostApi";
import { useEffect, useState } from "react";
import { notificationStore } from "@/zustand/notificationStore";

export default function CreateFormPost({ termId }: { termId: string }) {
  //state
  const [postVal, setPostVal] = useState<string>("");
  const [controller] = useState<AbortController>(new AbortController());
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [textVal, setTextVal] = useState<string>("");
  //zustand
  const { toggleCreateAPost, setToggleCreateAPost } = createAPostStore();
  const { notification, setNotification } = notificationStore();
  //functions
  const handleCloseWindow = () => {
    setToggleCreateAPost(false);
  };

  //useEffect
  useEffect(() => {
    return () => {
      if (controller) {
        controller.abort();
      }
    };
  }, [controller]);

  //submit form
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetchPostApi("/api/post/create-a-post", controller, {
      textVal,
      termId,
    });
    const { success, error } = await response.json();
    setLoading(false);
    if (success)
      return setNotification("Your post has been updated successfully!");
    if (error) return setError(error);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextVal(e.target.value);
  };

  return toggleCreateAPost ? (
    <div className="absolute top-0 right-0 w-screen h-screen bg-slate-700/50 flex justify-end overflow-hidden">
      <motion.div
        initial={initial}
        animate={animate}
        transition={transition}
        className="h-full w-1/2 bg-white shadow-md p-3"
      >
        <div
          onClick={handleCloseWindow}
          className="inline-block cursor-pointer"
        >
          <div className="flex space-x-3 items-center text-sm">
            <BsArrow90DegLeft />
            <p>Back to form 🏃🏽</p>
          </div>
        </div>
        <div className="py-3">
          <h1 className="text-lg font-medium">Write a post</h1>
        </div>
        {/* Input Start */}
        <form onSubmit={handleFormSubmit}>
          <textarea
            placeholder={`What would you like to say?`}
            cols={30}
            rows={10}
            className="w-full outline-none resize-none border-2 shadow-md p-3 mb-3"
            value={textVal}
            onChange={handleChange}
          ></textarea>
          <button
            className={`${
              loading ? "bg-slate-600" : "bg-highlight"
            } px-5 text-sm text-white rounded-md py-3`}
            type="submit"
            disabled={loading ? true : false}
          >
            Submit Post
          </button>
        </form>
      </motion.div>
    </div>
  ) : null;
}
