type CaloriListProps = {
    caloris: number
}

export const CaloriList = ({caloris} : CaloriListProps)=>{
    return(
        <div className="bg-white p-2 rounded-xl capitalize">
            <p className="text-2xl font-bold">{caloris}</p>
            <p className="underline font-medium">calorias</p>
        </div>
    )
}