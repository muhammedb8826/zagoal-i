"use client";
import { useState } from "react";

type TUser = {
  email: string;
  id: number;
  name: string;
};

export default function Home() {
  const [users, setUsers] = useState<TUser[]>([]);
  const [isSynced, setIsSynced] = useState(false);
  const [syncing, setSyncing] = useState(false);

  // Step 1: Create a new branch
  // Step 2: Do tasks
  // Step 3: Commit your changes using appropriate commit message
  // Step 4: Push your changes to the remote repository
  // Step 5: Create a pull request using your full name as a title

  // Bonus:
  // - Add the type of items state
  // - Make this root page server-side component

  const USER_API = "https://jsonplaceholder.typicode.com/users";

  const renderHeader = (title: string) => {
    return (
      <h2 className="text-2xl font-semibold pb-[1rem] border-b-2 mb-4">
        {title}
      </h2>
    );
  };

  const renderInput = (
    value: "name" | "email",
    placeholder: "Name" | "Email"
  ) => {
    return (
      <input
        name={value}
        type={value === "name" ? "text" : "email"}
        className="outline-none rounded  border-2 p-2 border-gray-200 focus:border-black"
        placeholder={placeholder}
        required
      />
    );
  };

  // TODO: Implement function to handle sync button click
  const handleSyncData = async () => {
    // ...
    setSyncing(true);
    try {
      const res = await fetch(USER_API);
      const data = await res.json();
      setIsSynced(true);
      setUsers(data);

      setTimeout(() => {
        setIsSynced(false);
      }, 200);
    } catch {
      console.error("Error syncing");
    } finally {
      setSyncing(false);
    }
  };

  const handleDelete = async (id: number) => {
    setUsers((prev) => prev.filter((pu) => pu.id !== id));
  };

  const handleAdd = (newUser: Omit<TUser, "id">) => {
    const id = Math.random() * 100;
    setUsers((prev) => [...prev, { ...newUser, id }]);
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-semibold mb-4">Simple CRUD Application</h1>
      <button
        className="mb-6 w-full sm:w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-medium p-2 rounded-lg"
        onClick={handleSyncData}
      >
        Sync
      </button>

      {isSynced && (
        <p className="text-green-500 text-center mb-2">Synced successfully!</p>
      )}

      <div className="flex justify-between gap-[3.5rem] ">
        <div className="w-full ">
          {renderHeader("Users List")}
          {syncing ? (
            <div className=" text-blue-400 text-center">Loading...</div>
          ) : (
            users.map((user) => {
              return (
                <div
                  key={user.id}
                  className="border-0 rounded bg-gray-200 p-4 justify-between flex mb-4"
                >
                  <div>
                    <p>{user.name}</p>
                    <p className="text-gray-500">{user.email}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="text-red-500 hover:text-red-900"
                  >
                    Delete
                  </button>
                </div>
              );
            })
          )}
        </div>

        <div className="w-full">
          {renderHeader("Add New User")}
          <form
            className="flex flex-col gap-4"
            action={(formData) => {
              const newUser: Omit<TUser, "id"> = {
                name: formData.get("name") as string,
                email: formData.get("email") as string,
              };
              handleAdd(newUser);
            }}
          >
            {renderInput("name", "Name")}
            {renderInput("email", "Email")}
            <button
              type="submit"
              className="bg-blue-500 rounded-lg p-2 text-white hover:bg-blue-600"
            >
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
