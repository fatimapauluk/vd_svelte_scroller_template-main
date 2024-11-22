<script>
  import Scroller from "@sveltejs/svelte-scroller";
  import { onMount } from "svelte";
  import Carousel from './Carousel.svelte';

 // import { initCarousel } from './carrusel.js';
   // import './carrusel.css';

    //onMount(() => {
      //  initCarousel();
    //});




    

  let count;
  let index = 0; // Inicializamos index
  let offset;
  let progress;
  let top = 0.1;
  let threshold = 0.5;
  let bottom = 0.9;

  // Contenido TITULO 
  const sections = [
    {
      title: "1. MEET CUTE",
      
    },
    {
      title: "2. EL ENAMORAMIENTO",
    
    },
    {
      title: "3. CONFLICTO",
      
    },
    {
      title: "4. REVELACIÓN",

    },
    {
      title: "5. FINAL FELIZ",
      
    },
  ];

 
</script>



<header> 
  <img src="./images/titulo.svg" alt="Imagen Header">
  <div class="description-box">
    <p class="bajada">La comedia romántica (también conocida como rom-com) es un subgénero de comedia y ficción romántica, que se centra en líneas argumentales alegres y humorísticas centradas en ideas románticas, de como el amor verdadero es capaz de superar todos los obstáculos.</p>
  </div>

  <h2>ESTRUCTURA DE LAS ROM-COMS</h2>

  <div class="timeline-container">
    <div class="timeline">
      <div class="oval">"Meet Cute"</div>
      <div class="line"></div>
      <div class="oval">Enamoramiento</div>
      <div class="line"></div>
      <div class="oval">Conflicto</div>
      <div class="line"></div>
      <div class="oval">Revelación</div>
      <div class="line"></div>
      <div class="oval">Final Feliz</div>
    </div>
  </div>
</header>

<main>

 

  <!-- Contenedor fijo  -->

    <div class="content-container">
      <div class="main-title">
        <h1>{sections[index]?.title}</h1>
      </div>
      <div class="columns-container">
        <div class="column">
          <h2 class="section-title">EN LAS PELÍCULAS</h2>
          
        </div>
        <div class="vertical-divider"></div>
        <div class="column">
          <h2 class="section-title">EN LA HISTORIA</h2>
          
        </div>
      </div>
    </div>
  



  <!-- Scroller para contenido dinámico -->
  <Scroller
    top={top}
    threshold={threshold}
    bottom={bottom}
    bind:count={count}
    bind:index={index}
    bind:offset={offset}
    bind:progress={progress}
  >
    <div slot="foreground" class="foreground_container">
      

     <!-- Meet Cute --> 
        <section class="step_foreground" >
          <div class="columns-container">

            <!-- COLUMNA DERECHA --> 
            <div class="column">
              <p class="description">
                Meet cute es una expresión que se refiere, en el cine y la TV, a 
                una escena en la que las <span class="highlight-green">dos</span> personas que formarán una futura 
                pareja romántica <span class="highlight-green">se encuentran por primera vez</span>, generalmente 
                en circunstancias inusuales, divertidas o lindas.
              </p>

              <img src="./images/meetcutelugares.svg" alt="">
              <div class="derechameet">
              <img src="./images/meetcutevestimentamujeres.svg" alt="">
              <img src="./images/meetcutevestimentahombres.svg" alt="">
            </div>
        </div>

        <div class="vertical-divider"></div>

<!-- COLUMNA IZQUIERDA --> 
          <div class="column">
            <p class="description">
              El primer encuentro entre el público y las rom-coms surge en los 
              <span class="highlight-green">años 30 y 40</span> en Hollywood. Este género surgió a partir de:
            </p>
            <div class="categories-container">
              <div class="category">
                <h3 class="pink-title">GÉNEROS:</h3>
                <ul>
                  <li>Comedia</li>
                  <li>Romance</li>
                  <li>Dramaturgia romántica</li>
                  <li>Screwball</li>
                </ul>
              </div>
      
              <div class="category">
                <h3 class="pink-title">CONTEXTO:</h3>
                <ul>
                  <li>Pos - guerra</li>
                  <li>American dream</li>
                </ul>
              </div>
            </div>

            
            <img src="./images/meetcutecrecimiento.png" alt="">



          </div>



        </div>


        <!-- GIF --> 
        <div class="gif">
          <img src="./images/meet cute.gif" alt="Gif romántico">
          <p>Meet - cute de "It Happened One Night"</p>
        </div>
        
       
       <Carousel />

