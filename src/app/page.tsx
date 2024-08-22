import Header from "./components/header";
import Hero from "./components/hero";
import Rodape from "./components/rodape";


export default function Home() {
  return (
    <div className="block">
      <section id="home"></section>
    <Header />
    <Hero />
    <section id="projects">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eaque inventore ratione aperiam dignissimos laborum est impedit dolorum quam molestiae accusantium earum saepe, ad esse dolores tenetur recusandae voluptatibus repellat.</section>
    <section id="skills">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto porro similique doloribus, exercitationem obcaecati officia deleniti recusandae sed mollitia, voluptatibus ullam. Sed, nulla ipsum saepe eum ducimus nostrum iusto tenetur!</section>
   <Rodape />
    </div>
  );
}
