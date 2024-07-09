import Image from "next/image";
import Navbar from "../components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center pt-5 gap-4">
        <div className="cursor-pointer">Om oss</div>
        <Link className="cursor-pointer" href="/products">
          Våra produkter
        </Link>
      </div>
      <picture className="w-full justify-center items-center flex pt-5">
        <img
          src="https://images.pexels.com/photos/2449665/pexels-photo-2449665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </picture>
      <div className="grid grid-cols-2 items-center gap-4 px-10 py-5">
        <div>
          <h1 className="text-3xl font-semibold py-5">Om Söderlunds småbruk</h1>
          <p className="text-lg font-medium">
            Vi på Söderlunds småbruk är en familj som har en ekologisk
            (KRAV-certifiering) gård som odlar olika grönsaker och jordgubbar. <br/>
            Vi brinner för att odla grönsaker och frukt som inte bara är
            hälsosamt och nyttigt men också smakar himla gott. Därför är det bra
            att ha direkt kontakt med er, konsumenten, så att vi kan höra vad ni
            tycker om våra produkter. Dessutom tycker vi att det är viktigt att
            fler kan ha råd med att köpa såna produkter.
          </p>
        </div>
       
        <picture className="">
          <img
            src="https://images.pexels.com/photos/7414209/pexels-photo-7414209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="founder"
          />
        </picture>
      </div>
      <div className="px-10">
          <h1 className="text-3xl font-semibold py-5">Information om krav</h1>
          <p className="text-lg font-medium">
            Vi odlar ekologiskt och sälja KRAV-märkta grönsaker. En giftfri
            odling med största möjliga hänsyn till naturen för att uppnå ett
            hållbart samhälle är ett självklart val för oss! Vad innebär
            ekologisk produktion -EU och KRAV • giftfritt -utan kemiska
            bekämpningsmedel • generellt mindre växtnäringsförluster (kväve och
            fosfor) • cirkulerande växtföljd Produkter som är ekologiska och är
            märkta med EU.s logotyp uppfyller bestämmelserna i EU:s ekologiska
            förordning. Om produkter är ekologiska och dessutom KRAV-certifierat
            bevisar att certifieringsorganet är svenskt. KRAV kontrollerar
            årligen att reglerna efterlevs. I jämförelse med EUs minimiregler
            för ekologisk produktion så har KRAV mer långtgående regler. KRAV
            har även regler för klimat och social hänsyn. Det har inte
            EU-ekologiskt. KRAV:s kriterier omfattar bl.a. förbud mot kemiska
            bekämpningsmedel och konstgödsel. Regler kring djurhållning,
            tillsatser, tillverkningsmetoder, arbetsvillkor och sociala
            förhållanden. Vilken sorter grönsaker? På vår gård börjar säsongen
            ungefär i april. Vi får plantor direkt från leverantören och
            planterar så snart det är möjligt. Det betyder att det inte får
            finnas risk för nattfrost runt -5 grader. Om vädret tillåter kördar
            vi i början av juni. Vi kommer att ha färsk potatis, mangold,
            rabarber, rädisor, sallad (salanova, lollo bionda/rosso), salladslök
            och söckerärtor. Runt juli/augusti kommer vi också att erbjuda betor
            (gul,polka,röd), brytbönor, brusselkål, frilandsgurka, olika
            kålsorter (blomkål, broccoli, kålrabbi, kinakål, majrova, paksoj,
            palmkål, rödkål, savojkål, spetskål, vitkål, fänkål),
            gul/röd/schalottenlök, majs (sockermajs), morötter, potatis
            (Acoustic/Melody) pumpa (butternut /uchiki kuri), purjolök, sallad
            (lollo bionda/rosso), sockerärtor, sötpotatis, tomator
            (cherry/plum/tomat/tros), zucchinni.
          </p>
        </div>
    </div>
  );
}
