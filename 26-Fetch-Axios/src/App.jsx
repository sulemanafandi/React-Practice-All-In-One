// App.js
import { useEffect, useState } from 'react'
import { axiosInstance } from './axios'
import './App.css'

const App = () => {
  const [users, setUsers] = useState([]);
  const [formDetails, setFormDetails] = useState({
    name: '',
    age: '',
    editMode: false,
    id: null
  });

  // Handle input changes
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormDetails(prevDetails => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Fetch all users
  const fetchData = async () => {
    const response = await axiosInstance.get('/users');
    setUsers(response.data);
  };

  // Create new user
  const postData = async () => {
    if (!formDetails.name || !formDetails.age) {
      alert("Please fill all the details");
      return;
    }
    const { name, age } = formDetails;
    await axiosInstance.post('/users', { name, age });
    setFormDetails({ name: '', age: '', editMode: false, id: null });
    fetchData();
  };

  // Update existing user
  const editData = async () => {
    const { id, name, age } = formDetails;
    await axiosInstance.put(`/users/${id}`, { name, age });
    setFormDetails({ name: '', age: '', editMode: false, id: null });
    fetchData();
  };

  // Delete user
  const deleteUser = async (id) => {
    await axiosInstance.delete(`/users/${id}`);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-100 shadow-lg rounded-lg p-6">

        <h2 className="text-2xl font-bold text-gray-800 mb-4">User Form</h2>

        {/* Input Fields */}
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={handleOnChange}
          name="name"
          value={formDetails.name}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="number"
          placeholder="Enter Your Age"
          onChange={handleOnChange}
          name="age"
          value={formDetails.age}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Conditional Buttons */}
        {formDetails.editMode ? (
          <div className="flex gap-3">
            <button
              onClick={editData}
              className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg py-2 px-4 mb-6 transition"
            >
              Save
            </button>
            <button
              onClick={() => setFormDetails({ name: '', age: '', editMode: false, id: null })}
              className="w-1/2 bg-gray-400 hover:bg-gray-500 text-white font-semibold rounded-lg py-2 px-4 mb-6 transition"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={postData}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg py-2 px-4 mb-6 transition"
          >
            Post Data
          </button>
        )}

        <h2 className="text-xl font-bold text-gray-700 mb-4">User List</h2>

        {/* User List */}
        {users.map((userDetails) => (
          <div
            key={userDetails.id}
            className="bg-yellow-100 shadow-md rounded-lg p-4 mb-3 text-center hover:shadow-lg transition"
          >
            <p className="text-lg font-semibold text-gray-800">👤 {userDetails.name}</p>
            <p className="text-gray-600">🎂 Age: {userDetails.age}</p>

            <div className="flex justify-center gap-3 mt-3">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-3 py-1 text-sm transition"
                onClick={() => setFormDetails({ ...userDetails, editMode: true })}
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-3 py-1 text-sm transition"
                onClick={() => deleteUser(userDetails.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
