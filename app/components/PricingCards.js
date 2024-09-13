import prices from '../data/prices.json'

export default function PrincingCards() {
  return (
    <section>
      {prices.map((price) => (
        <article
          key={price.title}
          className="p-4 text-left border-[1px] border-neutral-200 rounded-xl bg-gradient-to-tl from-neutral-100 max-w-[500px]"
        >
          <h3 className="text-2xl font-bold">{price.title}</h3>
          <p className="text-base">{price.title}</p>
          <p className="text-base">{price.price}</p>
          <p className="text-base">{price.description}</p>
          <div className="border-px border-black w-full" />
          <ul className="flex gap-2 items-center">
            {price.included.map((item) => (
              <li key={`${price.title}-${item}`}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  )
}
