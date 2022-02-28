import React from 'react'
export default function Navbar() {
  return (

    <nav className="navbar-expand-lg navbar-light bg-light mb-5 p-3 border-light shadow-lg fluid" id="navbarColor03">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <a className="navbar-item" id="brand"><i
            className="fab fa-react px-3 fa-lg"
          ></i>Flashcards</a>
          <li className="nav-item px-3 ml-5">
            <a className="nav-link text-center px-3" href="#list">My Flashcards</a></li>
          <li className="nav-item px-3">
            <a className="nav-link text-center px-3" href="#create">Create a Flashcard</a></li>
          <li className="nav-item px-3">
            <a className="nav-link text-center px-3" href="#practice">Practice</a></li></ul>
      </div>
    </nav>
  )

}
