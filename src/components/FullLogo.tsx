import Image from "next/image";
import logo from "@/public/images/logo-1.png";
import { cn } from "@/lib/utils";
import { Archivo } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"] });

export const FullLogo = () => {
  return (
    <div className={cn("flex items-end", archivo.className)}>
      <span className="text-neutral-950 dark:text-neutral-50 text-3xl">
        LinkHub
      </span>
      <Image alt="" src={logo} className="h-8 w-8 mb-1" />
    </div>
  );
};
