"use client";
import Image from "next/image";
import { useState } from "react";

import {
  FaEnvelope,
  FaInstagram,
  FaPhone,
  FaSpotify,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { SiApplepodcasts } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="top">
        <div className="left">
          <Image
            src="/eyes.png"
            alt={"illustratsioon silmast"}
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="right">
          <div className="contact">
            <div className="phone">
              <a href="tel:+37251234567">
                51234567
                <FaPhone />
              </a>
            </div>
            <div className="email">
              <a href="mailto:info@silmaring.ee">
                info@silmaring.ee
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="text">
            <h2>Avarda oma silmaringi!</h2>
            <h4>Aitäh, et kuulad ja toetad meie tegemisi</h4>
          </div>

          <div className="trademark"></div>
        </div>
      </div>
      <div className="bottom">
        <div className="socials">
          <FaInstagram />
          <FaTiktok />
          <FaSpotify />
          <FaYoutube />
          <SiApplepodcasts />
        </div>
        <p>{`© ${year} Silmaring podcast`}</p>
        <div className="trademark"></div>
      </div>
    </>
  );
}
