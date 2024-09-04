function Home() {
    return (
      <div className="
        bg-green-600 
        flex 
        justify-center"
      >
        <div className="
          container
          grid
          grid-cols-2
          text-white
        ">
          <div className="
            flex
            flex-col
            gap-4
            items-center
            justify-center
            py-4
          ">
            <h2 className="
              text-5xl
              font-bold
            ">
              Compre Barato!
            </h2>
            <p className="text-xl">
              Aqui você encontra os melhores produtos farmacêuticos do mercado
            </p>
  
            <div className="
              flex
              justify-around
              gap-4
            ">
              <div className="
                rounded
                border-white
                border-solid
                border-2
                py-2
                px-4
              ">
                Encontrar Produtos
              </div>
            </div>
          </div>
          <div className="
            flex
            justify-center
          ">
            <img src="https://ik.imagekit.io/lari/farmelhorlogo.png?updatedAt=1725457941210" alt="Imagem logo da farmácia, escrito FarMelhor"
            className="w-2/3 "/>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;