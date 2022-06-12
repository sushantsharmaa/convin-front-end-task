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
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "4rem",
        }}
      >
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
