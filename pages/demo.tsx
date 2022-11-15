import React, { useState } from "react";
import styles from "../styles/Demo.module.css";

type AppProps = {
  message: string;
};

interface User {
  name: string;
  age: number;
}

type UserList = Array<{ name: string; age: number }>;

export default function Home({ message }: AppProps): JSX.Element {
  const [user, setUser] = useState<User>({ name: "", age: 0 } as User);

  const [userList, setUserList] = useState<UserList>([] as UserList);

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const target = event.target as HTMLTextAreaElement;
    setUser({ ...user, [target?.name]: target?.value });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const exist = userList.some((u) => u.name === user.name);
    if (exist) {
      return alert("User Already exists!");
    } else if (user.name === "" || user.age === 0) {
      return alert("please enter your name and age!");
    } else {
      setUserList([...userList, user]);
      setUser({ name: "", age: 0 });
    }
  };
  return (
    <main className={styles.main}>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <h2>Register</h2>
        <label className={styles.label}>Name</label>
        <input
          className={styles.input}
          name="name"
          type="text"
          value={user?.name}
          onChange={handleOnChange}
        />
        <label className={styles.label}>Age</label>
        <input
          className={styles.input}
          name="age"
          type="number"
          value={user?.age}
          onChange={handleOnChange}
        />
        <button className={styles.button} type="submit">
          Register
        </button>
      </form>
      <div className={styles.listHead}>
        <h3 className={styles.listTitle}>Registered Users</h3>
        <ul className={styles.unOrdered}>
          {userList.length > 0 ? (
            userList.map((user,index) => {
              return (
                <li key={index} className={styles.listItem}>
                  {user.name} of age {user.age}
                </li>
              );
            })
          ) : (
            <li className={styles.listItem}>No any user registered!</li>
          )}
        </ul>
      </div>
    </main>
  );
}
