import react, { Component, useEffect, useState } from "react";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  // key - i
  // - render Component
  // useEffect();
  // start timer => make api call after 200 ms

  //setTimeout(200) - make an api call

  // key - it
  // render Component
  // useEffect()

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="Hamberger img"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAABLS0vPz8+Wlpb39/ehoaHu7u6NjY3n5+eCgoKsrKy+vr7IyMjv7+8vLy9ycnJbW1t4eHgYGBg5OTnb29tiYmIxMTEJCQlQUFCRkZEfHx+4uLg/Pz8QEBA4ODiTPnadAAACe0lEQVR4nO3dCW7CMBCF4bQQlpawltK9979lRSOEKqqxwZZGb/J/J3ijxCF2BrtpAAAAAAAAAAAAAAAAACC+djHb3OvYzBbtVfXNt3d6tvP8AmfeYW80y71BV95Jb7bKulXbnXfOArtlRoXf3imLPKULfPDOWOghVeDeO2GxfaLCZ++AxZ7tAqfe+SqYmhU+eser4NGscO0dr4K1WaHuj/3ZwazwxTteBS9mhd7pqjArVH5jO9mZFb56x6vg1azwzTteBW9mhSPveBWMzAqbd+98xd7tApuJd8Bik0SF8hcxdQn1R2JiFB5pv3zbr90BhmJyEPYW3jlvtsgrsGmWmpOodc5C28l8rDaPWo2vWPLutfuRjv11Xy0AAAAAAAAAAICUaTcZ65h0ds/lpQ+91qH7jyvq69Q+rfVWXW6Bus3syTb23sY7Z4FNToGaX7hP7AbhX9rNJhntJvrN+ql2Bd2nzEniadN656vAblrQbRY6s9uG9G/S1G366R2vgk+zwi/veBV8mRV6p6ti4Ncw/jiM/yyN/3sY/50mwG2amgUvvQMWS7ZCh58fDmCOr/2X/Kx1GuWnTeZa2wDWS5v4a95H0b9bAAAAAAAAAAAAIcH3iYq+11f4/dp024Yy99wLv2+idrtJRrNJ/P1Lw+9BqzwIe6mhqH4JkxdRfRQe2SMx/p7seo1Cl+x99eOfjeCdrgqzwvhnlKjNmf5jnzOjOW36y24T1n7t7tkv3/p/A06d2SXd5N1LnLs2gLPzhNvYexnN7E/eGYtknGEpfg5p3lGrB++cNzvkLgxHPw+4GcCZzsdbtRM7l7vjhAsAAAAAAAAAAAAAAAAAQ/ADAnZUjrcBInYAAAAASUVORK5CYII="
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="youtube logo"
            src="data:image/png;base64,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"
          />
        </a>
      </div>
      <div className="col-span-10 px-14">
        <div>
          <input
            className="px-5 w-1/2 border rounded-l-full border-gray-400 p-2"
            type="text"
            value={searchQuery}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="border border-gray-400 rounded-r-full px-5 bg-gray-100 py-2">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed border-gray-100 border bg-white py-2 px-2 w-[37rem] shadow-sm rounded-lg">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="shadow-sm py-2 px-3 hover:bg-gray-100">
                  🔍{s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="data:image/png;base64,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"
        />
      </div>
    </div>
  );
};
export default Head;
