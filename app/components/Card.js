import Image from "next/image"


export default function Card({ image, name }) {
    return (
      <div className="size-32 rounded-xl border-[1px] border-neutral-200 flex justify-center items-center">
        {image ? (
          <Image src={image} alt={name} width={100} height={100} className="size-14" />
        ) : (
          <div className="size-32 rounded-xl border-[1px]  bg-zinc-50"></div>
        )}
      </div>
    );
  }