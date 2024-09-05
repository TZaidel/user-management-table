import React, { ChangeEvent } from "react";

import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/usersSlice.ts";

import css from "./FilterInput.module.css";

export default function FilterInputs() {
  const dispatch = useDispatch();
  const onFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    const value = e.target.value;
    dispatch(changeFilter({ key, value }));
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Filter</h2>
      <div className={css.inputWrap}>
        <label htmlFor="name" className={css.label}>
          Name
        </label>
        <input
          name="name"
          type="text"
          id="name"
          onChange={onFilterChange}
          className={css.input}
        />

        <label htmlFor="username" className={css.label}>
          Username
        </label>
        <input
          name="username"
          type="text"
          id="username"
          onChange={onFilterChange}
          className={css.input}
        />

        <label htmlFor="email" className={css.label}>
          Email
        </label>
        <input
          name="email"
          type="text"
          id="email"
          onChange={onFilterChange}
          className={css.input}
        />

        <label htmlFor="phone" className={css.label}>
          Phone
        </label>
        <input
          name="phone"
          type="number"
          id="phone"
          onChange={onFilterChange}
          className={css.input}
        />
      </div>
    </div>
  );
}