<!-- 
<div class="carousel-container">
  
  <button id="leftControl" class="control left">←</button>
  <button id="rightControl" class="control right">→</button>

 
  <div id="carousel" class="carousel">
   
  </div>
</div>-->

        
        </section>
      
<!-- Enamoramiento--> 
<section class="step_foreground" >
  <div class="columns-container">

<!-- COLUMNA DERECHA --> 
    <div class="column">
      <p class="description">
        El enamoramiento suele mostrarse a través de un "montage", una secuencia de <span class="highlight-green">momentos felices</span>. Este recurso permite resumir la evolución de la relación y transmitir al espectador la <span class="highlight-green">magia y emoción</span> de su vínculo en pocos minutos. Las situaciones que más frecuentemente aparecen en los montage son:
      </p>

      <div class="category">
        <ul>
          <li>Riendo en la cama</li>
          <li>Peleando de forma juguetona</li>
          <li>Preparando comida juntos</li>
          <li>Caminando por el parque o playa en un día soleado o al atardecer</li>
          <li>Disfrutando actividades espontáneas 
            (paseos en bicicleta o visitas a ferias) </li>
      


        </ul>
      </div>


        </div>

        <div class="vertical-divider"></div>
<!-- COLUMNA IZQ --> 
        <div class="column">
          <p class="description">
            El boom de las comedias románticas se dio entre los <span class="highlight-green">años 80 y 2010</span>, marcando una <span class="highlight-green">época dorada</span> en la que este género se consolidó como favorito en el cine. Durante esta época, surgieron muchos <span class="highlight-green">actores famosos</span> a partir de comedias románticas. Algunos de ellos son:
          </p>
            </div>



        </div>



      <div class="gif">
        <img src="./images/EL ENAMORAMIENTO.gif" alt="Gif romántico">
        <p>Enamoramiento de "When Harry Met Sally"</p>
      </div>

        </section>
        
     
<!-- Conflicto--> 
<section class="step_foreground" >
  <div class="columns-container">

<!-- COLUMNA DERECHA --> 
    <div class="column">
      <p class="description">
        El conflicto es el momento que pone a prueba la relación entre los protagonistas, <span class="highlight-green">interrumpiendo la fase de enamoramiento</span>. A menudo, el conflicto lleva a una <span class="highlight-green">ruptura temporal </span>o a un <span class="highlight-green">distanciamiento</span>, que obliga a los protagonistas a reflexionar sobre sus sentimientos y lo que realmente desean.
      </p>
        </div>

        <div class="vertical-divider"></div>
<!-- COLUMNA IZQ --> 
        <div class="column">
          <p class="description">
            El conflicto es el momento que pone a prueba la relación entre los protagonistas, <span class="highlight-green">interrumpiendo la fase de enamoramiento</span>. A menudo, el conflicto lleva a una <span class="highlight-green">ruptura temporal</span> o a un <span class="highlight-green">distanciamiento</span>, que obliga a los protagonistas a reflexionar sobre sus sentimientos y lo que realmente desean.
          </p>


          <p class="description">La experiencia de <span class="highlight-rosa">salir ha cambiado mucho, pero las rom-coms se mantienen en relatos tradicionales</span>. Hoy, cada vez más personas se conocen en redes y apps de citas, lo que se aleja de las situaciones típicas de las rom-coms, haciendo que muchos se sientan menos identificados con este género.</p>


          <p class="description">Las plataformas de streaming contribuyeron al declive de las comedias románticas, ya que los estudios de cine <span class="highlight-rosa">redujeron la producción de películas de presupuesto medio</span> al no poder competir con el volumen de contenido de las plataformas. Los estudios optaron por concentrarse en grandes producciones, siguiendo una estrategia de “go big or go home”.</p>

          <p class="description">Además, las comedias románticas dejaron de ser un género del cual nacen actores famosos. Kate Hudson comenta que es cada vez más <span class="highlight-rosa">difícil conseguir actores masculinos</span> que quieran participar de comedias románticas.</p>


        
            </div>



        </div>
