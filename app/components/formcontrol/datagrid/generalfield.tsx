type props = {
  name: string;
  value: string;
  enable: boolean;
};

export default function GeneralField({ name, value, enable }: props) {
  return <p>{value}</p>;
}
