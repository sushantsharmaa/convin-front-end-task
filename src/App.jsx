import "./app.css";
import { useEffect } from "react";
import Home from "./components/Home/Home";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./features/Users/usersSlice";

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="app">
      <Home />
    </div>
  );
}

export default App;
