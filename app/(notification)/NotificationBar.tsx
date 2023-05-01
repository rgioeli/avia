"use client";

import { motion, AnimatePresence } from "framer-motion";
import { notificationStore } from "@/zustand/notificationStore";
import { createAPostStore } from "@/zustand/createAPostStore";
import { useEffect } from "react";

export default function NotificationBar() {
  const { setShowNotification, showNotification } = notificationStore();
  const { setToggleCreateAPost } = createAPostStore();

  useEffect(() => {
    if (showNotification) {
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    }

    return () => {
      setToggleCreateAPost(false);
    };
  }, [showNotification]);

  return (
    <AnimatePresence>
      {showNotification ? (
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, bounce: false, ease: "easeIn" }}
          exit={{ opacity: 0, y: 200 }}
          className="overflow-hidden fixed bottom-0 left-0 w-screen p-3 flex justify-center items-center bg-highlight text-white text-lg font-medium"
        >
          <h1>Your post has been submitted!</h1>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
