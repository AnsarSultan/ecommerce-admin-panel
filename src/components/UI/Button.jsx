export default function Buttton({children}){
    return(
        <button className="flex items-center gap-1 mx-2 border-1 border-gray-300 cursor-pointer px-2 py-1 rounded-md shadow-sm hover:shadow-lg">{children}</button>
    )
}