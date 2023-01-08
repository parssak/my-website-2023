import { Button, Card, Text, TextProps, Tooltip } from "@parssa/universal-ui";
import Image from "next/image";
import { useEffect, useState } from "react";

export const cx = (...classes: Array<string | undefined | false | null>) => {
  return Array.from(classes)
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ") // remove extra whitespace
    .trim();
};

const externalLinkClasses = (className?: string) =>
  cx(
    // base
    "inline-block text-blue-500 dark:text-blue-300 ",
    "duration-200 ease-spring transition-all skew-x-1",
    // base -> hover
    "hover:hue-rotate-60",
    // "hover:-skew-x-6",
    // ::before (rect)
    "before:block before:absolute before:inset-y-0.5 before:-inset-x-0.5 before:scale-75",
    "before:rounded before:opacity-0 before:bg-sky-400/20",
    "before:duration-200 before:ease-spring",
    // ::before -> hover
    "hover:before:opacity-100 hover:before:scale-100",
    // ::after (underline)
    "after:absolute after:w-full after:bottom-0 after:rounded-full",
    "after:h-[1.5px] after:left-0 after:scale-x-95 after:-translate-y-1",
    "after:bg-blue-500 dark:after:bg-blue-300",
    "after:duration-200 after:ease-spring after:transition-all",
    // ::after -> hover
    "hover:after:scale-x-75 hover:after:translate-y-0 hover:after:opacity-80",
    "inline-flex items-center group",
    className
  );

const ExternalLink = ({
  children,
  className,
  imageHref,
  ...props
}: {
  href: string;
} & React.HTMLAttributes<HTMLAnchorElement> & {
    imageHref?: string;
  } & TextProps) => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger as="span">
        <Text
          {...props}
          as="a"
          target="_blank"
          rel="noopener noreferrer"
          className={externalLinkClasses(className)}
        >
          {children}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 ml-1"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ease-spring"
              d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
              clipRule="evenodd"
            />
          </svg> */}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clipRule="evenodd"
              className=" group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ease-spring"
            />
          </svg> */}
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
              fill="currentColor"
              fillRule="evenodd"
              className="group-hover:translate-x-px group-hover:-translate-y-px transition-all ease-spring"
              clipRule="evenodd"
            ></path>
          </svg>
        </Text>
      </Tooltip.Trigger>
      <Tooltip.Content
        side="top"
        className={
          imageHref
            ? "backdrop-blur-xl duration-700 pl-0 pr-0 pt-0 w-64 h-36 aspect-video group overflow-hidden relative"
            : "invisible hidden"
        }
        sideOffset={2}
      >
        <a href={props.href} target="_blank" rel="noopener noreferrer">
          <Image
            alt={"Preview image for given link"}
            width={1457}
            height={918}
            src={imageHref}
            className="rounded object-cover w-full h-full transition-all group-hover:scale-110 ease-spring duration-500 group-hover:blur-md"
          />
        </a>
        <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 ease-spring duration-500 pointer-events-none">
          <Button
            as="a"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
            theme="info"
            dark
            href={props.href}
            className="pl-size-2x pr-size-2x py-size-qy rounded-full bg-theme-base/50 transition-all hover:bg-theme-base cursor-pointer pointer-events-auto"
          >
            Visit &rarr;
          </Button>
        </div>
      </Tooltip.Content>
    </Tooltip.Root>
  );
};

const things = [
  {
    emoji: "🧑🏻‍💻",
    text: (
      <>
        Lead frontend engineer & designer{" "}
        <ExternalLink imageHref="/preview/fig-preview.webp" href="https://www.fig.io">
          @fig
        </ExternalLink>
        {/*  md:inline */}
        <span className="hidden">, we're hiring!</span>
      </>
    )
  },
  {
    emoji: "🔧",
    text: (
      <>
        Building an open-source{" "}
        <ExternalLink
          imageHref="/preview/universal-preview.webp"
          href="
      https://universal-ui.vercel.app"
        >
          React UI library
        </ExternalLink>{" "}
        with Tailwind & RadixUI
      </>
    )
  },
  {
    emoji: "✨",
    text: "Obsessed with intuitive & delightful interfaces"
  },
  {
    emoji: "📍",
    text: "Based in Toronto, Canada"
  }
];

