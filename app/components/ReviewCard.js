import Image from 'next/image'

export default function ReviewCard({ review }) {
  return (
    <div
      className={`relative flex flex-col justify-around h-[260px] p-4 text-left border-[1px] border-neutral-200 rounded-xl bg-gradient-to-tl from-neutral-100 ${
        review._id % 2 === 1 ? 'w-[460px]' : 'w-[620px]'
      }`}
    >
      <h3 className="text-2xl font-bold">{review.title}</h3>
      <p className="text-base">{review.review}</p>
      <div className="flex gap-2 items-center">
        <Image
          src={review.user.image}
          alt={review.user.name}
          width={50}
          height={50}
        />
        <div>
          <p className="text-base">{review.user.name}</p>
          <p className="text-sm text-neutral-500">{review.user.function}</p>
        </div>
      </div>
    </div>
  )
}
