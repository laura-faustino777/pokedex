export function Welcome() {
  return (
    <main>
      
      <div className="bg-red-700 justify-center ">
        <h1 className= "align-text-top  text-white ">POKEDEX</h1>
        <h1 className="justify-self-end align-text-top text-white">Home Pokemons Tipos</h1>
      
      </div>
       
       <div className="flex flex-col justify-between bg-red-100 min-h-[calc(107.7vh-107.7px)] ">
      <div className="  h-14  px-6 flex-initial  rouded-xl justify-items-end ">
     <h1></h1>
      <button className=" align-text-top px-10  bg-amber-50 rounded-full">Buscar________________________________________________________________________________________</button>

      </div>


      <div className="box-border size-50  flex justify between p-5 content-between gap-20 " >
    <button className=" border-4 flex justify between p-10 bg-amber-400 shadow-xl/30">
      
<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Pikachu" className="w-40 h-40 mx-auto mb-2" />
    <h1>Pikachu</h1>
    <button className="   bg-orange-400">Elétrico</button>
   
    </button>
      
      <button className=" flex justify between p-10 border-4 bg-green-600 shadow-xl/30"> 
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Bulbasaur" className="w-40 h-40 mx-auto mb-2" />
        <h1>Bulbasar</h1>
        <button className="bg-green-700 rounded-full">Planta</button>

      </button>


      <button className=" flex justify between p-10 border-4 bg-pink-500 shadow-xl/30">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="Charmander" className="w-40 h-40 mx-auto mb-2" />
      <h1>Charmander</h1>
      <button className="bg-pink-300">Fogo</button>

      </button>
        
      <button className=" flex justify between p-10 border-4 bg-blue-600 shadow-xl/30">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="Squirtle" className="w-40 h-40 mx-auto mb-2" />
      <h1>Squirtle</h1>
      <button className="bg-blue-950">Água</button>
        </button>

      </div>


        <div className= "  flex justify-center bg-blue-900 p-3">
        <h1 className="justify-center text-white ">Pokedex - React + Tailwind</h1>
        </div>

          </div>
    </main>
  );
}
