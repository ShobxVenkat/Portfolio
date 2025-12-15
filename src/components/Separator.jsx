  import clsx from "clsx"

const Separator = ({icon , classname}) => {
  return (
   <div 
   className={clsx(
    "my-12 md:my-20 w-full flex items-center justify-center",
    classname
   )}
   >
    <hr className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-[#61cc9c]/50 to-transparent border-0"/>

   <div
   className="border-2 border-[#61cc9c]/50 p-2 rounded-2xl font-semibold">
    {icon}</div>

   <hr className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-[#61cc9c]/50 to-transparent border-0" />


   </div>
  )
}

export default Separator