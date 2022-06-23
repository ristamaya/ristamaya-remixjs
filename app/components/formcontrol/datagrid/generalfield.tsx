import { useState } from "react";

type props = {
  name: string;
  value: string;
  enable: boolean;
};

export default function GeneralField({ name, value, enable }: props) {
  const [fieldValue, setFieldValue] = useState(value);

  return (
    <input
      name={name}
      value={fieldValue}
      onChange={(e) => setFieldValue(e.target.value)}
      disabled={!enable}
      className="relative w-fit bg-transparent outline-none"
    ></input>
  );
}
