import { Header } from "./components/Header";
import { Background } from "./components/Backgroud";
import { Card } from "./components/Card";
import { MidSec } from "./components/Mid-sec";

import { data } from "./data";

function App() {
  return (
    <>
      <Header />
      <Background />
      <MidSec />

      <h1>Personal Trainers</h1>

      <main>
        {data.map((personal) => {
          return (
            <Card
              key={personal.id}
              name={personal.name}
              image={personal.image}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
