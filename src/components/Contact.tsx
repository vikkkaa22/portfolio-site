export default function Contact() {
 return (
  <section
  id="contact"
  className="section">

   <h2 className="pixel text-3xl mb-10">
     СВЯЗАТЬСЯ
   </h2>

   <form className="
   max-w-2xl
   glass
   p-8
   rounded-3xl">

    <input
    placeholder="Ваше имя"
    className="
    w-full
    p-4
    mb-4
    bg-zinc-900
    rounded-xl"
    />

    <input
    placeholder="Телеграм"
    className="
    w-full
    p-4
    mb-4
    bg-zinc-900
    rounded-xl"
    />

    <textarea
    placeholder="Сообщение"
    className="
    w-full
    p-4
    h-40
    bg-zinc-900
    rounded-xl"
    />

    <button
    className="
    mt-6
    bg-pink-500
    text-black
    px-8
    py-4
    rounded-xl">

      Отправить заявку

    </button>

   </form>

  </section>
 )
}