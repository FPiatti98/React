import React from "react";
import Navbar from './Navbar';
import ItemListContainer from "./ItemListContainer";

const App = () => {
  let texto = "Hello world"
  return (
    <section>
      <Navbar />
      <ItemListContainer greeting="Este es el mensaje del prop greeting" />
      <h3>Marvel</h3>
      <div className="card product">
        <img src="spiderman35.png" className="card-img-top productImg" alt="card-img-top"></img>
        <div className="card-body">
          <h5 className="card-title">Spiderman #45</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <h3>DC</h3>
      <div className="card product">
        <img src="batman65.png" className="card-img-top productImg" alt="card-img-top"></img>
        <div className="card-body">
          <h5 className="card-title">Batman #67</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <h3>Manga</h3>
      <div className="card product">
        <img src="berserk6berserk.png" className="card-img-top productImg" alt="card-img-top"></img>
        <div className="card-body">
          <h5 className="card-title">Berserk Deluxe #6</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </section>
  )
}

export default App;
