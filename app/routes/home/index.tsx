import { Form, Link } from "@remix-run/react";
import { Button } from "~/components/formcontrol/button";
import { Input } from "~/components/formcontrol/input";
import IntroCard from "~/components/introcard";

export default function Home() {
  const introCard = [
    {
      icon: "FiCpu",
      title: "Lorem ipsum",
      content: "Lorem ipsum dolor sit amet.",
    },
    {
      icon: "FiBriefcase",
      title: "Lorem ipsum",
      content: "Lorem ipsum dolor sit amet.",
    },
    {
      icon: "FiSmile",
      title: "Lorem ipsum",
      content: "Lorem ipsum dolor sit amet.",
    },
    {
      icon: "FiLayers",
      title: "Lorem ipsum",
      content: "Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <>
      <div className="h-[calc(100vh-64px)] w-full bg-theme-fill bg-hero-pattern bg-cover bg-center bg-no-repeat bg-blend-darken md:bg-fixed">
        <div className="flex h-full items-center justify-center">
          <div className="mx-auto max-w-full px-4 text-center sm:max-w-3xl sm:px-1">
            <h1 className="pb-4 text-2xl font-extrabold text-theme-inverted sm:text-5xl">
              DIGITAL MAKES IT POSSIBLE
            </h1>
            <p className="pb-5 text-2xl text-theme-inverted">
              Hello there welcome to my personal website projects, please take a look what going on
              here
            </p>
            <Link to="/playground">
              <Button className="text-3xl font-semibold text-theme-inverted" label="Playground" />
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto grid w-full grid-cols-[repeat(auto-fit,minmax(256px,1fr))] gap-x-5 gap-y-5 py-6">
        {introCard.map((item, index) => (
          <IntroCard key={index} icon={item.icon} title={item.title} content={item.content} />
        ))}
      </div>

      <div className="mb-6 block sm:mb-14">
        <div className="flex h-24 w-full items-center bg-theme-fill px-8">
          <h1 className="inline-block text-3xl font-bold text-theme-inverted sm:text-4xl">
            Playground
          </h1>
        </div>

        <div className="item-center flex justify-center px-5">
          <div className="w-full rounded-md border bg-theme-inverted px-3 py-5 shadow-lg sm:-my-5 lg:ml-64">
            <h1 className="my-2 text-2xl text-theme-strong">Web programming is fun</h1>
            <p className=" text-theme-base">
              Lorem ipsum dolor sit amet. Id sunt adipisci vel eveniet omnis sit porro suscipit eum
              dolor odit est quasi ratione sed omnis iusto et voluptatem inventore. Eos accusamus
              unde non esse velit qui iste tempore id quia unde aut itaque quas aut architecto quia
              est dolor dolores. Id dicta accusantium eos.
            </p>
          </div>
        </div>
      </div>

      <div className="block sm:mb-14">
        <div className="flex h-24 w-full items-center justify-center px-8">
          <h1 className="inline-block text-3xl font-semibold text-theme-base sm:text-4xl">
            Current Blog
          </h1>
        </div>

        <div className="item-center flex justify-center px-10">
          <div className=""></div>
        </div>
      </div>

      <div className="my-5 flex h-fit w-full items-center justify-center px-8">
        <div className="block w-full rounded-md bg-theme-muted px-4 py-2 shadow-md sm:w-fit">
          <h1 className="mb-5 text-center text-xl font-semibold text-theme-base sm:text-3xl ">
            Contact
          </h1>
          <div className="my-4 block items-center justify-center">
            <Form>
              <Input className="w-full" label="Name" />
              <Input className="w-full" label="Email" />
              <Input className="w-full" label="Message" />
              <Button className="w-20" label="Send" />
            </Form>
          </div>
        </div>
      </div>

      <div className="block sm:mb-14">
        <div className="flex h-24 w-full items-center justify-center px-8">
          <h1 className="inline-block text-3xl font-semibold text-theme-base sm:text-4xl">
            Build By
          </h1>
        </div>

        <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                src: "./img/reactjs.svg",
                alt: "React JS",
                href: "https://reactjs.org/",
              },
              {
                src: "./img/remixjs.svg",
                alt: "Remix JS",
                href: "https://remix.run/",
              },
              {
                src: "./img/vscode.svg",
                alt: "Visual Studio Code",
                href: "https://code.visualstudio.com/",
              },
              {
                src: "./img/typescript.svg",
                alt: "TypeScript",
                href: "https://typescriptlang.org",
              },
              {
                src: "./img/tailwindcss.svg",
                alt: "Tailwind CSS",
                href: "https://tailwindcss.com",
              },
              {
                src: "./img/netlify.svg",
                alt: "Netlify",
                href: "https://netlify.com",
              },
              {
                src: "./img/prettier.svg",
                alt: "Prettier",
                href: "https://prettier.io",
              },
              {
                src: "./img/eslint.svg",
                alt: "ESLint",
                href: "https://eslint.org",
              },
              {
                src: "./img/prisma.svg",
                alt: "Prisma",
                href: "https://prisma.io",
              },
              {
                src: "./img/mongodb.svg",
                alt: "MongoDB",
                href: "https://www.mongodb.com/",
              },
            ].map((img) => (
              <a
                target={"_blank"}
                key={img.href}
                href={img.href}
                className="flex h-16 w-32 justify-center p-1 grayscale transition duration-500 hover:grayscale-0"
              >
                <img alt={img.alt} src={img.src} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="h-fit w-full bg-theme-fill">
        <div className="container mx-auto grid w-full grid-cols-[repeat(auto-fit,minmax(256px,1fr))] gap-x-5 gap-y-5 border-b border-theme-base py-6 text-theme-base">
          <div className="">
            <h1 className="text-xl font-semibold">RISTAMAYA</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet. Id sunt adipisci vel eveniet omnis sit porro suscipit eum
            </p>
          </div>
          <div className="">
            <h1 className="text-xl font-semibold">Web Development</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet. Id sunt adipisci vel eveniet omnis sit porro suscipit eum
            </p>
          </div>
          <div className="">
            <h1 className="text-xl font-semibold">RISTAMAYA</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet. Id sunt adipisci vel eveniet omnis sit porro suscipit eum
            </p>
          </div>
          <div className="">
            <h1 className="text-xl font-semibold">RISTAMAYA</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet. Id sunt adipisci vel eveniet omnis sit porro suscipit eum
            </p>
          </div>
        </div>
        <div className="mt-1 flex justify-center text-xs font-thin text-theme-muted">
          <h1>Ristamaya 2022</h1>
        </div>
      </div>
    </>
  );
}
