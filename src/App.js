import {useState} from 'react'
import Header from "./components/header/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import usersData from './data';

function App() {
    const [users, setUsers] = useState(usersData);

    const addUser = (data) => {
        setUsers([data, ...users]);
    };

    const deleteUser = (id) => {
        return setUsers(users.filter(el => el.id !== id))
    }

    return (
        <div className="App">
            <Header/>
            <Main 
            users={users}
            addUser={addUser}
            deleteUser={deleteUser}
            />
            <Footer/>
        </div>
    );
}

export default App;
