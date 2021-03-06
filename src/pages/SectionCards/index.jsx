import React, {useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import Tilty from "react-tilty";
import HeaderHero from "../../components/Home/HeaderHero/index";
import Data from "../../Assets/Cards/dataCards";
import "./style.scss";

let divisionArray = [];

const size = 4;
for (let i = 0; i < Data.length; i += size) {
    divisionArray.push(Data.slice(i, i + size));
}


function CardsPage() {
    let className = "pause";
    const container = useRef(null);
    const nav = useRef(null);


    useEffect(() => {

        window.addEventListener("wheel", (e) => {
            e.deltaY > 0 ? scrollTo(e.deltaY) : scrollTo(e.deltaY)
            console.log(e.deltaY)
        })

        nav.current.addEventListener("mouseup", (e) => {
            if (e.target.dataset.value)
                scrollTo(parseInt(e.target.dataset.value));
        });
    });

    function scrollTo(d, e) {
        // eslint-disable-next-line


        if (d > 0 && container.current.scrollLeft === 0) {
            /*setClassName("rtl");*/
            container.current.scrollTo({
                top: 0,
                left: container.current.offsetWidth,
            });
        }

        // eslint-disable-next-line
        if (
            d < 0 &&
            container.current.scrollLeft === container.current.offsetWidth
        ) {
            /*setClassName("ltr");*/
            container.current.scrollTo({
                top: 0,
                left: 0,
            });
        }

    }

  return (
      <div className="SectionCards" ref={container}
      >

          <div className="header_container">
              <HeaderHero/>
          </div>

          <main className={`cards ${className}`} dir="ltr">
                  {divisionArray.map((item, divIndex) => (

                      <div className="row" index={divIndex} key={`row${divIndex}`}>
                          {item.map(({Name, Verso}, index) => (
                              <Link to={`/card/${Name}`} className="card" alt={Name}
                                   index={index}
                                   serie={Math.floor(index / 4)}
                                   key={Name}>
                                  <Tilty className="card-img" key={Name} reverse axes="xy" scale="1.03" glare
                                         perspective="1000" transition

                                         style={{
                                             backgroundImage: `url(${Verso})`,
                                         }}>
                                  </Tilty>
                                  <div className="card-name">{Name}</div>
                              </Link>
                          ))}
                      </div>

                  ))}

          </main>

          <div className="hamburger">
              <Link to="/" className="ham"/>
          </div>


          <div className="nav" ref={nav}>
              <div className="prev" data-value="-1">
                  {" "}
                  &lt;---{" "}
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div className="next" data-value="1">
                  {" "}
                  ---&gt;
              </div>
          </div>

      </div>

      /*<main className="cards">
        <div
          className={`cardsContainer ${className}`}
          ref={container}
          dir="ltr"
        >
          {divisionArray.map((item, divIndex) => (
            <div className="row" index={divIndex} key={`row${divIndex}`}>
              {item.map(({ Name, Verso }, index) => (
                <div className="card" key={Name}>
                  <Tilty reverse axis="xy" perspective={1000} reset={false}>
                    <Link to={`/card/${Name}`}>
                      <img
                        src={Verso}
                        alt={Name}
                        width="218"
                        height="385"
                        index={index % 4}
                        serie={Math.floor(index / 4)}
                      />
                    </Link>
                  </Tilty>
                  <Link to={`/card/${Name}`}>
                    <h3>{Name}</h3>
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
        <nav ref={nav}>
          <div className="prev" data-value="-1">
            {" "}
            &lt;---{" "}
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div className="next" data-value="1">
            {" "}
            ---&gt;
          </div>
        </nav>
      </main>*/
  );
}

export default CardsPage;