<!-- GIF --> 

        <div class="gif">
          <img src="./images/conflicto.gif" alt="Gif romántico">
          <p>Conflicto de "Notting Hill"</p>
        </div>


        </section>

<!-- Revelacion--> 


<section class="step_foreground revelacion">
  <div class="columns-container">
    <!-- COLUMNA DERECHA -->
    <div class="column">
      <p class="description">
        Este momento ocurre cuando <span class="highlight-green">uno de los protagonistas comprende que quiere estar con la otra persona</span>, marcando un punto clave tras el conflicto. Este instante de claridad va acompañado de una gran muestra de amor o "grand gesture" que busca reconciliar a la pareja.
      </p>

      <p class="description">Estos son algunos de los “grandes gestos” más típicos:</p>
      <div class="category">
        <ul>
          <li>Declaración pública de amor</li>
          <li>Perseguir a la pareja en aeropuertos, estaciones o calles</li>
          <li>Regalo simbólico</li>
          <li>Sorpresa romántica (ej: decorar un lugar importante)</li>
          <li>Serenatas o canciones dedicadas</li>
        </ul>
      </div>
    </div>

    <div class="vertical-divider"></div>

    <!-- COLUMNA IZQUIERDA -->
    <div class="column">
      <p class="description">
        En <span class="highlight-green">2023</span>, se estrenó en los cines la muy exitosa rom-com <span class="highlight-green">“Anyone But You”</span> que marca un posible punto de inflexión en la historia de las rom-coms.
      </p>
      <p class="description">Su gran éxito se debió a 2 principales factores:</p>
      <div class="category">
        <ul>
          <li>Marketing en redes sociales</li>
          <li>Storytelling que respeta la estructura de las rom-coms e incorpora elementos modernos</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- GIF -->
  <div class="gif">
    <img src="./images/el gran gesto.gif" alt="Gif romántico">
    <p>El gran gesto de "Anyone but you"</p>
  </div>
</section>


<!-- Final feliz--> 
<section class="step_foreground" >
  <div class="columns-container">

<!-- COLUMNA DERECHA --> 
    <div class="column">
      <p class="description">
        El final feliz en las comedias románticas es el momento en que la pareja, <span class="highlight-green">tras superar conflictos</span>, se une de forma definitiva. Este cierre celebra la conexión entre los protagonistas y da una sensación de optimismo y satisfacción al público, reforzando la idea de que el amor puede superar cualquier obstáculo.
      </p>
        </div>

        <div class="vertical-divider"></div>
<!-- COLUMNA IZQ --> 
        <div class="column">
          <p class="description">
            "Anyone But You" demostró que las comedias románticas clásicas de presupuesto medio aún pueden triunfar en el cine contemporáneo, demostrando que una historia genuina y personajes auténticos siguen siendo atractivos para el público. 

Además, el éxito creciente de las rom-coms en formato de serie sugiere que este género sigue teniendo potencial. 

Sin embargo, ¿será esto suficiente para revitalizar el género? 
 
<span class="highlight-green">¿Habrá un final feliz para las romcoms?</span>
          </p>
            </div>



        </div>
<!-- GIF --> 


        <div class="gif">
          <img src="./images/happyend.gif" alt="Gif romántico">
          <p>Final Feliz de "10 Things I Hate About You"</p>
        </div>


  </section>


    </div>

  </Scroller>

  <!-- PARTE MAS DATOS --> 





</main>

<div class="final">


  <div class="final-titulos">
  <img src="./images/finaldatos.svg" alt="">
  <p>FUENTE DE INVESTIGACIÓN PROPIA</p>
