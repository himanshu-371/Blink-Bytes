import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Blink
              </span>
              Bytes
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="ABout" />
              <Footer.LinkGroup col>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Link
                  to="https://github.com/himanshu-371"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Link>
                <Link
                  to="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Link to="#">Privacy Policy</Link>
                <Link to="#">Terms &amp; Conditions </Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="BlinkBytes"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
          <Footer.Icon href="#" icon={BsFacebook} />
          <Footer.Icon href="#" icon={BsInstagram} />
          <Footer.Icon href="#" icon={BsTwitter} />
          <Footer.Icon
            href="https://github.com/himanshu-371"
            target="_blank"
            rel="noopener noreferer"
            icon={BsGithub}
          />
          <Footer.Icon href="#" icon={BsDribbble} />
        </div>
        </div>
      </div>
    </Footer>
  );
}
