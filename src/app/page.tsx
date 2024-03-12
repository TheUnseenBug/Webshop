import Image from "next/image";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center pt-5 gap-4">
        <div className="cursor-pointer">Om oss</div>
        <div className="cursor-pointer">Våra produkter</div>
      </div>
      <picture className="w-full justify-center items-center flex pt-5">
        <img
          src="https://images.pexels.com/photos/2449665/pexels-photo-2449665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </picture>
      <div className="grid grid-cols-2 items-center gap-4 px-10">
        <div>
          <h1>Om Brödkultur 2.0</h1>
          <p>
            Vi bestämde oss för att dra igång det populära bageriet som fanns
            nere i stan igen, denna gång med en servering. En uppgraderad
            version av Brödkultur, helt enkelt. Grundidén var likadan. Vårt
            fokus ligger på stenugnsbakat kalljäst surdegsbröd och bullar bakade
            på ekologiskt mjöl utan tillsatser. Margarin har aldrig satt sin fot
            hos oss, bara äkta smör. Det är vi stolta över! Som lokalpatrioter
            försöker vi också använda så mycket så möjligt från våra trakter -
            med så lite svinn så möjligt. Vi är ett bageri och café med en
            servering av lättare frukost och lunch. Allt du hittar hos oss är
            tillverkat av oss. Med undantag för folkölen. Men det är kanske bara
            en tidsfråga innan vi börjar brygga själva också! Du hittar oss i
            det gamla kungliga häststallet på Sofiero gård. Här kan du njuta av
            fika, lunch eller kanske bara en glasskula? Naturligtvis har vi
            andra goda saker också... Välkommen!
          </p>
        </div>
        <picture className="pt-5">
          <img
            src="https://images.pexels.com/photos/7414209/pexels-photo-7414209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="founder"
          />
        </picture>
      </div>
    </div>
  );
}
