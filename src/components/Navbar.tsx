"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo">
        {/*         <Image src={"/logo.png"} alt={"logo"} width={70} height={70} /> */}
        <h1 className="title">Silmaring</h1>
      </div>
      <div className="link">
        <Link href="/#episoodid">Episoodid</Link>
        <Link href="/#toetajad">toetajad</Link>
        <Link href="/#pood">Pood</Link>
        <Link href="/#kkk">KKK</Link>
        <Link href="/#kontakt">kontakt</Link>
        <Link href="/#kodu">
          <FaArrowUp />
        </Link>
      </div>
    </div>
  );
}
