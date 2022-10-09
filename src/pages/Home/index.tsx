import { Header } from "../../components";

export const Home = () => {
  return (
    <div className="bg-red-700 h-full min-h-screen text-white">
      <Header/>
      <div className="md:flex grid gap-4 justify-center items-center h-screen">
          <div className="w-full max-w-[486px]">
            <img src="./assets/img/img.png" alt="" />
          </div>

          <div className="w-full max-w-[504px] grid gap-4 p-4">
            <h1 className="text-3xl font-bold md:text-left text-center">
                Dê o seu palpite na Copa do Mundo do Catar 2022! 
            </h1>
            <div className="grid gap-4">
                <a 
                  href="/signup"
                  className="text-red-700 text-center bg-white font-bold px-3 py-5 rounded-2xl w-full"
                >
                  Criar minha conta
                </a>
                <a 
                  href="/login"
                  className="text-white text-center border-white border font-bold px-3 py-5 rounded-2xl w-full"
                >
                  Fazer login
                </a>

            </div>
          </div>
      </div>
    </div>
  )
}