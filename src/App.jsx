import './App.css';
import useFetchCharacters from './hooks/useFecthCharacters';


function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

const {character, error, isLoading} = useFetchCharacters(urlPokemon)
const {character:rickCharacter, error:errorRick, isLoading:isLoadingRick} = useFetchCharacters(urlRick)


  if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }


    return (
        <>
            <h1>Personaje</h1>
            <p>Nombre: {character.name}</p>
            <img src={character.sprites.front_default} />
            <h1>Personaje</h1>
            <p>Nombre: {rickCharacter.name}</p>
            <img src={rickCharacter.image} />
        </>
    );
};



export default App;