const HeaderSection = ({
  title,
  subtitle,
  className,
  ...props
}: {
  title: React.ReactNode;
  subtitle: React.ReactNode;
} & Omit<Omit<DivProps, "children">, "title">) => {
  return (
    <div
      {...props}
      className={`flex items-start md:items-center flex-col md:flex-row mb-size-2y relative 
      ${className ?? ""}`}
    >
      {typeof title === "string" ? (
        <Text className="flex-shrink-0" variant="h2">
          {title}
        </Text>
      ) : (
        title
      )}
      <div
        className="border-t border-dashed border-theme-base/30 w-full mx-8 hidden md:block"
        aria-hidden="true"
      />
      <Text className="flex-shrink-0 opacity-80">{subtitle}</Text>
    </div>
  );
};

const projects = [
  {
    title: "fig.io",
    date: "2022 — Present",
    subtitle: "Lead frontend engineer & designer",
    items: [
      {
        title: "Scripts & CLIs",
        href: "https://fig.io/blog/post/scripts-launch",
        description: "frontend UI & script creation w/ GraphQL"
      },
      {
        title: "Landing Page",
        href: "https://www.fig.io",
        description: "designed & developed the landing page for fig.io"
      },
      {
        title: "FigUI",
        href: "https://www.ui.fig.io",
        description: "design system & components powering fig products"
      }
    ]
  },
  {
    title: "Universal UI",
    date: "2023 — Present",
    subtitle: "Open Source",
    items: [
      {
        title: "Custom Docs",
        href: "https://universal-ui.vercel.app/docs/components/inputs/button",
        description: "built a custom storybook-style docs site"
      },
      {
        title: "Dark Mode",
        href: "https://fig.io/blog/post/scripts-launch",
        description: "comes with powerful color inference & theming"
      },
      {
        title: "Flexible",
        href: "https://fig.io/blog/post/scripts-launch",
        description: "able to customize entire library to any style imaginable"
      }
    ]
  },
  {
    title: "Browser Engine",
    date: "2021 Winter",
    subtitle: "Open Source",
    items: [
      {
        title: "Game Engine",
        href: "https://universal-ui.vercel.app/docs/components/inputs/button",
        description: "pure-browser 3d game engine"
      },
      {
        title: "Scripting",
        href: "https://fig.io/blog/post/scripts-launch",
        description: "supports custom scripting with three.js"
      },
      {
        title: "Shaders",
        href: "https://fig.io/blog/post/scripts-launch",
        description: "able to add custom shader materials to objects"
      }
    ],
    // note: "Exploration project, not maintained anymore"
  },
  {
    title: "Kazakan",
    date: "2020 Summer",
    subtitle: "Open Source",
    items: [
      {
        title: "Mobile Game",
        href: "https://universal-ui.vercel.app/docs/components/inputs/button",
        description: "top-down 2d shooter for iOS & Android"
      },
      {
        title: "Process",
        href: "https://fig.io/blog/post/scripts-launch",
        description: "wrote an article about the development process"
      },
      {
        title: "Artwork",
        href: "https://fig.io/blog/post/scripts-launch",
        description: "did all artwork in Aseprite, very time consuming (but fun)"
      },
    ],
    // note: "Exploration project, not maintained anymore"
  }
];

