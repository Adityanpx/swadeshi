import Image from "next/image"
import { DM_Sans, Inter } from "next/font/google"
import Layout from "@/components/globals/Layout"
import Head from "next/head"
import { Hero } from "@/components/globals/hero"
import { Origin } from "@/components/globals/origin"
import { Services } from "@/components/globals/services"
import i18n from "@/i18n"
import { useTranslation } from "react-i18next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Newsletter } from "@/components/globals/newsletter"
import { Separator } from "@/components/ui/separator"

const inter = Inter({ subsets: ["latin"] })
const dm = DM_Sans({ subsets: ["latin"] })

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Head >
        <title>Swadeshi Standard Certificate</title>
      </Head>
      <Layout>
        <Hero />
        <section className="md:mt-24 mt-20 mb-12">
          <div className="flex gap-2 justify-center">
            {/* <img src="/service.png" className="h-12" /> */}
            <div className="">
              <p className={`text-center text-primary font-bold ${dm.className}`}>Timeline</p>

              <h1 className="font-bold text-center text-2xl mb-4  md:text-4xl">  {i18n.language === 'mr' ? t('whoarewe') : t('whoarewe')}</h1>
              <div className="flex justify-center">
                <div className="text-center w-10/12 ">
                  <p className={`${inter.className} text-sm text-justify md:text-lg mt-2 mb-4  justify-center flex font-normal text-secondary-foreground`}>

                    {i18n.language === 'mr' ? t('whoweare') : t('whoweare')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Origin />
          <div className="flex gap-2  justify-center">
            {/* <img src="/service.png" className="h-12" /> */}
            <div className="mt-8">
              <p className={`text-center text-primary font-bold ${dm.className}`}>Why SSC?</p>

              <h1 className="font-bold text-center text-2xl mb-4 md:mb-0 md:text-4xl">Trusted Certification Services</h1>
            </div>

          </div>
          <Services />
        </section>
        <section className=" ">
          <div className="flex gap-2 mb-4 justify-center">
            {/* <img src="/service.png" className="h-12" /> */}
            <div className="mb-4">
              <p className={`text-center text-primary font-bold ${dm.className}`}>Want to join SSC?</p>

              <h1 className="font-bold text-center text-2xl mb-4 md:mb-0 md:text-4xl">Careers at SSC</h1>
            </div>

          </div>
          <div className="flex justify-center">
            <div className="w-10/12">
              <Card className=" cursor-pointer shadow-sm shadow-black flex justify-center md:m-10">
                <CardHeader>
                  <CardTitle>Become an Agent</CardTitle>
                  <CardDescription>Gain market knowledge through interactions on the show floor...</CardDescription>
                </CardHeader>

              </Card>
              <Card className="cursor-pointer shadow-sm shadow-black mt-4 md:mt-0 flex justify-center md:m-10">
                <CardHeader>
                  <CardTitle>Become an Auditor</CardTitle>
                  <CardDescription>Gain market knowledge through interactions on the show floor...</CardDescription>
                </CardHeader>

              </Card>
            </div>
          </div>
        </section>
        <Separator></Separator>
        <section className="bg-secondary ">
          <div className="flex gap-2  mt-8 justify-center">
            {/* <img src="/service.png" className="h-12" /> */}
            <div className="mb-4 mt-4">
              <p className={`text-center text-primary font-bold ${dm.className}`}>Connect with SSC</p>

              <h1 className="font-bold text-center text-2xl mb-4 md:mb-0 md:text-4xl">Send a Message</h1>
            </div>

          </div>
          <div className="flex  justify-center">
          <Newsletter />

          </div>
        </section>
      </Layout>
    </>
  )
}
