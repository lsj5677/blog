import { rock_salt } from "@/app/font";

export default function About() {
  return (
    <div className="bg-third py-20">
      <div className="sub-wrap flex flex-col items-center justify-between gap-10 md:flex-row">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          maiores nulla porro sapiente! Maiores tenetur ducimus, velit nesciunt
          iure obcaecati!
        </p>
        <h2 className={`text-center text-5xl ${rock_salt.className}`}>About</h2>
        <p className="text-right">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          maiores nulla porro sapiente! Maiores tenetur ducimus, velit nesciunt
          iure obcaecati!
        </p>
      </div>
    </div>
  );
}
