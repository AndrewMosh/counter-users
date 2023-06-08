import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersError,
} from "../store/UserSlice";
import { useEffect } from "react";
import axios from "axios";
import { User } from "../store/types";
import { RootState } from "../store/store";

const UserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersStart());

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch(fetchUsersSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchUsersError(error.message));
      });
  }, [dispatch]);

  const { users, loading, error } = useSelector(
    (state: RootState) => state.user
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          {user.name} ({user.email})
        </div>
      ))}
    </div>
  );
};
export default UserList;
