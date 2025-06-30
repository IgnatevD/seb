import {FaFacebook, FaInstagram, FaTelegram, FaYoutube} from "react-icons/fa";
import type {IconType} from "react-icons";

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
    {name: "Telegram", url: "https://t.me/SEB_faculty_khai", icon: FaTelegram},
    {name: "Instagram", url: "https://www.instagram.com/six.fac", icon: FaInstagram},
    {name: "Youtube", url: "https://www.youtube.com/@sebfacultykhai", icon: FaYoutube},
    {name: "Facebook", url: "https://www.facebook.com/groups/1234970054055705", icon: FaFacebook},
  ],
};
