import { formatCurrency } from "../Helpers/Formats"

export type ButgetItemProps = {
    label: string,
    butget: number
}

export const ButgetItem = ({ label, butget }: ButgetItemProps) => {
    return (
        <div className="w-full flex justify-between underline text-xl">
            <p className="capitalize">{label}</p>
            <span className="font-bold">{formatCurrency(butget)}</span>
        </div>
    )
}