import { FaPhone, FaEnvelopeOpen, FaClock } from "react-icons/fa";

export default function TopHeader() {
  return (
    <div className="bg-main text-white py-2 hidden lg:block">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-white mb-0">Welcome to StartNext</p>
          </div>
          <div>
            <ul className="flex items-center gap-6 text-sm">
              <li className="flex items-center gap-1.5">
                <a href="tel:+15417543010" className="flex items-center gap-1.5 text-white hover:text-white/80">
                  <FaPhone className="text-xs" />
                  +1-541-754-3010
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <a href="#" className="flex items-center gap-1.5 text-white hover:text-white/80">
                  <FaEnvelopeOpen className="text-xs" />
                  3261 Anmoore Road, NY 11230
                </a>
              </li>
              <li className="flex items-center gap-1.5 text-white">
                <FaClock className="text-xs" />
                9:00 AM – 8:00 PM
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
