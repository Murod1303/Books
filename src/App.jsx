import { useContext } from "react";
import { PrivateApp } from "./Apps/PrivateApp/Private.app";
import { PublicApp } from "./Apps/PublicApp/Public.app";
import { TokenContext } from "./Components/Context/tokenContext";

function App() {
  const { token } = useContext(TokenContext);
  if (token) {
    return (
      <main className="bg-[#191919] ">
        <div className="container m-auto px-5">
          <PrivateApp />
        </div>
      </main>
    );
  } else {
    return (
      <main className="bg-[#191919] ">
        <div className="container m-auto px-5">
          <PublicApp />
        </div>
      </main>
    );
  }
}

export default App;
