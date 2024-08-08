type Props = { type?: "title" | "paragraph"; text: string };

export default function HeaderText({ type = "title", text }: Props) {
  switch (type) {
    case "paragraph":
      return (
        <p className="bg-white px-6 md:px-0 pr-16 md:pr-4 text-cool-gray tracking-tight md:mb-8 md:font-medium">
          {text}
        </p>
      );
    default:
      return (
        <h1 className="bg-white rounded-t-xl pt-10 pb-4 px-6 md:p-0 text-2xl md:text-3xl text-marine-blue font-bold md:mb-2">
          {text}
        </h1>
      );
  }
}
