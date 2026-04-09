export function Welcome() {
  return (
    <main>
      
      <div className="bg-red-700 justify-center">
        <h1 className= "align-text-top  ">POKEDEX</h1>
        <h1 className="justify-self-end align-text-top ">Home Pokemons Tipos</h1>
      
      </div>

      <div className="align-text-top  bg-amber-100 h-14 w-64 shrink">
     <h1>________Buscar</h1>



      </div>


      <div className="flex justify between p-3 justify-content: flex-start;" >
    <button className=" rounded-s-lg box-content size-32 bg-amber-400">
    <h1>Pikachu</h1>
    <button className="bg-orange-400">Elétrico</button>
   
    </button>
      
      <button className="rounded-s-lg box-content size-32 bg-green-600">
        <h1>Bulbasar</h1>
        <button className="bg-green-700">Planta</button>

      </button>


      <button className="bg-pink-500">
      <h1>Charmander</h1>
      <button className="bg-pink-300">Fogo</button>

      </button>
      </div>


    </main>
  );
}
