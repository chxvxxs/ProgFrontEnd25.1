function Texto1(){
  return <p>Um outro parágrafo de texto!</p>;
}
export default function Home() {
  const aula = 2;
  return (
    <div>
      <h1>Olá Mundo!</h1>
      <p>Essa é a nossa {aula}ª aula de react</p>
      <Texto1 />
    </div>
  );
}
