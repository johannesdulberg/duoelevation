import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Navbar from './components/Navbar';
import VideoHeader from './components/VideoHeader';
import Header from './components/Header';
import Footer from './components/Footer';
import SplitBoxImgAndText from './components/SplitBoxImgAndText';
import SplitVideosliderAndText from './components/SplitVideosliderAndText';
import ContactForm from './components/ContactForm';
import knot from './assets/knot.png'
import chrissi from './assets/chrissi.png'
import johannes from './assets/johannes.png'
import thumbnailImage1 from './assets/thumbnail1.png';
import thumbnailImage2 from './assets/thumbnail2.png';
import thumbnailImage3 from './assets/thumbnail3.png';
function App() {
  return (
    <Router>
    <div className="App">
      <div className="content">
        <Navbar/>
        <VideoHeader/>
        <Header args={{
          headerText:"Shows",
          name:"shows",
          }} />
        <SplitVideosliderAndText args={{
          headerText:"Kleiner Einblick in unsere Shows",
          bodyText:`Erleben sie unsere Atemberaubenden Shows live. Sie können uns mit nur einem Klick buchen und auf
          ihrer nächsten Feier erleben. Egal ob Betriebsfest, Geburtstag, Ladeneröffnung oder öffentlichen Veranstaltung, wir performen für Sie!`,
          bgColor:"indigo-100",
          reverse:false,
          link1:"https://www.youtube.com/embed/aLw7s9xAHh4?si=4Lnzhrx--on9-8Ih",
          link2:"https://www.youtube.com/embed/Q57CGxFNCgc?si=42d6l7keDik5yEth",
          link3:"https://www.youtube.com/embed/-hwK6fTlU9Q?si=bH4cvNVs7HwqZfrP",
          thumbnail1:thumbnailImage1,
          thumbnail2:thumbnailImage2,
          thumbnail3:thumbnailImage3,

        }} 
        />
        <Header args={{
          headerText:"Über Uns",
          name:"about",
          }} />
        <SplitBoxImgAndText args={{
          headerText:"Chrissi",
          bodyText:`Hi ich bin Chrissi! Acro ist bald schon 10 Jahre fester Bestandteil meines Lebens. Ich liebe es, mir Choreografien auszudenken und darin Akrobatik mit Tanzelementen zu kombinieren. Die Bühne ist mein Zuhause, und andere Leute durch den Sport zu begeistern, ist das Größte für mich. Mit der Zeit habe ich gelernt, wie wichtig Teamarbeit und Vertrauen in diesem Bereich sind. Nicht nur die physische Stärke, sondern auch die mentale Resilienz spielen eine entscheidende Rolle. Jeder Erfolg, jede Überwindung und jede neue Fertigkeit, die ich erlerne, treibt mich an, noch härter zu arbeiten und meine Grenzen weiter zu verschieben. Für mich ist Acro mehr als nur ein Sport - es ist eine Leidenschaft, ein Lebensstil und ein Mittel zur Selbstentfaltung.`,
          bgColor:"white",
          imagePath:chrissi,
          reverse:true,
          }} 
        />
        <SplitBoxImgAndText args={{
          headerText:"Johannes",
          bodyText:`Seit meinem ersten Versuch in der Akrobatik habe ich mich in diesen Sport verliebt. Seither hat die Akrobatik bei mir die oberste Priorität. In jeder Halle, in der Menschen zusammen turnen, fühle ich mich Zuhause. Es ist dieses besondere Gefühl der Gemeinschaft, das mich immer wieder begeistert. Die Unterstützung und das Vertrauen, das jeder Einzelne dem anderen entgegenbringt, ist einfach unvergleichlich. Es gab Höhen und Tiefen, Momente des Triumphs und der Enttäuschung, aber all diese Erfahrungen haben mich zu dem gemacht, was ich heute bin. Und ich bin dankbar für jeden Moment, in dem ich mit diesen Menschen sport machen kann.`,
          bgColor:"indigo-100",
          imagePath:johannes,
          reverse:false,
          }} 
        />
        <Header args={{
          headerText:"Kontakt",
          name:"contact"
          }} />
        <ContactForm/>
        <Footer />
      </div>
    </div>
    
    </Router>
  );
}

export default App;
