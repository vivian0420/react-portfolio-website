
import { projectsData } from '@/app/lib/data'
import Image from 'next/image'

type ProjectProps = typeof projectsData[number];
export default function Project({ title, description, tags, imageUrl }: ProjectProps) {
    return <section className='group bg-gray-100 max-w-[45rem] border border-black/5 overflow-hidden
    sm: pr-8 relative sm:h-[23rem] mb-3 sm:mb-8 last:mb-0 even:pl-8 hover:bg-gray-200 transition rounded-lg'>
        <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[20rem]'>
        <h3 className='text-2xl font-semibold'>{title}</h3>
        <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
        <ul className='flex flex-wrap gap-2 mt-4 sm:mt-auto'>
            {tags.map((tag, index)=> (
                <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white
                rounded-full " key={index}>{tag}</li>
            ))}
        </ul>
        </div>
        <Image src={imageUrl} alt='project picture' quality={95} className='absolute top-6 -right-40 w-[28.25rem] rounded-t-lg 
        shadow-2xl group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3
        group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:rotate-2 group-even:group-hover:translate-y-3 hover:scale-105 transition'/>
    </section>
}