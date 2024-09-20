import Image from "next/image";
import logo from "@/public/images/logo-1.png";
import { cn } from "@/lib/utils";
import { Archivo } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"] });

export default function FullLogo() {
  return (
    <div className={cn("flex items-end", archivo.className)}>
      <span className="text-2xl">LinkHub</span>
      <Image alt="" src={logo} className="h-8 w-8" />
    </div>
  );
}
