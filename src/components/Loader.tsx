"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function Loader(){

const [loading,setLoading] = useState(true);


useEffect(()=>{

const timer = setTimeout(()=>{

setLoading(false)

},2000)


return ()=>clearTimeout(timer)

},[])


if(!loading) return null;


return(

<motion.div

initial={{opacity:1}}

animate={{opacity:0}}

transition={{
delay:1.5,
duration:0.5
}}

className="
fixed
inset-0
z-[1000]
bg-black
flex
items-center
justify-center">

<div className="text-center">

<h1 className="
pixel
text-cyan-400
text-2xl">

DESIGN.EXE

</h1>


<p className="
mt-6
text-zinc-400">

LOADING SYSTEM...

</p>


<div className="
mt-5
w-64
h-2
bg-zinc-800
rounded">

<div className="
h-full
bg-cyan-400
animate-pulse
w-full
"/>

</div>


</div>


</motion.div>

)

}