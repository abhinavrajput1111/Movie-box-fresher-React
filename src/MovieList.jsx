function MovieList(props) {
  return (
    <>
      <div id="wrapper" className="wrapper w-full h-auto px-10 ">
        <div
          id="container"
          className="container bg-gray-50 md:my-8 my-4 md:p-8 p-5 rounded-md"
        >
          <div className="box flex items-center justify-evenly">
            <div className="left md:w-1/2 w-full">
              <h1 className="md:text-4xl text-2xl font-semibold font-mono md:tracking-wide text-blue-900">
                {props.data.Title}
              </h1>
              <p className="italic my-2">{props.data.Genre}</p>
              <p className="font-semibold my-1">{props.data.Runtime}</p>
              <p className="italic my-2">
                Imdb Rating: {props.data.imdbRating}
              </p>

              <p className="my-2">
                <b className="mr-2">Description:</b>
                {props.data.Plot}
              </p>
            </div>
            <div className="right md:w-1/2 w-full flex justify-end">
              <img
                src={props.data.Images[0]}
                className="w-[80%] h-auto rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieList;
