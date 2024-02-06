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
      <div class="max-w-screen-md mx-auto flex flex-col items-left justify-center gap-3">
        <div>
          n1 <i>(nice one)</i> is an open-source game hacking research project made
          for educational purposes. lead by ataractic <i>(ataractic@pm.me)</i> as a
          hobby. the source code is <a className={"hover:text-black hover:bg-white underline"} href='https://github.com/n1rip'>available on github</a>.
        </div>
        <div>
          join our community <a className={"hover:text-black hover:bg-white underline"} href='https://discord.gg/PTYAeRdtHR'>https://discord.gg/PTYAeRdtHR</a>
        </div>
      </div>
    </div>
  );
}
