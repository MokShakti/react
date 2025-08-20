import CategoryCard from '../components/CategoryCard';

export default function Home() {
   return (
      <main className='page'>
         <section className='categories'>
            <h2 className='categories__title'>Shop by Category</h2>
            <div className="category__list">
               <CategoryCard category="lipsticks" image="ROUGE-ALLURE-L-EXTRAIT.avif" label="Lipsticks" />
               <CategoryCard category="perfumes" image="n5.webp" label="Perfumes" />
            </div>
         </section>
      </main>
   );
}
