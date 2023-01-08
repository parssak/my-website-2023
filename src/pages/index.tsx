import { Button, Text, Tooltip } from "@parssa/universal-ui";

export const cx = (...classes: Array<string | undefined | false | null>) => {
  return Array.from(classes)
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ") // remove extra whitespace
    .trim();
};

const ExternalLink = ({
  children,
  className,
  imageHref,
  ...props
}: {
  href: string;
} & React.HTMLAttributes<HTMLAnchorElement> & {
    imageHref?: string;
  }) => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger as='span'>
        <Text
          {...props}
          as="a"
          target="_blank"
          rel="noopener noreferrer"
          className={cx(
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
            "inline-flex items-center group"
          )}
        >
          {children}
          <svg
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
          </svg>
        </Text>
      </Tooltip.Trigger>
      <Tooltip.Content className='backdrop-blur-xl' sideOffset={0}>
        hello
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
        <ExternalLink href="https://www.fig.io">@fig</ExternalLink>
      </>
    )
  },
  {
    emoji: "🔧",
    text: (
      <>
        Building an open-source{" "}
        <ExternalLink
          href="
      https://universal-ui.vercel.app"
        >
          React UI library
        </ExternalLink>{" "}
        with TailwindCSS & RadixUI
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
      className={`flex items-start md:items-center flex-col md:flex-row mb-size-2y 
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
      <Text className="flex-shrink-0">{subtitle}</Text>
    </div>
  );
};
export default function Page() {
  return (
    <div className="container pt-36">
      <HeaderSection
        title={
          <Text className="flex-shrink-0" variant="h1">
            Parssa Kyanzadeh
          </Text>
        }
        subtitle="Software Engineer & Designer"
      />

      <Text size="lg" className="my-size-2y">
        <strong>I build products that make people productive.</strong>
      </Text>

      {/* tl;dr */}
      <section className="pt-size-8y border-t border-theme-base/0">
        <HeaderSection title="tl;dr" subtitle="The who/what/where" />
        {things.map(({ emoji, text }) => (
          <Text key={emoji} className="flex mt-1">
            <span className="mr-2.5 scale-110">{emoji}</span>
            <span>{text}</span>
          </Text>
        ))}
      </section>

      {/* about */}
      <section className="pt-size-8y border-t border-theme-base/0">
        <HeaderSection title="Projects" subtitle="What I've worked on" />
      </section>
    </div>
  );
}
