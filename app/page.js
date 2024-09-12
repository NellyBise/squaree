import Header from "./components/Header";
import Card from "./components/Card";
import ReviewCard from "./components/ReviewCard";
import Image from "next/image";

import data from './data/apps.json'
const firstRow = [null, ...data.slice(0, 3), null];
const secondRow = [null, ...data.slice(3), null];
import reviews from './data/usersReview.json'

import carte1 from "./src/carte1.png"
import carte2 from "./src/carte2.png"
import carte3 from "./src/carte3.png"
import carte4 from "./src/carte4.png"
import carte5 from "./src/carte5.png"
import companies from "./src/companies.png"
import graph from "./src/graph.png"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header></Header>

      <section className="text-center mt-24">
        <h1 className="text-[78px] leading-tight mb-6">Predictable <br/>
        growth starts here</h1>
        <p className="text-sm mb-24">Squaree helps users to go from Zero to Hero with Pockets flow’s simple platform that helps <br/>creators like you sell their digital products online.</p>
{/* animation arrêtée avec - devant animate */}
        <div className="flex justify-center gap-12 -animate-refine-slide relative transition-all hover:animation-pause">
            <div className="relative hover:scale-105 duration-300"><Image src={carte1} alt="carte 1"/></div>
            <div className="relative"><Image className="relative top-20 hover:scale-105 duration-300" src={carte2} alt="carte 2"/></div>
            <div className="relative"><div className="relative -top-5"><Image className="mb-12 hover:scale-105 duration-300" src={carte3} alt="carte 3"/><Image className="hover:scale-105 duration-300" src={carte4} alt="carte 4"/></div></div>
            <div className="relative hover:scale-105 duration-300"><Image className="relative top-40 -left-20" src={carte5} alt="carte 5"/></div>
        </div> 
      </section>

      <section className="text-center mt-48">
        <p className="text-xl font-dmsans text-black/50 my-12 ">We have the fast paced growing companies with us</p>
        <Image className="mx-auto" src={companies} alt="companies"/>
      </section>

      <section className="text-center mt-32">
      <h2 className="text-5xl leading-tight mb-4">Turn  your growth in to Squaree</h2>
        <p className="text-lg mb-12 ">The expectation that productivity should always lead to tangible results or accomplishments & <br/>notion that certain types of work or activities are more valuable or productive than others.</p>
        <Image className="mx-auto" src={graph} alt="graphic"/>
        <article className="flex justify-center">
          <div className="max-w-40 text-center">
            <p className="font-dmsans font-bold text-[58px]">200%</p>
            <p className="">Increase in new pipeline generated</p>
          </div>
          <div className="max-w-40 text-center mx-[118px]">
            <p className="font-dmsans font-bold text-[58px]">70%</p>
            <p className="">Increase in form workforce</p>
          </div>
          <div className="max-w-40 text-center">
            <p className="font-dmsans font-bold text-[58px]">40%</p>
            <p className="max-w-24 text-center">Decrease in cost per lead</p>
          </div>
        </article>
        <button className="group relative my-12 rounded-full py-3 px-6 bg-amber-400 text-white font-bold font-inter hover:bg-amber-500 focus:outline-none">
          Explore our way 
          <span className="moving-span inline-block transition-transform duration-300 transform group-hover:translate-x-2">
            &rarr;
          </span>
        </button>
      </section>

      <section className="flex justify-center gap-[100px] mt-32">
        <div className="max-w-[580px] w-1/2">
          <h2 className="text-5xl leading-tight mb-4">Know your productivity by Squaree</h2>
          <p className="text-lg mb-12 w-4/5">The expectation that productivity should always lead to tangible results or accomplishments.</p>
        </div>
        <div className="max-w-[580px] w-1/2">
           image
          </div>

      </section>

      <section className="flex justify-center gap-[100px] mt-32">
        <div className="">
          <div className="flex gap-10 justify-center mb-10" >
          {firstRow.map((item, index) => (
            <Card key={index} name={item?.name} image={item?.img} />
          ))}
          </div>
          <div className="flex gap-10 justify-center">
          {secondRow.map((item, index) => (
            <Card key={index + 6} name={item?.name} image={item?.img} />
          ))}
          </div>
        </div>
        
        <div className="w-1/3">
          <h2 className="text-5xl leading-tight mb-4 w-4/5">Seamless integration with best apps</h2>
          <p className="text-lg mb-12">What ever you use, we integrate with the best of best</p>
        </div>
      </section>

      <section className="text-center mt-32">
        <h2 className="text-5xl leading-tight mb-4">What Squaree users say</h2>
        <p className="text-lg mb-12 ">Here is how homely can help you</p>
            <article className="flex justify-center flex-wrap gap-10">
              {reviews?.map((review)=>(<ReviewCard key= {review.title} review={review}/>))}
            </article>
      </section>

    </main>
  )
}
