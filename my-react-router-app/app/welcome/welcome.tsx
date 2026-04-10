export function Welcome() {
  return (
    <main>
      
      <div className="bg-red-700 justify-center">
        <h1 className= "align-text-top px-7">POKEDEX</h1>
        <h1 className="justify-self-end align-text-top ">Home Pokemons Tipos</h1>
      
      </div>

      <div className="  h-14  px-6 flex-initial  rouded-xl justify-items-end ">
     <h1></h1>
      <button className=" align-text-top px-6 outline-2 outline-offset-2 bg-red-800">Buscar</button>


      </div>


      <div className="box-border size-50  flex justify between p-5 content-between gap-20" >
    <button className=" border-4 flex justify between p-10 bg-amber-400">
    <h1>Pikachu</h1>
    <button className="   bg-orange-400">Elétrico</button>
   
    </button>
      
      <button className=" flex justify between p-10 border-4 bg-green-600">
        <h1>Bulbasar</h1>
        <button className="bg-green-700">Planta</button>

      </button>


      <button className=" flex justify between p-10 border-4 bg-pink-500">
      <h1>Charmander</h1>
      <button className="bg-pink-300">Fogo</button>

      </button>
        
      <button className=" flex justify between p-10 border-4 bg-blue-600">
      <h1>Squirtle</h1>
      <button className="bg-blue-400">Fogo</button>
        </button>

      </div>


    </main>
  );
}
