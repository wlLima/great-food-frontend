'use client';

import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';

export default function FooterWithSocialMediaIcons() {
  return (
    <Footer container bgDark className='rounded-none'>
      <div className="w-full">
        <div className="grid w-full justify-between place-content-center sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="grid sm:grid-cols-2 sm:gap-8 sm:mt-4 grid-cols-3 gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Flowbite
                </Footer.Link>
                <Footer.Link href="#">
                  Tailwind CSS
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Github
                </Footer.Link>
                <Footer.Link href="#">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#">
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full flex flex-col items-center justify-center sm:justify-between sm:flex-row">
          <Footer.Copyright
            by="Dev Will™"
            href="#"
            year={2023}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.linkedin.com/in/wllima/"
              icon={BsLinkedin}
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="https://github.com/wlLima"
              icon={BsGithub}
            />

          </div>
        </div>
      </div>
    </Footer>
  )
}


