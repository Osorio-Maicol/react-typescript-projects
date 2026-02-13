import { ButgetItem } from "./ButgetItem"

export const ButgetTraker = ()=>{
    return(
        <section className="grid grid-cols-2">
            <div>
                    imgane 
            </div>
            <div className="flex flex-col justify-between w-full space-y-3">
                <button className="text-xl capitalize bg-purple-500 text-white font-extrabold px-2 py-1 rounded-md hover:text-shadow-black text-shadow-md ring-1 ring-black hover:shadow-black hover:shadow-md cursor-pointer duration-300">resetar app</button>
                <ButgetItem
                    label={"total"}
                    butget={3000}                    
                />
                <ButgetItem
                    label={"consumido"}
                    butget={300}                    
                />

                <ButgetItem
                    label={"restante"}
                    butget={500}                    
                />

            </div>
        </section>
    )
}