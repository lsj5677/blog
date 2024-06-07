type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <div>
      <ul className="mb-10 flex justify-center gap-5 uppercase">
        {categories.map((category: string) => (
          <li
            key={category}
            onClick={() => onClick(category)}
            className={`${selected === category && "border-b border-blue font-semibold text-blue"} cursor-pointer`}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
