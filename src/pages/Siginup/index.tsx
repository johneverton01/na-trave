import { ArrowLeft } from 'phosphor-react';
import { Header, Input } from '../../components';

export const Siginup = () => {
  return (
   <div className="h-full min-h-screen">
    <Header />
    <div className="w-full max-w-[600px] mx-auto">
      <div className="flex flex-col gap-8 px-5">
        <div className="flex gap-5 items-center flex-1">
          <a href='/'>
            <ArrowLeft 
              color='#AF053F'
              weight='bold'
              size={32} 
            />
          </a>        
          <div className="text-xl font-bold text-red-700">
            Crie sua conta
          </div>             
        </div>
        <form action="">
          <div className="grid gap-4">
            <Input 
              name="name"
              type="text"
              placeholder="Digite seu nome"
              label="Seu nome"
            />
            <Input 
              name="userName"
              type="text"
              placeholder="Digite Seu nome de usuário"
              label="Seu nome de usuário"
            />
            <Input 
              name="email"
              type="password"
              placeholder="Digite seu e-mail"
              label="Seu E-mail"
            />
            <Input 
              name="password"
              type="password"
              placeholder="Digite sua senha"
              label="Sua senha"
            />
          </div>
          <div className="grid mt-8">
            <button 
              className="bg-red-500 text-white font-bold py-3 px-5 rounded-2xl"
              type="submit">
                Criar minha conta
            </button>
          </div>
        </form>
      </div>
    </div>
   </div> 
  )
}