import clsx from "clsx";
import Image from 'next/image'
import { Colors } from "./index";

export function GameCell({ cell, selected, onClick }) {
    return (
        <div
            className={clsx(
                "w-16 h-16 flex justify-center items-center", 
                cell.color === Colors.BLACK ? "bg-gray-900" : "bg-orange-200", 
                selected ? "ouline-[2p_solid_red]" : '' // ??
            )}
            onClick={() => onClick(cell)}
            style={{ background: cell.available && cell.figure ? 'green' : '' }}
        >
            {cell.available && !cell.figure && <div className={"available"} />}
            {cell.figure?.logo && <Image src={cell.figure.logo} alt="фигура не найдена" className="w-14 h-14 relative"/>
            }
        </div>
    )
}
