import { point } from "@/app/layout";

export default function About() {
  return (
    <div className="bg-third px-5 py-20">
      <div className="sub-wrap flex flex-col items-center justify-between gap-10 md:flex-row">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          maiores nulla porro sapiente! Maiores tenetur ducimus, velit nesciunt
          iure obcaecati!
        </p>
        <h2 className={`text-center text-5xl ${point.className}`}>About</h2>
        <p className="text-right">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          maiores nulla porro sapiente! Maiores tenetur ducimus, velit nesciunt
          iure obcaecati!
        </p>
      </div>
    </div>
  );
}
