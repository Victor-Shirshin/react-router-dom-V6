import { Link, Navigate, Outlet, Route, Routes, useParams } from "react-router-dom";

const users = [
  { id: 1, name: 'user 1' },
  { id: 2, name: 'user 2' },
  { id: 3, name: 'user 3' },
  { id: 4, name: 'user 4' },
  { id: 5, name: 'user 5' }
]

const NavBar = () => {
  return (
    <ul>
      <li><Link to="/">Home Page</Link></li>
    </ul>
  )
}

const UsersLayout = () => {
  return (
    <>
      <h2>Users Layout</h2>
      <Outlet />
    </>
  );
};

const HomePage = () => {
  return (
    <>
      <h2> Home Page</h2>
      <li><Link to="/users">Users list Page</Link></li>
    </>
  )
}

const UsersListPage = () => {
  return (
    <>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
        ))}
      </ul>
      <li><Link to="/">Home Page</Link></li>
    </>
  )
}

const UserPage = () => {
  const { userId } = useParams();
  return (
    <>
      <h2>User Page</h2>
      <ul>
        <li><Link to="/users">Users List Page</Link></li>
        <li><Link to={`/edit/${userId}`}>Edit this User</Link></li>
      </ul>
      <span>{`userId: ${userId}`}</span>
    </>
  )
}

const EditUserPage = () => {
  const { userId } = useParams();
  const nextUser = Number(userId) + 1;
  return (
    <>
      <h1>Edit User Page</h1>
      <ul>
        <li><Link to={`/users/${userId}`}>User profile Page</Link></li>
        <li><Link to={`/users/${nextUser}`}>Another User</Link></li>
        <li><Link to={"/users"}>Users List Page</Link></li>
      </ul>
    </>
  )
}

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<HomePage />} ></Route>
        <Route path="users" element={<UsersLayout />} >
          <Route index element={<UsersListPage />} ></Route>
          <Route path=":userId" element={<UserPage />} ></Route>
        </Route>
        <Route path="edit/:userId" element={<EditUserPage />} ></Route>
        <Route path="*" element={<Navigate to="" />} />
      </Routes>
    </>
  );
}

export default App;
