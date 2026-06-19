const steps = [
 "Бриф",
 "Исследование",
 "Концепция",
 "Дизайн",
 "Запуск"
]

export default function Process() {
 return (
  <section className="section">

   <h2 className="pixel text-3xl mb-10">
    ПРОЦЕСС
   </h2>

   <div className="flex flex-col gap-6">

    {steps.map((step,index)=>(
      <div
      key={step}
      className="
      glass
      p-6
      rounded-2xl">

        LVL {index+1}
        <br/>
        {step}

      </div>
    ))}

   </div>

  </section>
 )
}