import React, { useState } from "react";
// import books from "../data/book-list.json";
import Categories from "../data/Categories";
// import PageTitle from "./header/page-title";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(Categories);
  const [searchBook, setSearchBook] = useState("");

  const filterResult = (catItem) => {
    const results = Categories.filter((curDate) => {
      return curDate.category === catItem;
    });
    setData(results);
  };

  return (
    <>
      {/* <PageTitle title={"Home"} /> */}
      <div className="flex justify-between px-72 items-center">
        <div className="flex gap-x-4 mt-4 justify-center">
          <button
            className="active:border-b border-amber-300 focus:border-b border-amber-300"
            onClick={() => setData(Categories)}
          >
            All
          </button>
          <button
            className="active:border-b border-amber-300 focus:border-b border-amber-300"
            onClick={() => filterResult("Biography")}
          >
            Biography
          </button>
          <button
            className="active:border-b border-amber-300 focus:border-b border-amber-300"
            onClick={() => filterResult("Comedy")}
          >
            Comedy
          </button>
          <button
            className="active:border-b border-amber-300 focus:border-b border-amber-300"
            onClick={() => filterResult("Novel")}
          >
            Novel
          </button>
        </div>
        <div className="mt-2">
          <input
            className="pl-16 w-full h-8 p-4 rounded-full border border-softGray bg-white placeholder:text-baseBlack placeholder:text-base"
            type="text"
            name="search"
            autoComplete="off"
            placeholder="Search Books"
            onChange={(event) => {
              setSearchBook(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex w-full justify-center mt-auto w-2/3 container mx-auto px-10">
        <div>
          {data
            // eslint-disable-next-line array-callback-return
            .filter((values) => {
              if (searchBook === "") {
                return values;
              } else if (
                values.bookName
                  .toLowerCase()
                  .includes(searchBook.toLocaleLowerCase())
              ) {
                return values;
              }
            })
            .map((values) => {
              const { id, author, bookName, image, description } = values;
              return (
                <div
                  className="grid grid-cols-2  border-b border-stone-500 p-20"
                  key={id}
                >
                  <div className="flex justify-center">
                    <img src={image} alt={bookName} className="" />
                  </div>

                  <div className="px-10">
                    <h1 className="pb-1 text-2xl">{bookName}</h1>
                    <h6 className="pb-4 text-base font-bold">By: {author}</h6>
                    <p className="text-sm">{description}</p>
                  </div>

                  <div className="pt-2">
                    <Link to={id}>
                      <button className="w-full border hover:border-amber-300 hover:text-amber-300 rounded p-1 text-sm">
                        Edit Book
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
