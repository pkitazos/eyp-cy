interface props {
  name: string;
  title: string;
  imageURL?: string;
  invert?: boolean;
}

export function PatronCard({ name, title, imageURL, invert }: props) {
  return (
    <>
      <div className="flex w-60 flex-col">
        <div className="mb-4 h-60 w-60 rounded-full bg-teal-500">&nbsp;</div>
        <div
          className={`mb-3 text-center text-lg ${
            invert ? "text-zinc-200" : "text-black"
          }`}
        >
          {name}
        </div>
        <div
          className={`break-normal text-center text-sm ${
            invert ? "text-zinc-300" : "text-gray-600"
          }`}
        >
          {title}
        </div>
      </div>
    </>
  );
}