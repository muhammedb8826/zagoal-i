"use client";
import { useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [isSynced, setIsSynced] = useState(false);

  // Step 1: Create a new branch
  // Step 2: Do tasks
  // Step 3: Commit your changes using appropriate commit message
  // Step 4: Push your changes to the remote repository
  // Step 5: Create a pull request using your full name as a title

  // Bonus:
  // - Add the type of items state
  // - Make this root page server-side component

  const USER_API = "https://jsonplaceholder.typicode.com/users";

  // TODO: Implement function to handle sync button click
  const handleSyncData = async () => {
    // ...
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
      {/* TODO: Implement UsersList component */}
      {/* TODO: Implement ItemForm component */}
    </div>
  );
}
