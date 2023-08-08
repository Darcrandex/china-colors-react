/**
 * @name Main
 * @description
 * @author darcrand
 */

export default function Main() {
  return (
    <>
      <section className='flex h-screen'>
        <main className='flex-1 flex flex-col justify-between'>
          <header></header>
          <article>中国色</article>
          <footer>china colors</footer>
        </main>

        <aside className='w-60 shrink-0 bg-red-200'></aside>
      </section>
    </>
  )
}
