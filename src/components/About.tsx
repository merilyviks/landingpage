import Image from "next/image";
import { FaInstagram, FaSpotify, FaTiktok, FaYoutube } from "react-icons/fa";
import { SiApplepodcasts } from "react-icons/si";

export default function About() {
  return (
    <div className="about" id="minust">
      <div className="left">
        <h2>
          Taskuhäälingu<br />
          Silmring räägib sellest...
        </h2>
        <p>
          ...mis elus päriselt on oluline. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed pharetra sed tellus quis bibendum.
          Proin vel tempus dolor. Donec placerat imperdiet justo non posuere.
          Aliquam sodales consequat leo, id dapibus nunc luctus ut. Integer
          sollicitudin turpis at velit tincidunt, eget lobortis ante
          consectetur. Nulla facilisi. Nunc in efficitur mi. Suspendisse
          potenti. In hac habitasse platea dictumst. Ut commodo magna a risus
          feugiat posuere. Fusce euismod convallis lacus at viverra. Phasellus
          nec ullamcorper mi, et sagittis elit.
        </p>
      </div>

      <div className="right">
        <Image
          src="/endast.png"
          alt={"illustratsioon silmast"}
          width={700}
          height={700}
          priority
        />
      </div>
    </div>
  );
}
