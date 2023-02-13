import "./App.css";
import logo from "./assets/logo.png";

const Footer = () => {
  return (
    <div className=" bg-blue-900 py-16 mt-20">
      <div className="grid lg:grid-cols-5 container mx-auto gap-6 px-10">
        <div className="text-left">
          <h4 className="text-2xl font-bold text-blue-300 mb-3">The Muse</h4>
          <img className="h-10 mb-3" src={logo} />
          <p className="text-blue-100">
            Access 9.3M+ vector icons & stickers. Download Free Icons and
            Stickers for your projects. Images made by and for designers in PNG,
            SVG, EPS, PSD and CSS formats{" "}
          </p>
        </div>
        <div>
          <h4 className="text-blue-300 font-bold text-xl mb-3">
            ABOUT THE MUSE
          </h4>
          <ul>
            <li>
              <a className="text-blue-200 mb-1 block font-medium" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="text-blue-200 mb-1 block font-medium" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="text-blue-200 mb-1 block font-medium" href="#">
                FAQs
              </a>
            </li>
            <li>
              <a className="text-blue-200 mb-1 block font-medium" href="#">
                Contact Us
              </a>
            </li>
            <li>
              <a className="text-blue-200 mb-1 block font-medium" href="#">
                Search Jobs
              </a>
            </li>
            <li>
              <a className="text-blue-200 mb-1 block font-medium" href="#">
                Browse Companies
              </a>
            </li>
            <li>
              <a className="text-blue-200 mb-1 block font-medium" href="#">
                Terms of Use
              </a>
            </li>
            <li>
              <a className="text-blue-200 mb-1 block font-medium" href="#">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-blue-300 font-bold text-xl mb-3">POPULAR JOBS</h4>
          <ul>
            <li>
              <a className="text-blue-200 mb-1 block font-medium" href="#">
                New York Jobs
              </a>
            </li>
            <li>
              <a className="text-blue-200 mb-1 block font-medium" href="#">
                San Francisco Jobs
              </a>
            </li>
            <li>
              <a className="text-blue-200 mb-1 block font-medium" href="#">
                Seattle Jobs
              </a>
            </li>
            <li>
              <a className="text-blue-200 mb-1 block font-medium" href="#">
                Engineering Jobs
              </a>
            </li>
            <li>
              <a className="text-blue-200 mb-1 block font-medium" href="#">
                Marketing Jobs
              </a>
            </li>
            <li>
              <a className="text-blue-200 mb-1 block font-medium" href="#">
                Information Technology Jobs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-blue-300 font-bold text-xl mb-3">GET INVOLVED</h4>
          <ul>
            <li>
              <a className="text-blue-200 mb-1 block font-medium" href="#">
                For Employers
              </a>
            </li>
            <li>
              <a className="text-blue-200 mb-1 block font-medium" href="#">
                The Muse Book: The New Rules of Work
              </a>
            </li>
            <li>
              <a className="text-blue-200 mb-1 block font-medium" href="#">
                Podcast: The New Rules of Work
              </a>
            </li>
            <li>
              <a className="text-blue-200 mb-1 block font-medium" href="#">
                For Career Coaches
              </a>
            </li>
            <li>
              <a className="text-blue-200 mb-1 block font-medium" href="#">
                For Developers
              </a>
            </li>
            <li>
              <a className="text-blue-200 mb-1 block font-medium" href="#">
                Send Feedback About The Muse
              </a>
            </li>
            <li>
              <a className="text-blue-200 mb-1 block font-medium" href="#">
                Tell A Friend
              </a>
            </li>
            <li>
              <a className="text-blue-200 mb-1 block font-medium" href="#">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-blue-300 font-bold text-xl mb-3">
            JOIN THE CONVERSATION
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
