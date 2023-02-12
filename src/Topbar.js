import "./App.css";
import logo from "./assets/logo.png";

const Topbar = () => {
  return (
    <div class="dark:bg-blue-300">
      <nav class="border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-blue-300">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="#" class="flex items-center">
            <img src={logo} class=" mr-3 h-16" alt="Flowbite Logo" />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0   dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-2  rounded-none md:bg-transparent uppercase border-transparent border-b-2 hover:border-gray-900 "
                  aria-current="page"
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-2  rounded-none md:bg-transparent uppercase border-transparent border-b-2 hover:border-gray-900 "
                  aria-current="page"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-2  rounded-none md:bg-transparent uppercase border-transparent border-b-2 hover:border-gray-900 "
                  aria-current="page"
                >
                  Advice
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-2  rounded-none md:bg-transparent uppercase border-transparent border-b-2 hover:border-gray-900 "
                  aria-current="page"
                >
                  Coaching
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="outline outline-1 px-5 py-2 uppercase block  text-gray-700 rounded  md:border-0 hover:bg-gray-900  hover:text-white hover:ease-in dark:text-gray-400 "
                >
                  Employers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-2  rounded-none md:bg-transparent uppercase border-transparent border-b-2 hover:border-gray-900 "
                  aria-current="page"
                >
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="md:flex md:w-8/12 md:items-center block md:justify-center p-4 text-center m-auto">
        <input
          class="p-2 mr-2 w-full mb-2 md:mb-0 rounded-md border-0 text-gray-800 focus:outline-none active:outline-none"
          type="text"
          placeholder="Search"
        />
        <input
          class="p-2 mr-2 w-full mb-2 md:mb-0 rounded-md border-0 text-gray-800 focus:outline-none active:outline-none"
          type="text"
          placeholder="All Companies"
        />
        <input
          class="p-2 mr-2 w-full mb-2 md:mb-0  rounded-md border-0 text-gray-800 focus:outline-none active:outline-none"
          type="text"
          placeholder="Anywhere"
        />
        <button class="bg-slate-900 w-full text-white pl-5 pr-5 pb-2 pt-2 rounded-md">
          Search
        </button>
      </div>
    </div>
  );
};

export default Topbar;