</div>
  

</div>





<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap');

:global(body) {
  font-family: "Roboto Flex", sans-serif;
  background-color: #FAFAF9;
  }


  main {
    background-color: #FAFAF9;
    margin-left: 80px;
    margin-right: 80px;
            
}


header {
    text-align: center;
    padding: 40px 20px;
    margin-bottom: 100px;

  }

  .description-box {

    max-width: 800px;
    margin: 30px auto;
  }

  .bajada {
    font-size: 24px;
    color: #333;
    margin: 0;
    line-height: 1.5;
  }

  h2 {
    color: #333;
    font-weight: bold;
    font-size: 24px;
    margin: 40px 0 30px;
  }

  .timeline-container {
    padding: 20px;
  }

  .timeline {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0;
  }

  .oval {
    background-color: #ffE4E8;
    width: 170px;  
    height: 50px;  
    border-radius: 70%;  
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: #333;
    white-space: nowrap;
    z-index: 1;
    border: 1px dashed #000000;  /* Borde suave en rosa */
  }
  .line {
    width: 50px;
    height: 1px;
    background-color: #000000;
  }

  .section-title {
  font-size: 24px;
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 2px solid #FFB6C1;
  width: 100%;
  text-align: center;
  display: block;
}

  .content-container {
    position: sticky;
    top: 0;
    background-color: #FAFAF9;
    z-index: 10;
    
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .columns-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
  
  }

  .column {
    flex: 1;
    text-align: center;
  }

  .vertical-divider {
    width: 1px;
    background-color: #000;
    align-self: stretch;
    margin: 20px;
  }

  .main-title {
    text-align: center;
  
  }

  .main-title h1 {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: #ffE4E8;
    width: 450px;
    height: 80px;
    border-radius: 70%;
    font-size: 36px;
    color: #000000;
    white-space: nowrap;
    font-weight: 300;
    border: 1px dashed #000000;
  }

.description {
  font-size: 18px;
  line-height: 1.6;

  text-align: justify;
  width: 100%;
}

/*HIGHLIGHT*/

 /* .highlight {
    font-weight: bold;
  }*/

  .highlight-green {
    color: #A4BE7B;
  }
  .highlight-rosa {
    color: #FDA1B1;
  }




  .categories-container {
  display: flex;

  gap: 200px;  /* Aumentado el espacio entre columnas */
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
}



.pink-title {
  color: #FFB6C1;
  margin-bottom: 15px;
  font-size: 18px;
  text-align: left;  /* Alineación a la izquierda */
}

.category ul {
  list-style: disc;  /* Cambiado a bullets */
  padding-left: 20px;  /* Espacio para los bullets */
  margin: 0;
}

.category li {
  margin-bottom: 10px;
  font-size: 18px;
  text-align: left;  /* Alineación a la izquierda */
  color: #333;
}

.derechameet {
  display: flex;
  margin-top: 40px;
}




  /* Responsive adjustments */
  @media (max-width: 768px) {
    .content-container {
      padding: 20px;
    }
    .columns-container {
      flex-direction: column;
    }
    .vertical-divider {
      display: none;
    }
  }

  /* Estilos para el scroller */
  .foreground_container {
    pointer-events: none;
  
  }
  .step_foreground {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: auto; /* ACA CAMBIAR EL LARGO DE CADA STEP */
  margin-bottom: 300px;
}
  
/* Estilos para el GIF */
.gif {
  display: inline-block; 
  border: 2px dashed black; 
  padding: 10px; 
  text-align: center; 
  margin-top: 40px;
}

.gif img {
  width: 550px; 
  height: auto; /* Mantiene la proporción de la imagen */
  display: block; /* Elimina el espacio inferior del comportamiento inline */
  margin-bottom: 10px; 
  
}

.gif p {
  font-size: 16px; 
  color: black; 
  margin: 0; 
}


/* DATOS FINAL */

.final-titulos{
  text-align: center;
  justify-content: center;
}


/*carrusel*/


</style>