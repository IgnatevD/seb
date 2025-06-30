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
export declare const footerInfo: FooterInfo;
