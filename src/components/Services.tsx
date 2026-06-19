const services = [
 "Веб-дизайн",
 "SMM",
 "Брендинг",
 "Контент",
 "Motion Design"
]

export default function Services() {
 return (
  <section
  id="services"
  className="section">

   <h2 className="pixel text-3xl mb-10">
    НАВЫКИ
   </h2>

   <div className="grid md:grid-cols-5 gap-5">

    {services.map((skill)=>(
      <div
      key={skill}
      className="
      glass
      p-8
      rounded-2xl
      hover:scale-105
      transition">

        {skill}

      </div>
    ))}

   </div>

  </section>
 )
}