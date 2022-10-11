import React from "react";
import Image from "next/image";
import InstagramIcon from "@icons/instagram_icon.svg";
import WhatsAppIcon from "@icons/whatsapp_icon.svg";
import MailIcon from "@icons/mail_icon.svg";

const FOOTER_MENU = [
  {
    title: "Tentang",
    children: [
      {
        subtitle: "Loocale",
        href: "#",
      },
      {
        subtitle: "Blog",
        href: "#",
      },
    ],
  },
  {
    title: "Fitur",
    children: [
      {
        subtitle: "Discover",
        href: "#",
      },
      {
        subtitle: "Share",
        href: "#",
      },
      {
        subtitle: "Connect",
        href: "#",
      },
    ],
  },
  {
    title: "Social",
    children: [
      {
        subtitle: "Instagram",
        href: "#",
      },
      {
        subtitle: "Email",
        href: "#",
      },
      {
        subtitle: "Whatsapp",
        href: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="pt-6 pl-4 sm:pt-11 sm:pr-16 sm:pl-14 sm:pb-16 flex flex-col sm:flex-row max-w-[1280px] mx-auto justify-between">
      <div className="flex flex-col items-start sm:items-center mb-5 sm:mb-0">
        <Image
          src="/loocale_vertical_logo.png"
          alt="Loocale Logo"
          width={135}
          height={110}
          className="mb-4"
        />
        <div className="flex justify-center items-center gap-3 ml-6 sm:ml-0">
          <Image src={InstagramIcon} alt="Instagram" width={18} height={18} />
          <Image src={WhatsAppIcon} alt="WhatsApp" width={20} height={20} />
          <Image src={MailIcon} alt="Email" width={24} height={16} />
        </div>
      </div>
      <div className="sm:flex gap-8 hidden">
        {FOOTER_MENU.map((menu) => (
          <div className="flex flex-col gap-1" key={menu.title}>
            <p className="font-bold">{menu.title}</p>
            {menu.children.map((child) => (
              <a href={child.href} key={child.subtitle}>
                {child.subtitle}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-1 max-w-[210px] mb-[95px] sm:mb-0">
        <p className="font-bold">Loocale Indonesia</p>
        <p>
          Jl. H. Sidin 1 No. 23 Duren Sawit, Jakarta Timur +62 811 1722 233
          (Adel)
        </p>
      </div>
			<div className="sm:flex flex-col gap-1 max-w-[210px] hidden">
				<p className="font-bold">Download Loocale</p>
				<Image src='/google-download.svg' alt='Download from google play store' width={163} height={48}></Image>
			</div>
    </div>
  );
};

export default Footer;
