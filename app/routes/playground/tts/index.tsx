import { useState } from "react";
import { Button } from "~/components/formcontrol/button";

const langList = [
  { name: "English (United States)", lang: "en-US" },
  { name: "Deutsch", lang: "de-DE" },
  { name: "UK English", lang: "en-GB" },
  { name: "español", lang: "es-ES" },
  { name: "español de Estados Unidos", lang: "es-US" },
  { name: "français", lang: "fr-FR" },
  { name: "हिन्दी", lang: "hi-IN" },
  { name: "Bahasa Indonesia", lang: "id-ID" },
  { name: "italiano", lang: "it-IT" },
  { name: "日本語", lang: "ja-JP" },
  { name: "한국의", lang: "ko-KR" },
  { name: "Nederlands", lang: "nl-NL" },
  { name: "polski", lang: "pl-PL" },
  { name: "português do Brasil", lang: "pt-BR" },
  { name: "русский", lang: "ru-RU" },
  { name: "普通话（中国大陆）", lang: "zh-CN" },
  { name: "粤語（香港）", lang: "zh-HK" },
  { name: "國語（臺灣）", lang: "zh-TW" },
];

const speekSentence = (
  text: string,
  lang: string,
  volume: number,
  pitch: number,
  rate: number,
  synth: SpeechSynthesis
) => {
  const speech = new SpeechSynthesisUtterance(text);

  return new Promise<void>((resolve) => {
    speech.lang = lang;
    speech.volume = volume;
    speech.rate = rate;
    speech.pitch = pitch;
    synth.speak(speech);
    speech.addEventListener("end", () => {
      resolve();
    });
  });
};

const handleTextToSpeech = async (
  text: string,
  lang: string,
  volume: number,
  pitch: number,
  rate: number,
  synth: SpeechSynthesis
) => {
  if (synth.speaking) {
    return;
  }

  if (text === "") {
    await speekSentence("gue kudu ngomong apaan?", lang, 1, 0.4, 1.1, synth);
    return;
  }

  const splitText = text.split(/[\r?\n,.]/);

  for (let speek of splitText) {
    if (speek.length > 200) {
      await speekSentence(
        "gak gitu juga kali. kira-kira aja bro, mentang-mentang gue robot, gak dikasih nafas ngomong gak pake titik koma. kasih tanda baca lah.",
        "id-ID",
        1,
        0.4,
        1.1,
        synth
      );
      return;
    }

    await speekSentence(speek, lang, volume, pitch, rate, synth);
  }
};

export default function TtsIndex() {
  const [lang, setLang] = useState("id-ID");
  const [text, setText] = useState("Halo apa kabar dunia");
  const [volume, setVolume] = useState(0.5);
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);

  return (
    <div className="relative w-full py-2 px-6">
      <h1 className="my-3 text-center text-3xl text-theme-strong">Text To Speech</h1>

      <div className="flex-row">
        <select
          className="my-2 rounded-sm border border-theme-base bg-transparent text-theme-base outline-none"
          onChange={(e) => setLang(e.currentTarget.value)}
          defaultValue="id-ID"
        >
          {langList.map((item, index) => (
            <option key={index} value={item.lang}>
              {item.name}
            </option>
          ))}
        </select>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="h-64 w-full rounded-sm border border-theme-base bg-transparent p-2 text-theme-base outline-none"
        ></textarea>

        <div className="m-2 flex-row">
          <div className="flex">
            <label className="w-16 text-theme-base">Volume</label>
            <input
              type="range"
              min={0.1}
              max={1}
              step={0.04}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-52"
            ></input>
            <label className="w-9 text-theme-base">{volume}</label>
          </div>

          <div className="flex">
            <label className="w-16 text-theme-base">Rate</label>
            <input
              type="range"
              min={0}
              max={2}
              step={0.1}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-52"
            ></input>
            <label className="w-9 text-theme-base">{rate}</label>
          </div>

          <div className="flex">
            <label className="w-16 text-theme-base">Pitch</label>
            <input
              type="range"
              min={0}
              max={2}
              step={0.1}
              value={pitch}
              onChange={(e) => setPitch(Number(e.target.value))}
              className="w-52"
            ></input>
            <label className="w-9 text-theme-base">{pitch}</label>
          </div>
        </div>

        <Button
          label="Play"
          onClick={(e) =>
            handleTextToSpeech(text, lang, volume, pitch, rate, window.speechSynthesis)
          }
          className="h-fit w-fit"
        />
      </div>
    </div>
  );
}
