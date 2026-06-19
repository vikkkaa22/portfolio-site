"use client"

import { useEffect, useState } from "react";


export default function Cursor(){

const [pos,setPos] = useState({
x:0,
y:0
});


useEffect(()=>{

const move = (e:MouseEvent)=>{

setPos({
x:e.clientX,
y:e.clientY
})

}

window.addEventListener(
"mousemove",
move
)


return ()=>{

window.removeEventListener(
"mousemove",
move
)

}

},[])


return(

<div

style={{
left:pos.x,
top:pos.y
}}

className="
fixed
pointer-events-none
z-[999]
w-8
h-8
rounded-full
border
border-cyan-400
shadow-[0_0_20px_#00F5FF]
-translate-x-1/2
-translate-y-1/2
transition-transform
duration-75
"

/>

)

}