const FancyTopGradient = () => {
  const [shouldDisco, setShouldDisco] = useState(false);
  return (
    <div className="pointer-events-none">
      <div
        aria-hidden="true"
        className={`absolute 
        ${shouldDisco ? "animate-hue-rotate" : ""}
        -inset-x-2
        -top-4
        h-48
        blur
        bg-gradient-to-tr
        from-[#FFB67D0a]
        via-[#B363750e]
        to-[#C6ACCD99]
        
        dark:from-[#0B1F39]
        dark:to-[#5895AE88]
        dark:via-[#EF6D3622]
        saturate-200
        contrast-150
        dark:contrast-100`}
      />
      <div
        aria-hidden="true"
        className={`absolute 
        ${shouldDisco ? "animate-hue-rotate" : ""}
        -inset-x-2
        -top-4
        h-48
        blur
        bg-gradient-to-tl
        from-[#D58AA90e]
        via-[#D58AA940]
        to-[#7690BEa0]
        
        dark:from-[#0B1F39]
        dark:to-[#5895AE88]
        dark:via-[#EF6D3622]
        saturate-200
        contrast-150
        dark:contrast-100`}
      />
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-48 bg-gradient-to-t from-theme-pure to-theme-pure/20`}
      />

      <div className="absolute inset-0 grain opacity-80" />
    </div>
  );
};
export default function Page() {
  return (
    <div className="container pt-36">
      <FancyTopGradient />
      <div className="relative">
        <HeaderSection
          title={
            <Text className="flex-shrink-0 gradient-text " variant="h1">
              Parssa Kyanzadeh
            </Text>
          }
          subtitle={
            <>
              software engineer <span className="text-theme-muted opacity-50">&</span> designer
            </>
          }
        />

        <Text size="lg" className="my-size-2y">
          <strong>I build products that make people productive.</strong>
        </Text>

        {/* tl;dr */}
        <section className="pt-size-8y">
          <HeaderSection title="tl;dr" subtitle="the who/what/where" />
          {things.map(({ emoji, text }) => (
            <Text key={emoji} className="flex mt-1">
              <span className="mr-2.5 scale-110">{emoji}</span>
              <span>{text}</span>
            </Text>
          ))}
        </section>

        {/* projects */}
        <section className="pt-size-8y">
          <HeaderSection title="Projects" subtitle="what I've worked on" />
          <div className="flex gap-size-x items-start">
            <div className="relative grid place-items-center mt-3">
              <div
                className="absolute w-3 h-3 bg-theme-active animate-ping-slow rounded-full"
                data-theme="success"
              />
              <div className="w-2 h-2 bg-emerald-500 rounded-full relative" />
            </div>
            <Text variant="h6" className="text-size">
              Currently building{" "}
              <ExternalLink
                className="font-medium"
                imageHref="/preview/scripts-preview.webp"
                href="https://fig.io/user-manual/scripts"
              >
                scripts
              </ExternalLink>{" "}
              at fig and working on{" "}
              <ExternalLink
                className="font-medium"
                imageHref="/preview/universal-preview.webp"
                href="https://universal-ui.vercel.app"
              >
                universal-ui
              </ExternalLink>{" "}
              in my free time.
            </Text>
          </div>
          <div className="grid lg:grid-cols-2 w-full gap-6 mt-size-4y">
            {projects.map((project) => (
              <Card
                key={project.title}
                as={Card.Content}
                className="bg-theme-pure/20 backdrop-blur w-full"
              >
                <div className="flex w-full justify-between items-center">
                  <Text variant="h5" className="font-medium">
                    {project.title}
                  </Text>
                  <Text size="xs" className="border-0  opacity-50">
                    {project.date}
                  </Text>
                </div>
                <div className="mt-size-2y divide-y divide-theme-base/20">
                  {project.items.map((item) => (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <Text
                        key={item.title}
                        size="sm"
                        theme="info"
                        className="py-size-2y leading-normal -mx-size-y px-size-y rounded text-theme-base ease-linear  group-hover:bg-theme-active/20 group-hover:text-theme-active cursor-pointer"
                      >
                        <span className="font-medium mr-2 block md:text-right xl:min-w-[12ch] sm:inline-block text-theme-active">
                          {item.title}
                        </span>{" "}
                        <span className="relative">
                          <span className="text-theme-active/80 opacity-100 group-hover:opacity-0 ">
                            {item.description}
                          </span>
                          <span className="absolute left-0 group-hover:opacity-100 opacity-0 top-0 right-0 whitespace-nowrap sm:top-auto">
                            check it out &rarr;
                          </span>
                        </span>
                      </Text>
                    </a>
                  ))}
                </div>
                {/* {project.note && (
                  <Card.Content
                    data-size="sm"
                    className="rounded bg-theme-active/20 mt-size-y -mx-size-y px-size-y"
                    data-theme="warning"
                  >
                    <Text size="xs" className="leading-none">
                      {project.note}
                    </Text>
                  </Card.Content>
                )} */}
              </Card>
            ))}
          </div>
        </section>

        {/* get in touch */}
        <section className="py-size-8y">
          <HeaderSection title="Contact" subtitle="how to reach me" />
          <Text>If you want to chat, feel free to shoot me an email at </Text>
          <Text>
            <ExternalLink href="mailto:parssak@gmail.com">parssak@gmail.com</ExternalLink>
          </Text>
        </section>
      </div>
    </div>
  );
}
