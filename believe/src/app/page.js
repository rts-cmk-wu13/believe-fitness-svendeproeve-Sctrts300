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
          <h1 id="voreshold">Vores holdtyper</h1>
          <div className="teamtypescards">
            <ul>
              {teams.map((team) => (
                  <li key={team.id}>
                    <h2>{team.h1}</h2>
                    <img className="teamimg" src={team.img} alt={team.h1} />
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
        <section className="caruselbg">
          
          <Carusel />
        </section>
      </section>

      <section className="maincontent">
        <section>
          <Kontakt />
        </section>

        <section className="center_section">
          <img src="/assets/images/Group_18.png" alt="" />
          <p className="textalign_center">Pulsen 8 . 4000 Roskilde Tlf. 3540 4550</p>
</section>
      </section>
    </main>
  );
}
