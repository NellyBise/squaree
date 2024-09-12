import Image from "next/image"

export default function ReviewCard({review}){
    return(
        <div className="h-[260px] max-w-[620px] p-4 flex-col text-left border-[1px] border-neutral-200 rounded-xl bg-gradient-to-tl from-neutral-100">
            <h3 className="text-2xl font-bold">{review.title}</h3>
            <p className="text-base">{review.review}</p>
            <div className="flex items-center">
                <Image src={review.user.image} alt={review.user.name} width={50} height={50}/>
                <div>
                    <p className="text-base">{review.user.name}</p>
                    <p className="text-sm">{review.user.function}</p>
                </div>
            </div>
        </div>
    )
}