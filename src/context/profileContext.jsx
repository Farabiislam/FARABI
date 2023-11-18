import { createContext, useState } from "react";

export const ProfileContext = createContext();

export const ProfileContextProvider = ({ children }) => {
  const [ownProfile, setOwnProfile] = useState(false);
  const [notification, setNotification] = useState(false);
  const [chat, setChat] = useState(false);
  const [menu, setMenu] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [seeChat, setSeeChat] = useState(false);

  const editModalToggle = () => {
    setEditModal(!editModal);
  };

  const shareModalToggle = () => {
    setShareModal(!shareModal);
  };

  const menuToggle = () => {
    setMenu(!menu);
    if (seeChat) {
      setSeeChat(!seeChat);
    }
    if (ownProfile) {
      setOwnProfile(!ownProfile);
    }
    if (notification) {
      setNotification(!notification);
    }
    if (chat) {
      setChat(!chat);
    }
  };

  const chatToggle = () => {
    if (seeChat) {
      setSeeChat(!seeChat);
    }
    setChat(!chat);
    if (menu) {
      setMenu(!menu);
    }
    if (ownProfile) {
      setOwnProfile(!ownProfile);
    }
    if (notification) {
      setNotification(!notification);
    }
  };

  const seeChatToggle = () => {
    setSeeChat(!seeChat);
    if (chat) {
      setChat(!chat);
    }
  };

  const profileToggle = () => {
    setOwnProfile(!ownProfile);
    if (seeChat) {
      setSeeChat(!seeChat);
    }
    if (menu) {
      setMenu(!menu);
    }
    if (notification) {
      setNotification(!notification);
    }
    if (chat) {
      setChat(!chat);
    }
  };

  const notificationToggle = () => {
    setNotification(!notification);
    if (seeChat) {
      setSeeChat(!seeChat);
    }
    if (menu) {
      setMenu(!menu);
    }
    if (ownProfile) {
      setOwnProfile(!ownProfile);
    }
    if (chat) {
      setChat(!chat);
    }
  };

  const homeToggle = () => {
    if (seeChat) {
      setSeeChat(!seeChat);
    }
    if (editModal) {
      setEditModal(!editModal);
    }
    if (shareModal) {
      setShareModal(!shareModal);
    }
    if (ownProfile) {
      setOwnProfile(!ownProfile);
    }
    if (notification) {
      setNotification(!notification);
    }
    if (chat) {
      setChat(!chat);
    }
    if (menu) {
      setMenu(!menu);
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        chat,
        chatToggle,
        profileToggle,
        ownProfile,
        notification,
        notificationToggle,
        menu,
        menuToggle,
        shareModal,
        shareModalToggle,
        homeToggle,
        editModal,
        editModalToggle,
        seeChatToggle,
        seeChat,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
