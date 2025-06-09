import { Card } from "@/components/ui/card"
import { Inter } from "next/font/google"
import { Lora } from "next/font/google"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] })
const lora = Lora({ subsets: ["latin"], weight: ["600"] })

export default function Home() {
  return (
    <div className="min-h-screen bg-background px-4 md:px-10 max-w-screen-lg mx-auto">
      {/* Hero Section */}
      <section className="w-full pt-8 pb-4 md:pt-12 md:pb-8 flex flex-col items-center text-center gap-1 md:gap-6 relative overflow-visible min-h-0 md:min-h-[600px]">
        {/* Image and 'viv' text in a relative container */}
        <div className="relative flex flex-col items-center justify-end mx-auto overflow-visible pt-0 md:pt-8" style={{height: 'min-content'}}>
          <span className={`pointer-events-none text-[16rem] md:text-[25.3rem] text-yellow-400 opacity-90 select-none leading-none absolute left-1/2 bottom-0 -translate-x-1/2 z-0 ${inter.className} font-medium px-4`} style={{letterSpacing: '0.02em', textShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>viv</span>
          <Image 
            src="/viv.png" 
            alt="Viv Kay" 
            width={228}
            height={228}
            className="w-[20.7rem] h-[20.7rem] md:w-[22.8rem] md:h-[22.8rem] object-contain mx-auto relative z-10" 
            style={{marginBottom: '-2rem'}}
          />
        </div>
        {/* Subtitle */}
        <div className={`text-[16px] font-normal text-black/80 z-10 ${inter.className} mb-4 md:mb-2 mt-4 md:mt-2`}>vivienne kay • senior product designer • 8+ years</div>
        {/* Main description */}
        <div className={`text-2xl md:text-2xl font-semibold max-w-2xl mx-auto z-10 leading-snug ${lora.className} px-4 sm:px-6 md:px-10 lg:px-0 mb-4`}>
          Product designer born in Hong Kong, raised in New Zealand, based in Florida. Loves blueberry smoothies and running with rescue dogs.
        </div>
        {/* Social Buttons */}
        <div className="flex gap-8 justify-center items-center z-10 mb-4">
          <a
            href="https://www.linkedin.com/in/vivkay/"
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-2 text-[16px] font-normal text-black/80 underline transition ${inter.className} hover:text-[#7C7B86]`}
            style={{ padding: 0, border: 'none' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-colors text-inherit" style={{ color: 'inherit' }}>
              <path d="M18.3375 18.3375H15.6705V14.16C15.6705 13.164 15.6525 11.8815 14.283 11.8815C12.894 11.8815 12.681 12.9675 12.681 14.0865V18.3375H10.014V9.74702H12.5745V10.9215H12.6105C13.1325 10.0305 14.1045 9.49652 15.1365 9.53402C17.8395 9.53402 18.339 11.3115 18.339 13.626L18.3375 18.336V18.3375ZM7.005 8.57252C6.59531 8.57055 6.20294 8.40703 5.9131 8.11748C5.62327 7.82792 5.45937 7.43571 5.457 7.02602C5.457 6.17702 6.156 5.47802 7.005 5.47802C7.854 5.47802 8.5515 6.17702 8.553 7.02602C8.553 7.87502 7.854 8.57252 7.005 8.57252ZM8.3385 18.3375H5.6685V9.74702H8.3385V18.3375ZM19.665 3.00002H4.3275C3.97973 2.998 3.64521 3.13331 3.39663 3.37655C3.14806 3.61978 3.00553 3.95129 3 4.29902V19.701C3.00553 20.0488 3.14806 20.3803 3.39663 20.6235C3.64521 20.8667 3.97973 21.002 4.3275 21H19.6665C20.0151 21.0028 20.3507 20.868 20.6004 20.6247C20.8501 20.3815 20.9937 20.0496 21 19.701V4.29752C20.9937 3.94926 20.85 3.61762 20.6002 3.37486C20.3504 3.1321 20.0148 2.9979 19.6665 3.00152L19.665 3.00002Z" fill="currentColor"/>
            </svg>
            <span className="transition-colors">LinkedIn</span>
          </a>
          <a
            href="mailto:vivkay8@gmail.com"
            className={`group flex items-center gap-2 text-[16px] font-normal text-black/80 underline transition ${inter.className} hover:text-[#7C7B86]`}
            style={{ padding: 0, border: 'none' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-colors text-inherit" style={{ color: 'inherit' }}>
              <path d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM12 13L4 8V18H20V8L12 13ZM12 11L20 6H4L12 11ZM4 8V6V18V8Z" fill="currentColor"/>
            </svg>
            <span className="transition-colors">Email</span>
          </a>
        </div>
      </section>

      {/* Skills/Projects Section */}
      <section className="w-full pb-16">
        <div className="px-6 md:px-10">
          <h2 className={`text-[16px] font-normal text-center text-black/80 border-t border-[#D9D9D9] py-8 ${inter.className}`}>Selected work</h2>
        </div>
        <div className="px-4 md:px-10 max-w-screen-lg mx-auto w-full">
          <div className="w-full mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="flex flex-col h-full pt-6 px-6 pb-0">
                <div className="relative">
                  <Image src="/logo_nav.svg" alt="logo" width={28} height={28} className="w-7 h-7 absolute top-4 right-6" />
                  <div className="flex flex-col px-2 pt-2 pb-2">
                    <span className={`font-light text-[12px] uppercase text-black/80 ${inter.className} mb-[4px]`}>Nav • Growth design</span>
                    <div className={`text-[22px] font-bold ${lora.className} mb-[4px]`}>Onboarding flows</div>
                    <div className={`text-[16px] font-normal text-black/80 ${inter.className} mb-[4px]`}>A better first impression, with clear next steps and a reason to stay</div>
                    <div className={`text-[14px] font-normal text-black/80 ${inter.className} mt-4`}>Lead design for a multi-phase project including optimized sign-up flows, personalized setup guides, and a new cancellation flow that reduced voluntary churn by 17%.</div>
                  </div>
                  <div className="px-2">
                    <div className={`flex flex-wrap gap-[8.395px] mt-4`}>
                      <span className={`badge-border-shimmer inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded bg-[#FCFCFC] text-[#333333] border border-[#D9D9D9] border-[1px] ${inter.className}`}>Growth design</span>
                      <span className={`badge-border-shimmer inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded bg-[#FCFCFC] text-[#333333] border border-[#D9D9D9] border-[1px] ${inter.className}`}>Content strategy</span>
                      <span className={`badge-border-shimmer inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded bg-[#FCFCFC] text-[#333333] border border-[#D9D9D9] border-[1px] ${inter.className}`}>Collaboration</span>
                    </div>
                  </div>
                </div>
                <Image src="/onboarding.png" alt="Onboarding screenshot" width={800} height={400} className="mt-auto w-full object-cover rounded-b-[8px] m-0 p-0" style={{display:'block'}} />
              </Card>
              <Card className="flex flex-col h-full pt-6 px-6 pb-0">
                <div className="relative">
                  <Image src="/logo_nav.svg" alt="logo" width={28} height={28} className="w-7 h-7 absolute top-4 right-6" />
                  <div className="flex flex-col px-2 pt-2 pb-2">
                    <span className={`font-light text-[12px] uppercase text-black/80 ${inter.className} mb-[4px]`}>Nav • Growth design</span>
                    <div className={`text-[22px] font-bold ${lora.className} mb-[4px]`}>Subscription strategy</div>
                    <div className={`text-[16px] font-normal text-black/80 ${inter.className} mb-[4px]`}>Premium options worth sticking with</div>
                    <div className={`text-[14px] font-normal text-black/80 ${inter.className} mt-4`}>Collaborated across disciplines to define new pricing plans and a system for upgrading—spiking conversions and delivering our highest customer lifetime value (CLTV) on record.</div>
                  </div>
                  <div className="px-2">
                    <div className={`flex flex-wrap gap-[8.395px] mt-4`}>
                      <span className={`badge-border-shimmer inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded bg-[#FCFCFC] text-[#333333] border border-[#D9D9D9] border-[1px] ${inter.className}`}>Growth design</span>
                      <span className={`badge-border-shimmer inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded bg-[#FCFCFC] text-[#333333] border border-[#D9D9D9] border-[1px] ${inter.className}`}>Design systems</span>
                      <span className={`badge-border-shimmer inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded bg-[#FCFCFC] text-[#333333] border border-[#D9D9D9] border-[1px] ${inter.className}`}>Design leadership</span>
                    </div>
                  </div>
                </div>
                <Image src="/pricing4.png" alt="Upgrade paths screenshot" width={800} height={400} className="mt-auto w-full object-cover rounded-b-[8px] m-0 p-0" style={{display:'block'}} />
              </Card>
            </div>
          </div>
          <div className="w-full mb-6">
            <Card className="relative pb-0 h-full min-h-0">
              {/* Floating NAV logo */}
              <Image src="/logo_nav.svg" alt="logo" width={28} height={28} className="w-7 h-7 absolute top-4 right-4 z-10" />
              <div className="flex flex-col gap-0 px-0 py-0 h-full min-h-0 items-stretch md:grid md:grid-cols-2 md:gap-0">
                {/* Left: Text */}
                <div className="flex-1 flex flex-col justify-center px-6 pt-4 pb-10">
                  <span className={`font-light text-[12px] uppercase text-black/80 ${inter.className} mb-[4px]`}>Nav • Core experience</span>
                  <div className={`text-[22px] font-bold ${lora.className} mb-[4px]`}>Credit health</div>
                  <div className={`text-[16px] font-normal text-black/80 ${inter.className} mb-[4px]`}>A reimagined experience made to give business owners a leg up</div>
                  <div className={`text-[14px] font-normal text-black/80 ${inter.className} mt-4`}>Rebooted the core credit experience with upgraded visuals, reorganized content, unmatched data points and AI-powered insights designed to get business owners ahead on the path to funding.</div>
                  <div className={`flex flex-wrap gap-[8.395px] mt-6`}>
                    <span className={`badge-border-shimmer inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded bg-[#FCFCFC] text-[#333333] border border-[#D9D9D9] border-[1px] ${inter.className}`}>Core workflows</span>
                    <span className={`badge-border-shimmer inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded bg-[#FCFCFC] text-[#333333] border border-[#D9D9D9] border-[1px] ${inter.className}`}>AI integrations</span>
                    <span className={`badge-border-shimmer inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded bg-[#FCFCFC] text-[#333333] border border-[#D9D9D9] border-[1px] ${inter.className}`}>UX research</span>
                  </div>
                </div>
                {/* Right: Image */}
                <div className="flex-1 flex flex-col justify-end items-center p-0 h-full min-h-0 md:p-0 md:h-full">
                  <Image src="/credit2.png" alt="Credit Health screenshot" width={800} height={400} className="w-full h-full object-cover rounded-b-[8px] m-0 p-0" style={{display:'block'}} />
                </div>
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="flex flex-col h-full pt-6 px-6 pb-6">
              <div className="relative">
                <Image src="/logo_shopify.svg" alt="Shopify logo" width={36} height={36} className="w-9 h-9 absolute top-4 right-6" />
                <div className="flex flex-col px-2 pt-2 pb-2">
                  <span className={`font-light text-[12px] uppercase text-black/80 ${inter.className} mb-[4px]`}>Shopify • Core</span>
                  <div className={`text-[22px] font-bold ${lora.className} mb-[4px]`}>Product bundles</div>
                  <div className={`text-[16px] font-normal text-black/80 ${inter.className} mb-[4px]`}>Crafting the future of fulfillment on-demand</div>
                  <div className={`text-[14px] font-normal text-black/80 ${inter.className} mt-4`}>Crafted flexible bundling workflows across Fulfillment, Core, and warehouse systems—so merchants could mix, match, and sell in bulk without losing track of inventory across locations.</div>
                  <div className="px-2">
                    <div className={`flex flex-wrap gap-[8.395px] mt-4`}>
                      <span className={`badge-border-shimmer inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded bg-[#FCFCFC] text-[#333333] border border-[#D9D9D9] border-[1px] ${inter.className}`}>Service design</span>
                      <span className={`badge-border-shimmer inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded bg-[#FCFCFC] text-[#333333] border border-[#D9D9D9] border-[1px] ${inter.className}`}>API integrations</span>
                      <span className={`badge-border-shimmer inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded bg-[#FCFCFC] text-[#333333] border border-[#D9D9D9] border-[1px] ${inter.className}`}>Design leadership</span>
                    </div>
                  </div>
                </div>
              </div>
              <Image src="/bundles.png" alt="Product bundles screenshot" width={800} height={400} className="mt-auto w-full object-cover rounded-b-[8px] m-0 p-0" style={{display:'block'}} />
            </Card>
            <Card className="flex flex-col h-full pt-6 px-6 pb-6">
              <div className="relative">
                <Image src="/logo_shopify.svg" alt="Shopify logo" width={36} height={36} className="w-9 h-9 absolute top-4 right-6" />
                <div className="flex flex-col px-2 pt-2 pb-2">
                  <span className={`font-light text-[12px] uppercase text-black/80 ${inter.className} mb-[4px]`}>Shopify • Core</span>
                  <div className={`text-[22px] font-bold ${lora.className} mb-[4px]`}>Inventory locations</div>
                  <div className={`text-[16px] font-normal text-black/80 ${inter.className} mb-[4px]`}>Product logistics made manageable from your kitchen table</div>
                  <div className={`text-[14px] font-normal text-black/80 ${inter.className} mt-4`}>Defined the foundational workflows that let merchants stock, track, and fulfill products across locations—from pop-up stalls and storefronts to cross-continental warehouses.</div>
                  <div className="px-2">
                    <div className={`flex flex-wrap gap-[8.395px] mt-4`}>
                      <span className={`badge-border-shimmer inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded bg-[#FCFCFC] text-[#333333] border border-[#D9D9D9] border-[1px] ${inter.className}`}>Complex systems</span>
                      <span className={`badge-border-shimmer inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded bg-[#FCFCFC] text-[#333333] border border-[#D9D9D9] border-[1px] ${inter.className}`}>UX research</span>
                      <span className={`badge-border-shimmer inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded bg-[#FCFCFC] text-[#333333] border border-[#D9D9D9] border-[1px] ${inter.className}`}>Systems design</span>
                    </div>
                  </div>
                </div>
              </div>
              <Image src="/locations.png" alt="Inventory locations screenshot" width={800} height={400} className="mt-auto w-full object-cover rounded-b-[8px] m-0 p-0" style={{display:'block'}} />
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full pb-8 text-center">
        <div className="px-6 md:px-10">
          <div className="border-t border-[#D9D9D9] py-8"></div>
        </div>
        <div className={`text-2xl md:text-2xl font-semibold max-w-2xl mx-auto z-10 leading-snug ${lora.className} px-4 sm:px-6 md:px-10 lg:px-0 mb-12 mt-2`}>
          Let&apos;s chat!
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch w-full max-w-xs md:max-w-2xl mx-auto">
          <a
            href="https://www.linkedin.com/in/vivkay/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center gap-3 border border-[#D9D9D9] rounded-md px-6 py-4 text-[16px] font-normal text-[#080726] bg-white hover:bg-[#F5F5F5] transition shadow-xs justify-center"
            style={{ textDecoration: 'none' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-inherit" style={{ color: 'inherit' }}>
              <path d="M18.3375 18.3375H15.6705V14.16C15.6705 13.164 15.6525 11.8815 14.283 11.8815C12.894 11.8815 12.681 12.9675 12.681 14.0865V18.3375H10.014V9.74702H12.5745V10.9215H12.6105C13.1325 10.0305 14.1045 9.49652 15.1365 9.53402C17.8395 9.53402 18.339 11.3115 18.339 13.626L18.3375 18.336V18.3375ZM7.005 8.57252C6.59531 8.57055 6.20294 8.40703 5.9131 8.11748C5.62327 7.82792 5.45937 7.43571 5.457 7.02602C5.457 6.17702 6.156 5.47802 7.005 5.47802C7.854 5.47802 8.5515 6.17702 8.553 7.02602C8.553 7.87502 7.854 8.57252 7.005 8.57252ZM8.3385 18.3375H5.6685V9.74702H8.3385V18.3375ZM19.665 3.00002H4.3275C3.97973 2.998 3.64521 3.13331 3.39663 3.37655C3.14806 3.61978 3.00553 3.95129 3 4.29902V19.701C3.00553 20.0488 3.14806 20.3803 3.39663 20.6235C3.64521 20.8667 3.97973 21.002 4.3275 21H19.6665C20.0151 21.0028 20.3507 20.868 20.6004 20.6247C20.8501 20.3815 20.9937 20.0496 21 19.701V4.29752C20.9937 3.94926 20.85 3.61762 20.6002 3.37486C20.3504 3.1321 20.0148 2.9979 19.6665 3.00152L19.665 3.00002Z" fill="currentColor"/>
            </svg>
            <span>Message me on LinkedIn</span>
          </a>
          <a
            href="mailto:vivkay8@gmail.com"
            className="flex-1 flex items-center gap-3 border border-[#D9D9D9] rounded-md px-6 py-4 text-[16px] font-normal text-[#080726] bg-white hover:bg-[#F5F5F5] transition shadow-xs justify-center"
            style={{ textDecoration: 'none' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-inherit" style={{ color: 'inherit' }}>
              <path d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM12 13L4 8V18H20V8L12 13ZM12 11L20 6H4L12 11ZM4 8V6V18V8Z" fill="currentColor"/>
            </svg>
            <span>Send me an Email</span>
          </a>
        </div>
      </section>

      {/* Stories Section */}
      <section className="w-full flex flex-col items-center justify-center mt-6 mb-24">
        <div className="text-center text-[16px] text-[#444] max-w-md mx-auto mb-3 mt-0 font-normal">
          While we&apos;re waiting to connect, here&apos;s some writing I&apos;ve done on <span className="font-medium">Medium</span> about UX and design.
        </div>
        <div className="w-full max-w-md mx-auto bg-[#F5F5F7] rounded-md p-8 mt-8">
          <div className="flex flex-col gap-5 items-start text-left">
            <div className="flex items-center gap-3 justify-center">
              <a href="https://medium.com/user-experience-design-1/overcoming-not-imposter-syndrome-6d92c71c1751" target="_blank" rel="noopener noreferrer" className="underline text-[16px] text-[#080726] hover:text-[#7C7B86]">Overcoming not-imposter syndrome</a>
              <span className="inline-block bg-[#080726] text-white text-xs font-medium rounded px-2 py-1 ml-2">Most read</span>
            </div>
            <a href="https://medium.com/user-experience-design-1/storytelling-tips-for-ux-designers-8af0df5254cc" target="_blank" rel="noopener noreferrer" className="underline text-[16px] text-[#080726] hover:text-[#7C7B86]">Storytelling tips for UX designers</a>
            <a href="https://medium.com/shopify-ux/a-video-format-for-impactful-design-project-updates-821d9a2285d6" target="_blank" rel="noopener noreferrer" className="underline text-[16px] text-[#080726] hover:text-[#7C7B86]">Video format for impactful design project updates</a>
            <a href="https://medium.com/design-bootcamp/product-design-on-a-growth-team-whats-it-like-c6af098701a8" target="_blank" rel="noopener noreferrer" className="underline text-[16px] text-[#080726] hover:text-[#7C7B86]">Product design on a growth team</a>
            <a href="https://medium.com/user-experience-design-1/how-to-make-the-gift-of-feedback-work-for-you-fc86d3eacf72" target="_blank" rel="noopener noreferrer" className="underline text-[16px] text-[#080726] hover:text-[#7C7B86]">How to make the gift of feedback work for you</a>
            <a href="https://medium.com/@viv_kay" target="_blank" rel="noopener noreferrer" className="underline text-[16px] text-[#7C7B86] hover:text-[#080726]">+42 more stories</a>
          </div>
        </div>
      </section>

      {/* Footer with Back to Top Button */}
      <footer className="w-full flex flex-col items-center justify-center mt-16 mb-8">
        <a
          href="#"
          className={`group flex items-center gap-2 text-[16px] font-normal text-black/80 font-sans transition hover:underline focus:outline-none`}
          style={{ textDecoration: 'none' }}
        >
          <span className="flex items-center justify-center w-8 h-8">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" className="w-5 h-5 text-black group-hover:text-[#7C7B86] transition-colors" fill="currentColor" aria-hidden="true">
              <path d="m480-507 95 95q11 11 27.5 11t28.5-11q12-12 12-28.5T631-469L508-592q-12-12-28-12t-28 12L328-468q-12 12-11.5 28t12.5 28q12 11 28 11.5t28-11.5l95-95Zm0 427q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
            </svg>
          </span>
          <span className="transition-colors group-hover:text-[#7C7B86]">Back to top</span>
        </a>
      </footer>

      {/* Copyright Footer */}
      <div className="w-full flex flex-col items-center justify-center mb-4">
        <span className="text-[14px] text-[#B0B0B8] select-none pb-6">© Vivienne Kay 2025</span>
      </div>
    </div>
  )
}
