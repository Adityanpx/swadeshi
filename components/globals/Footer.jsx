import Image from 'next/image'
import Link from 'next/link'

const navigation = {
  connect: [
    { name: 'Book Meeting', href: '' },
    {
      name: 'Twitter',
      href: 'https://twitter.com/justansub',
    },
    {
      name: 'Github',
      href: 'https://www.youtube.com/@SpeedyBrand-SEO',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/speedy-brand-inc/',
    },
  ],
  company: [
    { name: 'Blogs', href: '/' },
    { name: 'Pricing', href: '/' },
    { name: 'Affiliate Partner', href: '/' },
    { name: 'AI For Enterprise', href: '/' },
  ],
}

const TwoColumnFooter = () => {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="font-inter p-6 w-full max-w-7xl"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-2">
        <div className="flex flex-col p-2 justify-between lg:flex-row">
          <div className="space-y-8 ">
            <Image
              priority={true}
              unoptimized={true}
              width={100}
              height={40}
              src="/logo.png"
              alt="logo"
              className="h-12 dark:hidden block w-auto"
            />
            <Image
              priority={true}
              unoptimized={true}
              width={100}
              height={40}
              src="/logo-dark.png"
              alt="logo"
              className="h-12 hidden dark:block w-auto"
            />
            <p className="text-md max-w-xs leading-6 dark:text-white text-gray-700">
              We provide certification to not only create grounds to shine in the Indian market but to help you secure a place in the international markets.
            </p>
            <div className="flex space-x-6 text-sm dark:text-white text-gray-700">
              <div> &copy; Swadeshi Standard Certificate</div>
            </div>
          </div>
          {/* Navigations */}
          <div className="mt-16 grid grid-cols-2 gap-14 md:grid-cols-2 lg:mt-0 xl:col-span-2">
            <div className="md:mt-0">
              <h3 className="text-sm font-semibold leading-6 dark:text-white text-gray-900">
                Connect
              </h3>
              <div className="mt-6 space-y-4">
                {navigation.connect.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm leading-6 dark:text-gray-200 text-gray-700 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-sm font-semibold leading-6 dark:text-white text-gray-900">
                  Company
                </h3>
                <div className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 dark:text-gray-200 text-gray-700 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className=" border-t  border-gray-900/10  mt-4">
          <p className="text-xs leading-5 dark:text-gray-200 text-gray-700">
            &copy; 2024 Swadeshi Standard Certificate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default TwoColumnFooter
