import { useSignal } from "@preact/signals";
import { Header } from "../components/Header.tsx";

interface EntryProps {
  title: string;
  object: object | string;
}

function Entry(props: EntryProps) {
  return (
    <div>
      <h1 className={"font-bold"}>{props.title}</h1>
      <h2 className={""}>{props.object}</h2>
      <hr className={"mt-3"}/>
    </div>
  );
}

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="mx-auto">
      <Header />
      <div class="max-w-screen-md mx-auto grid grid-cols-2 gap-3">
        <div className={"flex flex-col gap-3"}>
        <Entry title="email" object="contact@n1.rip"/>
        </div>
        <div className={"flex flex-col gap-3"}>
        <Entry title="discord" object={<a className={"hover:text-black hover:bg-white underline"} href='https://discord.gg/PTYAeRdtHR'>https://discord.gg/PTYAeRdtHR</a>}/>
        </div>
      </div>
    </div>
  );
}
