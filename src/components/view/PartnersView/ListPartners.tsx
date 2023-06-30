import Image from "next/image";
import { FC } from "react";
import { PartnersInterface } from "./interfaces";
import Instagram from "@icons/instagram_colored_icon.svg";
import WhatsApp from "@icons/whatsapp_colored_icon.svg";
import Link from "next/link";
import Location from "@icons/location_pin_icon.svg";

interface ListPartnersProps {
  partners: PartnersInterface;
  category: string;
  seeAllClick: (value: string) => void;
}

const ListPartners: FC<ListPartnersProps> = ({
  partners,
  category,
  seeAllClick,
}) => {
  return (
    <>
      <div className="text-lg font-bold mt-8 mb-2">
        {partners.category || "Lainnya"}
      </div>
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6">
        {partners.data.map((data, index) => {
          const replaceFile = data?.images?.replace(
            "file/d/",
            "uc?export=view&id="
          );

          const imageUrl = replaceFile?.replace("/view?usp=drive_link", "");
          const urlWhatApp = `https://wa.me/62${data?.whatsapp?.slice(
            0
          )}?text=Halo%20${
            data.name
          },%20saya%20dapat%20info%20dari%20@loocale.id%20dan%20punya%20pertanyaan`;

          const urlInstagram = data?.instagram?.includes("https://")
            ? data.instagram
            : "https://" + data.instagram;
          return (
            <div
              className="col-span-4 shadow-md rounded-2xl flex-col items-center text-center p-[18px] pb-7"
              key={data.instagram}
            >
              <Image
                src={imageUrl}
                className="rounded-full"
                width={60}
                height={60}
                alt="partners"
              />
              <div className="text-primary-800 text-xs font-bold mt-3">
                {data.name}
              </div>
              <div className="text-primary-800 text-xs my-1 flex items-center gap-1 my-2 justify-center">
                <Location /> {data.lokasi}, {data.provinsi}
              </div>
              <div className="flex gap-1 justify-center">
                {data.servis1 && (
                  <div className="border-[0.5px] px-2 py-1 text-[9px] font-light border-primary-800 rounded-2xl">
                    {data.servis1}
                  </div>
                )}
                {data.servis2 && (
                  <div className="border-[0.5px] px-2 py-1 text-[9px] font-light border-primary-800 rounded-2xl">
                    {data.servis2}
                  </div>
                )}
                {data.servis3 && (
                  <div className="border-[0.5px] px-2 py-1 text-[9px] font-light border-primary-800 rounded-2xl">
                    {data.servis3}
                  </div>
                )}
              </div>
              <div className="flex gap-1 justify-center mt-3">
                {data.whatsapp && (
                  <Link href={urlWhatApp} target="_blank">
                    <div className="h-6 w-6">
                      <WhatsApp className="h-6 w-6" />
                    </div>
                  </Link>
                )}
                {data.instagram && (
                  <Link href={urlInstagram} target="_blank">
                    <Instagram className="h-6 w-6" />
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {partners.totalCount > 3 && !category && (
        <div
          className="text-xs font-light underline text-right mt-3"
          onClick={() => seeAllClick(partners.category)}
        >
          Lihat lebih banyak
        </div>
      )}
    </>
  );
};

export { ListPartners };
