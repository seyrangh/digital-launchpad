"use client";

import Bounding from "../components/Bounding";
import Image from "next/image";
import React, { useState } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { LinkPreview } from "@/components/ui/link-preview";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";
type CategoryKey = keyof typeof categoryData;
import { DummyContent } from "../components/DummyContent";

const data = [
  {
    category: "Sam Crawford",
    title: "Web Design Fast Track",
    src: "/WDFT.png",
    content: <DummyContent />,
  },
  {
    category: "Jordan Welch",
    title: "The Winning Store",
    src: "/TWS.png",
    content: <DummyContent />,
  },
  {
    category: "Jack Winslade",
    title: "The Perfect Fit",
    src: "/TPF.png",
    content: <DummyContent />,
  },
  {
    category: "Waqar Asim",
    title: "Pathway to Profits",
    src: "/PWTP.png",
    content: <DummyContent />,
  },
  {
    category: "Luis Berger",
    title: "Pen to Profit",
    src: "/P2P.png",
    content: <DummyContent />,
  },
  {
    category: "Brett Malinowski",
    title: "No-Code Blueprint",
    src: "/NCB.png",
    content: <DummyContent />,
  },
  {
    category: "Iman Gadzhi",
    title: "Digital Launchpad",
    src: "/DL.png",
    content: <DummyContent />,
  },
  {
    category: "Josh Macin",
    title: "Detox 101",
    src: "/DETOX 101.png",
    content: <DummyContent />,
  },
  {
    category: "Mike Thurston",
    title: "Digital Don",
    src: "/DD.png",
    content: <DummyContent />,
  },
  {
    category: "Tony Jeffries",
    title: "Boxing Fundamentals",
    src: "/BF.png",
    content: <DummyContent />,
  },
  {
    category: "Luke Alexander",
    title: "Art of the Deal",
    src: "/AOTD.png",
    content: <DummyContent />,
  },
  {
    category: "Paul Daley",
    title: "Six Figure Sales Rep",
    src: "/6FSR.png",
    content: <DummyContent />,
  },
];

const categoryData = {
  Ecommerce: {
    iframe:
      '<iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Ffast.wistia.net%2Fembed%2Fiframe%2Fzya7c5c63r&amp;display_name=Wistia%2C+Inc.&amp;url=https%3A%2F%2Fiman-gadzhi.wistia.com%2Fmedias%2Fzya7c5c63r&amp;image=https%3A%2F%2Fembed-ssl.wistia.com%2Fdeliveries%2F6e288c877a6b909d88784bfac6d6a74d.jpg%3Fimage_crop_resized%3D960x540&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=wistia" width="940" height="529" scrolling="no" allowfullscreen="" title="The Winning Store Trailer (Regular Sales Page)"></iframe>',
    title: "Build Your Online Store",
    subtext: "Start Selling Products Worldwide",
    description:
      "Learn how to set up and manage a successful ecommerce business, from choosing products to optimizing your store for conversions.",
  },
  Copywriting: {
    iframe:
      '<iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Ffast.wistia.net%2Fembed%2Fiframe%2Fe9zuco2gzu&amp;display_name=Wistia%2C+Inc.&amp;url=https%3A%2F%2Fiman-gadzhi.wistia.com%2Fmedias%2Fe9zuco2gzu&amp;image=https%3A%2F%2Fembed-ssl.wistia.com%2Fdeliveries%2F05d1f250d2f06d6da72de1d9546e6c8d.jpg%3Fimage_crop_resized%3D960x540&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=wistia" width="940" height="529" scrolling="no" allowfullscreen="" title="Pen To Profit Trailer"></iframe>',
    title: "Master the Art of Persuasion",
    subtext: "Craft Compelling Copy That Sells",
    description:
      "Discover the secrets of writing persuasive copy that engages readers and drives sales across various marketing channels.",
  },
  "Online Sales": {
    iframe:
      '<iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Ffast.wistia.net%2Fembed%2Fiframe%2Fz8stl7zb0g&display_name=Wistia%2C+Inc.&url=https%3A%2F%2Fiman-gadzhi.wistia.com%2Fmedias%2Fz8stl7zb0g&image=https%3A%2F%2Fembed-ssl.wistia.com%2Fdeliveries%2F716434f4d9aa58d32f208db3858be58f.jpg%3Fimage_crop_resized%3D960x540&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=wistia" width="940" height="529" scrolling="no" allowfullscreen="" title="Six-Figure Sales Rep Trailer"></iframe>',
    title: "Boost Your Digital Revenue",
    subtext: "Implement Effective Sales Strategies",
    description:
      "Explore proven techniques to increase your online sales, from lead generation to closing deals in the digital marketplace.",
  },
};

