type Props = {
  title: string;
  url: string;
  desc: string;
};

export default function Challenge({ title, url, desc }: Props) {
  return (
    <a href={url} className="flex flex-col flex-1" target={"_blank"}>
      <span className="text-violet-500 font-bold text-lg">{title}</span>
      <span className="text-white text-justify">{desc}</span>
    </a>
  );
}
