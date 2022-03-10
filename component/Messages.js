import react from "react";
import { message } from 'antd';


export const success = (msg) => {
  message.success(msg);
};

export const errorFunction = (msg) => {
  message.error(msg);
};
