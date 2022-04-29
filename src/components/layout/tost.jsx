import React, { Component } from "react";
import { toast } from "react-toastify";

export function ToastMessage(message, type) {
  const theme = "colored";
  const autoClose = 3000;
  const position = toast.POSITION.BOTTOM_RIGHT;
  const icon = true;

  switch (type) {
    case "success":
      toast.success(message, {
        position: position,
        icon: icon,
        theme: theme,
        autoClose: autoClose
      });
      break;

    case "info":
      toast.info(message, {
        position: position,
        icon: icon,
        theme: theme,
        autoClose: autoClose
      });
      break;

    case "warning":
      toast.warning(message, {
        position: position,
        icon: icon,
        theme: theme,
        autoClose: autoClose
      });
      break;

    case "error":
      toast.error(message, {
        position: position,
        icon: icon,
        theme: theme,
        autoClose: autoClose
      });
      break;

    default:
      toast(message, {
        position: position,
        icon: icon,
        theme: "dark",
        autoClose: autoClose
      });
      break;
  }
}
