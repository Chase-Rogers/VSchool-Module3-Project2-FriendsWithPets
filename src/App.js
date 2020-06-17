import React from "react";
import "./App.css";
import Friend from "./Friend";
import friends from "./FriendList";

function App() {
    const friendComponent = friends.map((friends) => (
        <Friend
            key={friends.id}
            name={friends.name}
            age={friends.age}
            pets={friends.pets}
        />
    ));

    return (
        <div className="App">
            <header className="App-header"></header>
            {friendComponent}
        </div>
    );
}

export default App;
