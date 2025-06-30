
import { FaTelegram, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import type { IconType } from "react-icons";

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

export interface FooterInfo {
  address: string;
  phone: string;
  email: string;
  socialTitle: string;
  socials: SocialLink[];
}

export const footerInfo: FooterInfo = {
  address: "61070, Україна, м. Харків, вул. Вадима Манька 17, імпульсний корпус Національного аерокосмічного університету \"ХАІ\"",
  phone: "(066) 060-33-75",
  email: "seb_faculty@khai.edu",
  socialTitle: "Ми у соціальних мережах:",
  socials: [
    { name: "Telegram", url: "https://t.me/yourchannel", icon: FaTelegram },
    { name: "Instagram", url: "https://instagram.com/yourprofile", icon: FaInstagram },
    { name: "Youtube", url: "https://youtube.com/yourchannel", icon: FaYoutube },
    { name: "Facebook", url: "https://facebook.com/yourpage", icon: FaFacebook },
  ],
};
