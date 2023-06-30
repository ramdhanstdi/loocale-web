import Image from "next/image";
import { FC } from "react";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div>
      <div className="ml-10">
        <Image
          src={"/NavbarLogo.svg"}
          width={140}
          height={52}
          alt="Loocale Logo"
        />
      </div>
      <div className="flex justify-between gap-12 items-center pr-8">
        <div className="relative bg-[url('/bg-partner.png')] bg-cover bg-no-repeat flex justify-center px-[55px] py-[27px]">
          <div className="w-[200px] text-gray-900 font-bold text-[38px] ">
            Partner Loocale
          </div>
          <div className="absolute top-8 right-16">
            <Image
              src={"/check-verified.png"}
              width={50}
              height={50}
              alt="verified"
            />
          </div>
        </div>
        <div className="text-xs leading-normal font-light">
          Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
          condimentum ac, vestibulum eu nisl.
        </div>
      </div>
    </div>
  );
};

export { Header };
