


import devStackLogo from "../assets/logo-text.png";
const FooterSection = () => {
  return (
    <footer className="bg-white px-6 pt-12 text-sm text-gray-500">
      <div className="mx-auto max-w-285">
        <div className="grid grid-cols-4 gap-10">
          <div>
            <img src={devStackLogo} alt="Dev Stack Logo" />

            <p className="mt-4 max-w-95 ">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-6 flex gap-5">
              <a href="" className="text-gray-700">
                GitHub
              </a>

              <a href="" className="text-gray-700">
                Twitter
              </a>

              <a href="" className="text-gray-700">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">PRODUCT</h3>

            <div className="mt-4 space-y-3">
              <a href="" className="block">
                Home
              </a>

              <a href="" className="block">
                Technologies
              </a>

              <a href="" className="block">
                Projects
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">COMPANY</h3>

            <div className="mt-4 space-y-3">
              <a href="" className="block">
                About
              </a>

              <a href="" className="block">
                Contact
              </a>

              <a href="" className="block">
                Careers
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">LEGAL</h3>

            <div className="mt-4 space-y-3">
              <a href="" className="block ">
                Privacy Policy
              </a>

              <a href="" className="block">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 py-8">
          <div className="flex justify-between gap-4">
            <p className="text-gray-400">
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex gap-7">
              <a href="" className="text-gray-400">
                Privacy
              </a>

              <a href="" className="text-gray-400">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
