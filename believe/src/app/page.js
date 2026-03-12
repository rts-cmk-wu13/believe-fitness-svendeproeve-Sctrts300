import "./page.css"
import teams from "./teamtypes/teams.json"
import Carusel from "./components/Carousel/carusel.jsx"
import Email from "./components/Email/email.jsx"
import Kontakt from "./components/Kontakt/kontakt.jsx"
import Header from "./components/Header/header"

export default function Home() {
  // console.log(teams)

  return (
    <main>
      <section className="welcomelogincut">
       <Header/>
      </section>

      <section className="maincontent">
        <section>
          <h4 id="voreshold">News</h4>
          <div className="teamtypescards">
            <ul className=" flex flex-col gap-10">
              {teams.map((team) => (
                  <li key={team.id}>
                    <h2>{team.h1}</h2>
                    <img className=" py-5" src={team.img} alt={team.h1} />
                    <p>{team.p1}</p>
                </li>
              ))}
            </ul>
          </div>
          <section className="emailisss">
            <Email />
          </section>
        </section>
      </section>

      <section className="carusel"> 
          <Carusel />
      </section>

      <section className="maincontent">
        <section>
          <Kontakt />
        </section>
        <hr className="w-20 h-1 bg-black border-none"></hr>
        <section className="flex flex-col text-center">
          <h1>Believe Fitness</h1>
          <h2>Train like a pro</h2>
          <p>Rabalderstræde 48 ‧ 4000 Roskilde</p>
          <p>hello@believe-fitness.com</p>
          
        </section>
      </section>
    </main>
  );
}
