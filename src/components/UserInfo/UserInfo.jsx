import "./userInfo.css";

const UserInfo = ({ user }) => {
  if (user.first_name === "") {
    return (
      <div className="userInfo-main">
        <h1>Waiting...</h1>
      </div>
    );
  }
  return (
    <div className="userInfo-main">
      <div className="userInfo-left">
        <img src={user.avatar} alt={user.name} />
      </div>
      <div className="userInfo-right">
        <h2>
          {user.first_name} {user.last_name}
        </h2>
        <h4>{user.email}</h4>
      </div>
    </div>
  );
};

export default UserInfo;
