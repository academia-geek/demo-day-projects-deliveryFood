import HeaderLanding from "../components/landingPage/HeaderLanding";

import "../styles/landingPage.css";

export default function Home() {
  return (
    <>
      <HeaderLanding />
      <main className="mx-20 my-20">
        <h1 className="uppercase text-2xl text-center">
          nuestros mejores productos
        </h1>
        <div className="mt-10 flex flex-col gap-10">
          <div className="category-1 categories p-4">
            <img src="" alt="" />
            <h2>Categoria #</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
              magnam quo, expedita optio eaque, rem eius fugit blanditiis ab
              modi accusantium quaerat.
            </p>
          </div>
          <div className="categories p-4">
            <img src="" alt="" />
            <h2>Categoria #</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
              magnam quo, expedita optio eaque, rem eius fugit blanditiis ab
              modi accusantium quaerat.
            </p>
          </div>
          <div className="categories p-4">
            <img src="" alt="" />
            <h2>Categoria #</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
              magnam quo, expedita optio eaque, rem eius fugit blanditiis ab
              modi accusantium quaerat.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
