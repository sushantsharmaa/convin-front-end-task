import "./home.css";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import UserInfo from "../UserInfo/UserInfo";

const Home = () => {
  const { users } = useSelector((store) => store.users);

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  const getUserInfo = (id) => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => setUser(res.data.data));
  };

  return (
    <div className="home-main">
      <h2>GET INFORMATION ABOUT THE USER BY CLICKING ON THE BUTTON</h2>
      <div className="data-container">
        <div className="home-left">
          {users.map((user) => {
            return (
              <button
                onClick={() => getUserInfo(user.id)}
                className="btn"
                key={user.id}
              >
                {user.id}
              </button>
            );
          })}
        </div>
        <div className="home-right">
          <UserInfo user={user} />
        </div>
      </div>
    </div>
  );
};

export default Home;