export default function Home() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  const [activeCategory, setActiveCategory] =
    useState<CategoryKey>("Ecommerce");

  return (
    <Bounding>
      <div className="mt-12 px-4 sm:px-6 lg:px-8">
        <header>
          <h1 className="font-squareBold text-xs sm:text-2xl text-center text-[#f0a500] mb-2 sm:mb-4">
            IT&apos;S TRUE...
          </h1>
          <p className="font-squareBold text-lg md:text-2xl lg:text-4xl text-center text-white mb-4 sm:mb-8 max-w-5xl mx-auto uppercase">
            <LinkPreview
              url="https://educate.io/programs/digital-launchpad"
              className="font-bold bg-clip-text text-white bg-gradient-to-br from-white to-white"
            >
              <span className="text-white uppercase">
                24-Year-Old Multi-Millionaire
              </span>
            </LinkPreview>{" "}
            Goes Rogue And Reveals His Secret{" "}
            <LinkPreview
              url="https://educate.io/programs"
              className="font-bold bg-clip-text text-white bg-gradient-to-br from-white to-white"
            >
              <span className="text-[#f0a500] italic uppercase">
                &quot;Online Income System&quot;
              </span>
            </LinkPreview>{" "}
            Just To Prove Anyone Can Make Their First $1,000 Online With It.
          </p>
        </header>

        <section className="relative">
          <div className="absolute inset-0 bg-gradient-radial from-[#001d62] via-orange-600/50 to-transparent opacity-50"></div>

          <div className="hidden md:block">
            <ContainerScroll titleComponent={<></>}>
              <Image
                src="/iman.jpg"
                alt="hero"
                height={720}
                width={1400}
                className="mx-auto rounded-2xl object-cover h-full shadow-2xl relative z-10"
                draggable={false}
              />
            </ContainerScroll>
          </div>

          {/* Simple Image for smaller screens */}
          <div className="md:hidden">
            <Image
              src="/iman.jpg"
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover w-full h-auto max-h-[60vh] shadow-2xl relative z-10"
              draggable={false}
            />
          </div>
        </section>

        <section className="text-center mt-8 sm:mt-12">
          <Link href="#pricing" className="scroll-smooth">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-[#f0a500] text-white font-bold py-3 sm:py-5 px-8 sm:px-16 rounded-3xl text-base sm:text-lg md:text-2xl lg:text-3xl shadow-md shadow-[#001d62] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              YES! GIVE ME ACCESS NOW
            </motion.button>
          </Link>
          <p className="font-squareRegular text-xs sm:text-sm text-gray-300 mt-1">
            Lock-in access at the discounted price before it goes up
          </p>
        </section>

        <section className="mt-24">
          <h1 className="font-squareBold text-xs sm:text-2xl text-center text-[#f0a500] mb-2 sm:mb-4 uppercase">
            some of the content you get inside...
          </h1>
          <p className="font-squareBold text-lg md:text-2xl lg:text-4xl text-center text-white mb-4 sm:mb-8 max-w-4xl mx-auto px-4 uppercase">
            the 3 best paths to launch your online career
          </p>
        </section>

        <section className="mb-16">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
            {Object.keys(categoryData).map((category) => (
              <button
                key={category}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base transition duration-300 ${
                  activeCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-white text-black hover:bg-gray-300"
                }`}
                onClick={() => setActiveCategory(category as CategoryKey)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="max-w-5xl mx-auto bg-white/10 rounded-3xl p-4 sm:p-8 backdrop-blur-sm">
            <div className="relative w-full pb-[56.25%] mb-8 rounded-xl overflow-hidden">
              <div
                dangerouslySetInnerHTML={{
                  __html: categoryData[activeCategory].iframe.replace(
                    /<iframe/,
                    '<iframe style="position:absolute;top:0;left:0;width:100%;height:100%;"'
                  ),
                }}
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-3xl font-bold text-white mb-2 font-squareBold">
                {categoryData[activeCategory].title}
              </h2>
              <p className="text-md sm:text-xl text-[#fb4409] mb-2 font-squareRegular">
                {categoryData[activeCategory].subtext}
              </p>
              <div className="w-16 h-1 bg-[#fb4409] mb-4 mx-auto sm:mx-0"></div>
              <p className="text-white font-squareRegular sm:text-lg leading-relaxed">
                {categoryData[activeCategory].description}
              </p>
            </div>
          </div>
          <div className="mt-8 sm:mt-12">
            <Carousel items={cards} />
          </div>
        </section>

        <section className="mt-16 sm:mt-24" id="pricing">
          <div className="mx-auto">
            <h1 className="font-squareBold text-xs sm:text-2xl text-center text-[#f0a500] mb-2 sm:mb-4 uppercase">
              beta launch discount
            </h1>
            <p className="font-squareBold text-lg md:text-2xl lg:text-4xl text-center text-white mb-4 sm:mb-8 max-w-4xl mx-auto px-4 uppercase">
              Lock-in access at the discounted price before official launch
            </p>
            <p className="text-gray-400 text-center text-xs md:text-md max-w-3xl mx-auto mb-16 font-squareRegular">
              By joining with the monthly plan, you start as an Apprentice and
              unlock content monthly. When joining with the yearly plan, you
              already join as a King and unlock instant access to all rewards
              you&apos;d have gotten in the first 12 months.
            </p>

            {/* Monthly Plan */}
            <motion.div
              whileHover={{ y: -10 }}
              className="max-w-4xl mx-auto mb-16 sm:mb-24 relative"
            >
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold py-4 px-8 rounded-xl text-lg z-10 shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex flex-col items-center">
                  <span className="text-sm line-through opacity-75">
                    $100/month
                  </span>
                  <span className="text-3xl font-extrabold">$37</span>
                  <span className="text-xs uppercase tracking-wide">
                    per month
                  </span>
                </div>
              </div>
              <div className="border-2 border-blue-500 bg-black rounded-3xl p-8 relative overflow-hidden">
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                  <Image
                    src="/icon1.png"
                    width={64}
                    height={64}
                    alt="Icon"
                    className="mb-4 sm:mb-0 sm:mr-4 rounded-2xl"
                  />
                  <div>
                    <h2 className="font-squareRegular text-3xl md:text-4xl text-white mb-2">
                      Digital Launchpad
                    </h2>
                    <p className="font-squareRegular text-md text-gray-500">
                      Get instant access to Digital Launchpad + all the bonuses
                      below
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    [
                      "Iman's Crash Course ",
                      <span key="crash-course-value" className="text-[#f0a500]">
                        ($500 Value)
                      </span>,
                    ],
                    [
                      "Monthly Rewards ",
                      <span
                        key="monthly-rewards-value"
                        className="text-[#f0a500]"
                      >
                        ($5,000 + Value)
                      </span>,
                    ],
                    [
                      "Pen To Profit ",
                      <span
                        key="pen-to-profit-value"
                        className="text-[#f0a500]"
                      >
                        ($1,500 Value)
                      </span>,
                    ],
                    ["New Program Releases"],
                    [
                      "The Winning Store ",
                      <span
                        key="winning-store-value"
                        className="text-[#f0a500]"
                      >
                        ($1,500 Value)
                      </span>,
                    ],
                    "Levelling System",
                    [
                      "6-Figure Sales Rep ",
                      <span key="sales-rep-value" className="text-[#f0a500]">
                        ($1,500 Value)
                      </span>,
                    ],
                    "Unlockable Content",
                  ].map((item, index) => (
                    <div
                      key={`feature-${index}`}
                      className="flex items-center text-white"
                    >
                      <FaCheck className="text-[#f0a500] mr-3 flex-shrink-0" />
                      <span className="font-squareRegular">
                        {Array.isArray(item) ? (
                          <>
                            {item[0]}
                            {item[1]}
                          </>
                        ) : (
                          item
                        )}
                      </span>
                    </div>
                  ))}
                </div>
                <Link href="https://checkout.digital-launchpad.com/pay/price_1OgrJGDM6ttbLpZZtNZh6uzb:1?isAuth=0&isEmbedded=1&formFields=email:email:required_firstName:string:required_lastName:string:required_phoneNumber:phone:&returnUrl=https://app.digital-launchpad.com&_gl=1*1yhnpto*_gcl_au*NzAyOTUxODAxLjE3MjYyNDA5NTc.*_ga*MTU1MDY3MzE1Ni4xNzI2MjQwOTU4*_ga_FL5TJPCR4R*MTcyNjQ2Mzg2MC4xMC4wLjE3MjY0NjM4NjUuNTUuMC4w">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-blue-500 text-white font-squareRegular py-4 px-8 rounded-full text-md md:text-2xl transition-colors duration-300 mb-4"
                  >
                    Get Monthly Access Now
                  </motion.button>
                </Link>
                <p className="text-sm text-center text-gray-400 mb-4 font-squareRegular">
                  You&apos;ll get redirected to our student platform to complete
                  your checkout.
                </p>
                <div className="flex justify-center space-x-6">
                  <Image
                    src="/klarna.png"
                    alt="Klarna"
                    width={80}
                    height={70}
                  />
                  <Image
                    src="/paypal.png"
                    alt="PayPal"
                    width={50}
                    height={50}
                  />
                  <Image
                    src="/stripe.png"
                    alt="Stripe"
                    width={50}
                    height={50}
                  />
                  <Image
                    src="/afterpay.png"
                    alt="Afterpay"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </motion.div>

            <h1 className="font-squareBold text-xs sm:text-2xl text-center text-[#f0a500] mb-2 sm:mb-4 uppercase">
              some of the content you get inside...
            </h1>
            <p className="font-squareBold text-lg md:text-2xl lg:text-4xl text-center text-white mb-4 sm:mb-8 max-w-4xl mx-auto px-4 uppercase">
              the 3 best paths to launch your online career
            </p>
            <p className="text-gray-500 text-center text-xs md:text-md max-w-3xl mx-auto mb-16 font-squareRegular">
              THE Yearly plan: When joining with the yearly plan, you save 40%
              compared to Monthly AND you already join as a King, unlocking
              instant access to all the rewards you&apos;d have gotten in the
              first 12 months.
            </p>

            {/* Yearly Plan */}
            <motion.div
              whileHover={{ y: -10 }}
              className="max-w-4xl mx-auto mb-16 sm:mb-24 relative"
            >
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-yellow-500 to-yellow-600 text-white font-bold py-4 px-8 rounded-xl text-lg z-10 shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex flex-col items-center">
                  <span className="text-sm line-through opacity-75">
                    $1200/year
                  </span>
                  <span className="text-3xl font-extrabold">$270</span>
                  <span className="text-xs uppercase tracking-wide">
                    per year
                  </span>
                </div>
              </div>
              <div className="border-2 border-blue-500 bg-black rounded-3xl p-8 relative overflow-hidden">
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                  <Image
                    width={64}
                    height={64}
                    src="/icon1.png"
                    alt="Icon"
                    className="mb-4 sm:mb-0 sm:mr-4 rounded-2xl"
                  />
                  <div>
                    <h2 className="font-squareRegular text-3xl md:text-4xl text-white mb-2">
                      Digital Launchpad -{" "}
                      <span className="text-[#f0a500]">King Edition</span>
                    </h2>
                    <p className="font-squareRegular text-md text-gray-500">
                      Cut the wait and unlock all the rewards for the first 12
                      months straight away by joining with the &quot;Yearly King
                      Edition&quot; plan.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    [
                      "Everything you get w/ Monthly ",
                      <span key="monthly-value" className="text-[#f0a500]">
                        ($10,000 Value)
                      </span>,
                    ],
                    [
                      "Access to Detox 101 ",
                      <span key="detox-value" className="text-[#f0a500]">
                        ($900 Value)
                      </span>,
                    ],
                    [
                      "Monthly Calls w/ Iman Gadzhi ",
                      <span key="calls-value" className="text-[#f0a500]">
                        ($5,000 Value)
                      </span>,
                    ],
                    "In-Person Events",
                    [
                      "Chat w/ Millionaire Mentors ",
                      <span key="mentors-value" className="text-[#f0a500]">
                        ($2,000 Value)
                      </span>,
                    ],
                    "Early Access To New Content",
                    [
                      "12-Month Access ",
                      <span key="access-value" className="text-[#f0a500]">
                        ($1,200 Value)
                      </span>,
                    ],
                    "Unlockable Content",
                  ].map((item, index) => (
                    <div
                      key={`yearly-feature-${index}`}
                      className="flex items-center text-white"
                    >
                      <FaCheck className="text-[#f0a500] mr-3 flex-shrink-0" />
                      <span className="font-squareRegular">
                        {Array.isArray(item) ? (
                          <>
                            {item[0]}
                            {item[1]}
                          </>
                        ) : (
                          item
                        )}
                      </span>
                    </div>
                  ))}
                </div>
                <Link href="https://checkout.digital-launchpad.com/pay/price_1OgrKPDM6ttbLpZZqzYYp1HX:1?isAuth=0&isEmbedded=1&formFields=email:email:required_firstName:string:required_lastName:string:required_phoneNumber:phone:required_instagramHandle:string&returnUrl=https://app.digital-launchpad.com&_gl=1*mav768*_gcl_au*NzAyOTUxODAxLjE3MjYyNDA5NTc.*_ga*MTU1MDY3MzE1Ni4xNzI2MjQwOTU4*_ga_FL5TJPCR4R*MTcyNjQ2Mzg2MC4xMC4xLjE3MjY0NjM5MzQuNjAuMC4w">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-blue-500 text-white font-squareRegular py-4 px-8 rounded-full text-md md:text-2xl transition-colors duration-300 mb-4"
                  >
                    Get Yearly Access Now
                  </motion.button>
                </Link>
                <p className="text-sm text-center text-gray-400 mb-4 font-squareRegular">
                  You&apos;ll get redirected to our student platform to complete
                  your checkout.
                </p>
                <div className="flex justify-center space-x-6">
                  <Image
                    src="/klarna.png"
                    alt="Klarna"
                    width={80}
                    height={70}
                  />
                  <Image
                    src="/paypal.png"
                    alt="PayPal"
                    width={50}
                    height={50}
                  />
                  <Image
                    src="/stripe.png"
                    alt="Stripe"
                    width={50}
                    height={50}
                  />
                  <Image
                    src="/afterpay.png"
                    alt="Afterpay"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <footer className="mt-16 sm:mt-24 pb-8 text-center">
          <Image
            src="/educate.webp"
            alt="Educate.io Logo"
            className="mx-auto mb-6"
            width={100}
            height={100}
          />

          <div className="mb-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white mx-2 font-squareRegular text-xs"
            >
              Contact Us
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="#"
              className="text-gray-400 hover:text-white mx-2 font-squareRegular text-xs"
            >
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="#"
              className="text-gray-400 hover:text-white mx-2 font-squareRegular text-xs"
            >
              Terms & Conditions
            </a>
          </div>

          <p className="text-xs text-gray-500 max-w-2xl mx-auto mb-4">
            This site is not a part of the Facebook website or Facebook Inc.
            Additionally, This site is NOT endorsed by Facebook in any way.
            FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>

          <p className="text-sm text-white">
            ©2023 educate.io. All Rights Reserved.
          </p>
        </footer>
      </div>
    </Bounding>
  );
}
