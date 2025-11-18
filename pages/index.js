import Image from "next/image";
import localFont from "next/font/local";
import KycForm from "@/components/FormKyc";


export default function Home() {
  return (
    <div className="bg-gray-200 p-12">
      <KycForm/>
    </div>
  );
}
