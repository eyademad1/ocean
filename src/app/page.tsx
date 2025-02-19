import Button from "@/components/Button";
import FeaturesBlock from "@/components/FeaturesBlock";
import FeaturesCard from "@/components/FeaturesCard";
import Heading from "@/components/Heading";
import PricingSection from "@/components/PricingSection";
import TestimonialCard from "@/components/TestimonialCard";
import { clients } from "@/constant/clients";
import { features, featuresBlock } from "@/constant/features";
import { testimonials } from "@/constant/testimonials";
import { ArrowRightCircle, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-x-hidden pt-24 lg:pt-28 antialiased">
      <div className="relative container">
        <Image
        src={"/bg.png"}
        alt="test"
        width={1920}
        height={1080}
        className="absolute -z-50 w-full min-h-screen md: max-h-[670px] md:h-full lg:min-h-screen -top-20 left-0 opacity-10"
        />
        {/* Home section */}
        <section id="home" className="relative">
          <figure className="bubble w-96 lg:w-[520px] h-96 bg-indigo-600 top-16 -left-40"/>
          <figure className="bubble w-96 lg:w-[430px] h-96 bg-sky-600 bottom-16 md:bottom-44 -right-20 md:right-20"/>
          <div className="flex flex-col text-center space-y-12">
            <div className="flex flex-col items-center space-y-6">
              <p className="capitalize border border-slate-700 py-1 px-3 text-xs rounded-3xl cursor-pointer 
              hover:border-sky-500 hover:bg-slate-800 shadow-md transition-all">
                new features is now available
                <ArrowRightCircle className="inline ml-1 w-4 h-4"/>
              </p>
              <Heading title={"A CRM dashboard for engineering teams"}/>
              <p className="max-w-[46rem] leading-normal sm:text-lg sm:leading-8">
              Boost engineering team’s productivity with Ocean CRM dashboard that streamlines project management, collaboration, and data-driven decision-making.
              </p>
              <div className="flex items-center gap-4">
                <Button >Get Started
                <MoveRight className="w-4 h-4"/>
                </Button>
                <Link href="#pricing">
                <Button variant="outline">View Pricing</Button>
                </Link>
              </div>
            </div>
            <Image src={"/Hero-image.svg"} width={670} height={370} alt={"banner"} className="mx-auto shadow-xl"/>
          </div>
        </section>
        {/* Home section */}

        {/* client Section */}
        <section id="clients"
        className="max-w[62rem] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-4"
        >
          {clients.map((client, index)=>{
            return(
              <Image
              key={index}
          src={client.imgUrl}
          alt={client.alt}
          width={120}
          height={80}
          className="w-40 md:w-full mx-auto"
          />
            )
          })}
        </section>
        {/* client Section */}

        {/* features section*/}
        <section id="features" className="flex flex-col gap-y-12 md:gap-y-28">
          {/* Part 1 */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <Image
            src={"/bg2.png"}
            alt="banner2"
            width={1920}
            height={1080}
            className="absolute -z-50 w-full top-0 left-0 opacity-5"
            />
            <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-start">
              <Heading title="Powerful features to help you manage all your leads."/>
              <p className="lg:max-w-[34rem] leading-normal sm:text-lg sm:leading-8">
              Apsum dolor sit amet consectetur. Aliquam elementum elementum in ultrices. Dui maecenas ut eros turpis ultrices metus morbi aliquet vel.
              </p>
              <Button>
                Get Started
              </Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4">
              {features.map((feature, index)=>{
                return(
                  <FeaturesCard key={index} {...feature}/>
                )
              })}
            </div>
          </div>
          {/* Part 1 */}

          {/* Part 2 */}
          {featuresBlock.map((item, index)=>{
            return(
              <FeaturesBlock key={index} {...item}/>
            )
          })}
          {/* Part 2 */}
        </section>
        {/* features section*/}

        {/* Pricing Section */}
        <PricingSection/>
        {/* Pricing Section */}

        {/* Testimonials section */}
        <section id="testimonials" className="flex flex-col gap-8">
          <Heading title="Meet our Customers" isCentered/>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index)=>{
              return(
                <TestimonialCard key={index} {...testimonial}/>
              )
            })}
          </div>
        </section>
        {/* Testimonials section */}

        {/* Contact section */}
        <section id="contact">
          <div className="bg-slate-800 rounded-lg px-8 lg:px-24 py-8 lg:py-12 flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-4 text-center lg:text-start">
              <Heading title="Let’s try our service now!" />
              <p className="max-w-[35rem] leading-normal text-lg">
                Experience the power of Ocean CRM dashboard for engineering
                teams. Boost productivity and streamline collaboration. Get
                started today!
              </p>
            </div>
            <Button>
              get started
              <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </section>
        {/* Contact section */}
      </div>
    </main>
  );
}
