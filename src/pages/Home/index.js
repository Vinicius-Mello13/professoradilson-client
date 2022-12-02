import Navbar from "../../components/NavBar";
import "../../../src/style.css";

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  if (slides.length > 0) slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

export function Home() {
  return (
    <>
      <Navbar />

      <div className="div1">
        <div className="div2">
          <h1 className="text1">O vereador mais votado de Barretos!</h1>
          <h3 className="text2">Texto menor de apresentação</h3>
          <div className="text3">
            <h4>1336 votos!</h4>
          </div>
          <div className="text4">
            <h6>Mandato 2021-2024</h6>
          </div>
          <button className="button">BOTÃO</button>
        </div>

        <div className="img-principal">
          <img className="img1" src="https://iili.io/pYtz3x.png" />
        </div>
      </div>
      <div className="votos-geral">
        <div className="div-foto">
          <img className="foto-trofeu" src="https://iili.io/HJOPO37.png" />
        </div>
        <div className="texto-votos">
          <h1 className="numero-votos">
            <b>1336 VOTOS!</b>
          </h1>
          <h6 className="texto-eleicoes">
            <b>*ELEIÇÕES 2020</b>
          </h6>
        </div>
      </div>

      <div className="conquistas-geral">
        <div className="conquistas-geral1">
          <div className="text5">
            <h3>Nossas conquistas!</h3>
          </div>
          <div className="conquistas">
            <div className="lista-geral">
              <div className="lista">
                <p className="lista">
                  <b>Conquista 1</b>
                </p>
              </div>
              <div className="lista">
                <p className="lista">
                  <b>Conquista 2</b>
                </p>
              </div>
              <div className="lista">
                <p className="lista">
                  <b>Conquista 3</b>
                </p>
              </div>
              <div className="lista">
                <p className="lista">
                  <b>Conquista 4</b>
                </p>
              </div>
              <div className="lista">
                <p className="lista">
                  <b>Conquista 5</b>
                </p>
              </div>
              <div className="lista">
                <p className="lista">
                  <b>Conquista 6</b>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Slideshow container --> */}
        <div className="slideshow-container">
          {/* <!-- Full-width images with number and caption text --> */}
          <div className="mySlides fade">
            <div className="numbertext">1 / 6</div>
            <img src="https://iili.io/HFxCyva.png" style={{ width: "100%" }} />
            <div className="text"></div>
          </div>

          <div className="mySlides fade">
            <div className="numbertext">2 / 6</div>
            <img src="https://iili.io/HFxnJTv.png" style={{ width: "100%" }} />
            <div className="text"></div>
          </div>

          <div className="mySlides fade">
            <div className="numbertext">3 / 6</div>
            <img src="https://iili.io/HFxndjR.png" style={{ width: "100%" }} />
            <div className="text"></div>
          </div>

          <div class="mySlides fade">
              <div class="numbertext">4 / 6</div>
              <img src="https://iili.io/HFxCpYg.png" style={{width:'100%'}} />
              <div class="text"></div>
            </div>

            
            <div class="mySlides fade">
              <div class="numbertext">5 / 6</div>
              <img src="https://iili.io/HFxnf4t.png" style={{width:'100%'}} />
              <div class="text"></div>
            </div>

            
            <div class="mySlides fade">
              <div class="numbertext">6 / 6</div>
              <img src="https://iili.io/HFxnoyG.png" style={{width:'100%'}} />
              <div class="text"></div>
            </div>

        </div>
        <br />


      </div>

      <div>
        {/* 24 */}
        <div>
          {/* 25 */}
          <div>
            <h2>
              Acompanhe aqui nosso trabalho, veja as notícias e dê sugestões
              para nossa cidade no portal!
            </h2>
          </div>
          {/* 26 */}
          <div>
            {/* 27 */}
            <div>
              <button>Entrar</button>
            </div>
            {/* 28 */}
            <div>
              <button>Cadastrar</button>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------------- */}
      {/* 29 */}
      <div>
        {/* 30 */}
        <div>
          <h6>
            2022 Todos os direitos reservados. Desenvolvido por Equipe de
            Tecnologia Professor Adilson Ventura
          </h6>
        </div>
      </div>
      {/* </div>
    </div> */}
    </>
    // </body>
  );
}
