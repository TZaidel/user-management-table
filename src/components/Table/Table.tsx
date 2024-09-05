import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/operations.ts";
import { AppDispatch, RootState } from "../../redux/store.ts";

import css from "./Table.module.css";

export default function Table() {
  const { users, filters, loading, error } = useSelector(
    (state: RootState) => state.users,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredUsers = users.filter(
    ({ name, username, email, phone }) =>
      name.toLowerCase().includes(filters.name.toLowerCase()) &&
      username.toLowerCase().includes(filters.username.toLowerCase()) &&
      email.toLowerCase().includes(filters.email.toLowerCase()) &&
      phone.includes(filters.phone),
  );

  return (
    <div className={css.container}>
      {loading ? (
        <h2 className={css.titleLoading}> Loading...</h2>
      ) : error ? (
        <h2 className={css.titleError}>Error. Something went wrong :(</h2>
      ) : (
        <div>
          <h2 className={css.title}>User management table</h2>
          <table className={css.table}>
            <thead className={css.tableHeader}>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody className={css.tableBody}>
              {filteredUsers.map(({ id, name, username, email, phone }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{username}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
