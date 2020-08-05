import React from "react";
import Header from "../Navbar/Header";
import CardContainer from "../Container/CardContainer";
import r from "../../resources";

function App() {
  return (
    <div className="App">
      <Header links={Object.keys(r)} />
      <div>
        {Object.keys(r).map((urlList) => (
          <CardContainer
            id={r[urlList]}
            key={r[urlList]}
            title={urlList}
            headings={r[urlList]}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
