import Image from "next/image";
import Link from "next/link";
import {
  FOOTER_COMPANY_LINKS,
  FOOTER_SUPPORT_LINKS,
} from "@/constants";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMapPin, FiMail, FiPhoneCall } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative bg-bg-light pt-20 pb-0 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Logo & Description */}
          <div>
            <div className="mb-5">
              <Link href="/">
                <Image
                  src="https://themes.envytheme.com/startp/wp-content/uploads/2020/11/startnext-main-logo.png"
                  alt="StartNext"
                  width={140}
                  height={36}
                />
              </Link>
            </div>
            <p className="text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer
            </p>
          </div>

          {/* Col 2: Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-heading">Company</h3>
            <ul className="space-y-3">
              {FOOTER_COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-body hover:text-main transition-colors relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-main before:rounded-full"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-heading">Support</h3>
            <ul className="space-y-3">
              {FOOTER_SUPPORT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-body hover:text-main transition-colors relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:bg-main before:rounded-full"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Address */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-heading">Address</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <FiMapPin className="text-main text-lg mt-0.5 flex-shrink-0" />
                <span>
                  28 Division St, New York,
                  <br />
                  NY 10002, USA
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <FiMail className="text-main text-lg mt-0.5 flex-shrink-0" />
                <span>
                  Email:{" "}
                  <a
                    href="mailto:startnext@gmail.com"
                    className="hover:text-main"
                  >
                    startnext@gmail.com
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <FiPhoneCall className="text-main text-lg mt-0.5 flex-shrink-0" />
                <span>
                  Phone:{" "}
                  <a href="tel:+321984754" className="hover:text-main">
                    + (321) 984 754
                  </a>
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <ul className="flex items-center gap-3 mt-6">
              {[
                { icon: FaTwitter, label: "Twitter" },
                { icon: FaFacebookF, label: "Facebook" },
                { icon: FaInstagram, label: "Instagram" },
                { icon: FaLinkedinIn, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <li key={label}>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-main hover:bg-main hover:text-white hover:border-main transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon className="text-sm" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 py-6 text-center">
          <p className="text-sm text-body mb-0">
            © StartNext. All rights reserved by{" "}
            <a
              href="https://envytheme.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-heading hover:text-main"
            >
              EnvyTheme
            </a>
          </p>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute bottom-0 left-0 z-0 opacity-30">
        <Image
          src="https://themes.envytheme.com/startp/wp-content/uploads/2020/11/shape1.png"
          alt="shape"
          width={170}
          height={170}
        />
      </div>
      <div className="absolute top-12 right-12 z-0 animate-rotateme opacity-30">
        <Image
          src="https://themes.envytheme.com/startp/wp-content/uploads/2020/11/shape2.svg"
          alt="shape"
          width={30}
          height={30}
        />
      </div>
    </footer>
  );
}
