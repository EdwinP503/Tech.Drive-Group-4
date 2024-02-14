import Image from "next/image";
import Link from "next/link";
import { EditPopup } from "@/components/ui/edit-popup";
import TestData from "./testdata.json";
import { ImageUpload } from "@/components/ui/image-upload";


export default function Home() {
  return (
    <>
      <div className="text-center font-bold py-5">
        <h1>This is the Home Page</h1>
      </div>

      <div className="text-center">

        <a href="/admin" className="inline-block px-5 py-2">Admin Page</a>
        <a href="/exams" className="inline-block px-5 py-2">Exams Page</a>
        <EditPopup exam={TestData["exams"][0]} />
      </div>
    </>
      

    
  );
  }