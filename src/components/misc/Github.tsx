import Link from "next/link"; 
import TheheAiIcon from "./TheheAiIcon";

type Props = {};

export default function Github({}: Props) {
  return (
    <Link
      className="flex flex-col items-center border-white/10 py-2 text-primary/80 transition-colors hover:text-primary"
      href="https://dashboard.theheai.com/"
    >
      <TheheAiIcon   />
    </Link>
  );
}
