'use client'

import prices from '../data/prices.json'
import { useState } from 'react'

export default function PrincingCards() {
  const [check, setCheck] = useState(false)

  const handleCheckboxChange = () => {
    setCheck(!check)
  }

  return (
    <section className="flex flex-col items-center">
      <div className="flex gap-2 items-center h-24 mb-14">
        <p
          className={`w-[500px] text-right ${
            check ? 'text-xl' : 'font-bold text-5xl'
          }`}
        >
          Billed Monthly
        </p>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={check}
            onChange={handleCheckboxChange}
          />
          <div className="relative w-20 h-11 bg-amber-400 peer-focus:outline-none peer-focus:ring-1 ring-grey rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px]  after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-9  after:w-9 after:transition-all dark:border-gray-600"></div>
        </label>
        <p className={`w-[500px] ${check ? 'font-bold text-5xl' : 'text-xl'}`}>
          Billed Yearly <span className="text-xl items-center">(save 15%)</span>
        </p>
      </div>
      <div className="flex gap-6 text-left text-xl">
        {prices.map((price) => (
          <div
            key={price.title}
            className={`p-8 text-left border-2  rounded-xl bg-gradient-to-tl from-neutral-100 max-w-[500px] h-max ${
              price.title === 'Pro' ? 'border-amber-400' : 'border-neutral-200'
            }`}
          >
            <h3 className="text-[34px] font-bold">{price.title}</h3>
            <p className="text-[38px] my-8 font-bold">
              {check ? price.yearly : price.monthly}
              <span>{check ? '/ year' : '/ month'} </span>
              <span className="line-through">
                {check && price.title === 'Pro' ? '($144)' : ''}
              </span>
            </p>
            <p className="">{price.description}</p>
            <div className="border-[1px] border-grey w-full my-12" />
            <ul className="flex flex-col gap-4 list-disc list-inside">
              {price.included.map((item) => (
                <li key={`${price.title}-${item}`}>{item}</li>
              ))}
            </ul>
            <button className="w-full py-3 mt-8 bg-amber-400 rounded-full text-white outline -outline-offset-1 hover:outline-offset-4 outline-amber-400 hover:shadow-def hover:shadow-amber-200 hover:outline-amber-400/0 ease-in-out duration-500">
              {price.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
