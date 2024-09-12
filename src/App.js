import React from "react";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-100">
      <header className="flex justify-between bg-black p-4 shadow-md">
        <h1 className="text-white text-3xl font-bold">SenaiNews</h1>
        <nav className="flex gap-8">
          <a className="text-white text-lg hover:text-red-700 transition duration-300" href="#">Home</a>
          <a className="text-white text-lg hover:text-red-700 transition duration-300" href="#">Sobre</a>
          <a className="text-white text-lg hover:text-red-700 transition duration-300" href="#">Contato</a>
        </nav>
      </header>

      <main className="mx-4 flex-1">
        <h1 className="mt-8 text-2xl font-black text-slate-800">Principais Notícias</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src="https://150367464.v2.pressablecdn.com/wp-content/uploads/2023/12/Historia-do-Corinthians.jpg" alt="Gaviões da Fiel" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-slate-950">Gaviões da Fiel</h3>
              <p className="mt-2 text-gray-600">Lealdade, Humildade e Procedimento</p>
              <a className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300" href="#">Ver mais</a>
            </div>
          </div>

          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src="https://i0.wp.com/maquinadoesporte.com.br/wp-content/uploads/2024/09/Design-sem-nome-2024-09-02T153429.636.png?fit=1024%2C512&ssl=1" alt="Gaviões da Fiel" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-gray-800">Gaviões da Fiel</h3>
              <p className="mt-2 text-gray-600">Lealdade, Humildade e Procedimento</p>
              <a className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300" href="#">Ver mais</a>
            </div>
          </div>


          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src="https://s.calendarr.com/upload/datas/co/ri/corinthians_c.jpg?auto_optimize=low&width=640" alt="Gaviões da Fiel" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-slate-950">Gaviões da Fiel</h3>
              <p className="mt-2 text-gray-600">Lealdade, Humildade e Procedimento</p>
              <a className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300" href="#">Ver mais</a>
            </div>
          </div>

          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src="https://cdn.meutimao.com.br/fotos-do-corinthians/w941/2021/06/30/mosaico_na_neo_quimica_arena_para_o_duelo_entre_pflv.jpg" alt="Gaviões da Fiel" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-slate-950">Gaviões da Fiel</h3>
              <p className="mt-2 text-gray-600">Lealdade, Humildade e Procedimento</p>
              <a className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300" href="#">Ver mais</a>
            </div>
          </div>

          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/05/corinthians-campanha-lgbt-1-e1684345850421.png?w=1024" alt="Gaviões da Fiel" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-gray-800">Gaviões da Fiel</h3>
              <p className="mt-2 text-gray-600">Lealdade, Humildade e Procedimento</p>
              <a className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300" href="#">Ver mais</a>
            </div>
          </div>


          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src="https://centraldotimao.com.br/wp-content/uploads/2021/05/mosaico-capa.jpg" alt="Gaviões da Fiel" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-gray-800">Gaviões da Fiel</h3>
              <p className="mt-2 text-gray-600">Lealdade, Humildade e Procedimento</p>
              <a className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300" href="#">Ver mais</a>
            </div>
          </div>

        </div>
      </main>

      <footer className="bg-black text-white text-center p-4 mt-10">
        <h4 className="text-lg">Todos os direitos reservados - 2024</h4>
      </footer>
    </div>

  );
}

export default App;
