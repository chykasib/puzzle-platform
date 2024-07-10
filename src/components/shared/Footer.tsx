import brandLogo from "@/assets/logo.png";
import Image from "next/image";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/instagram";
import "react-social-icons/twitter";
import "react-social-icons/facebook";
const Footer = () => {
  return (
    <footer className="footer footer-center p-16 bg-base-200 text-base-content rounded">
      <div>
        <div className="flex items-center">
          <Image src={brandLogo} width={60} height={60} alt="brand logo" />
          <p className="text-3xl font-bold ml-3">GigglePuzzles</p>
        </div>
        <p className="w-2/3 mt-2 text-gray-400">
          <i>
            Looking for more fun? Download our free puzzles for kids and let the
            laughter begin! For an even bigger collection of hilarious puzzles
            and exclusive content, upgrade to our premium version.
          </i>
        </p>
      </div>

      <nav>
        <div className="grid grid-flow-col gap-4">
          <SocialIcon
            network="instagram"
            url="https://www.instagram.com/maze_masters/reels/"
          />
          <SocialIcon network="twitter" url="https://x.com/MastersMaze" />
          <SocialIcon
            network="facebook"
            url="https://www.facebook.com/profile.php?id=61561971579540"
          />
        </div>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by GigglePuzzles</p>
      </aside>
    </footer>
  );
};

export default Footer;
