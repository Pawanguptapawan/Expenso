import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FEATURES, STEPS } from "@/lib/landing";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col pt-16">
      <section className="mt-20 pb-12 space-y-10 md:space-y-20 px-5 ">
        <div className="container  mx-auto px-4 d:px-6 text-center space-y-6">
          <Badge
            variant="outline"
            className="bg-green-100 text-green-700 text-2xl"
          >
            Split expenses. Simplify life.
          </Badge>
          <h1 className="gradient-title mx-auto max-w-4xl text-4xl font-bold md:text-7xl">
            The smartest way to split expences with friends
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Track your expenses, split bills, and settle up with friends in a
            few clicks. Never worry about who owes and who gain.
          </p>

          <div className=" flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size={"lg"}
              className="animated-gradient text-white px-6 py-3 rounded-md"
            >
              <Link href="/dashboard" className="flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-green-600 text-green-600"
            >
              <Link href="#how-it-works">How it works</Link>
            </Button>
          </div>
        </div>
        <div className="container mx-auto max-w-5xl overflow-hidden rounded-xl">
          <div className="gradient p-1 aspect-[16/9]">
            <Image
              src="/hero.png"
              width={1280}
              height={720}
              alt="Hero Image"
              className="rounded-lg mx-auto"
              priority
            />
          </div>
        </div>
      </section>

      <section id="features" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge
            variant="outline"
            className="bg-green-100 text-green-700 text-2xl mb-8"
          >
            Features
          </Badge>
          <h2 className="gradient-title mt-2 text-3xl md:text-7xl">
            Everything you need to split expenses.
          </h2>
          <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Our Plateform provides all the tools you need to handle shared
            expenses with ease.
          </p>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ title, Icon, bg, color, description }) => (
              <Card
                key={title}
                className={
                  "flex flex-col items-center space-y-4 p-6 text-center"
                }
              >
                <div className={`rounded-full p-3 ${bg}`}>
                  <Icon className={`h-6 w-6 ${color} `} />
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-500 ">{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge
            variant="outline"
            className="bg-green-100 text-green-700 text-2xl mb-8"
          >
            How It Works
          </Badge>
          <h2 className="gradient-title mt-2 text-3xl md:text-7xl">
            Splitting expenses has never been easier.
          </h2>
          <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Follow these simple steps to start tracking and splitting expenses
            with friends.
          </p>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {STEPS.map(({ description, label, title }) => (
              <div>
                <div classNa="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-600">
                  {label}
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-500 text-center">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
