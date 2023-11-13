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
          n1 (nice one) is an open-source linux kernel-level game hacking
          software made for educational purposes. every function has a comment
          describing their use.
        </div>
        <div>
          the solution is made of a loadable kernel module handling the process
          memory writing/reading and input generation, as well as a user-space
          controller program tasked with the logic. the controller communicates
          with the module using ioctls.
        </div>
        <div>
          join our discord <a className={"hover:text-black hover:bg-white"} href='https://discord.gg/PTYAeRdtHR'>https://discord.gg/PTYAeRdtHR</a>
        </div>
      </div>
    </div>
  );
}
