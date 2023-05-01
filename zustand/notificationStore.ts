import { create } from "zustand";

interface NotificationTypes {
  showNotification: boolean;
  notification: string | null;
  setNotification: (message: string | null) => void;
  setShowNotification: (toggle: boolean) => void;
}

const timeoutNotification = () => {};

export const notificationStore = create<NotificationTypes>((set) => ({
  showNotification: false,
  notification: null,
  setNotification: (message) =>
    set(() => ({ notification: message, showNotification: true })),
  setShowNotification: (toggle) => set(() => ({ showNotification: toggle })),
}));
