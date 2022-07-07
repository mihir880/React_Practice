import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <>
      <Card className={classes.users}>
        <ul>
          {props.users.map((iuser) => (
            <li key={iuser.id}>
              {iuser.user} ({iuser.age} years old)
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
};

export default UserList;
