import MovieList from "./MovieList";
import data from "./Film.json";
import "./App.css";

function App() {
  // console.log(data);
  return (
    <>
      <div className="p-4 divdiv">
        <h1 className="text-center font-mono text-5xl text-white drop-shadow-4xl">
          Movie Box - Your Own Theater
        </h1>
      </div>
      <div className="p-10 w-full h-auto wrapper-main-div">
        {data.map((film) => {
          return <MovieList data={film} />;
        })}
      </div>
    </>
  );
}

export default App;
