interface prop {
  text?: string;
}

export default function WorkOnIt({ text }: prop) {
  const textcontent = text || "Sorry, I'm still working on it";

  return (
    <div className="m-auto h-full w-full bg-theme-muted text-center text-2xl text-theme-strong">
      {textcontent}
      <img src="/img/work.png" className="m-auto mt-10 object-cover" />
    </div>
  );
}
