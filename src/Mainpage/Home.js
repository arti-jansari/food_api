import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './index.css'
const Home = () => {
  const [user, setUser] = useState([]);
  const Fetchdata = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((Response) => Response.json())
      .then((data) => setUser(data.categories));
  };
  useEffect(() => {
    Fetchdata();
  });
  return (
    <div className="home">
      {user &&
        user.length > 0 &&
        user.map((value, index) => (
          <div className="card">
            <div className="imagediv">
              <img src={value.strCategoryThumb} />
            </div>
            <Link to={value.strCategory}><div className="name">{value.strCategory}</div></Link>
           
          </div>
        ))}
    </div>
  );
};
export default Home;
