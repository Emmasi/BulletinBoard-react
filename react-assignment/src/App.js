import './App.css';
import ReactPost from './components/ReactPost';
import BulletinBoard from './components/BulletinBoard'

function App() {
  const Posts=[
    {
      question:"Vad är tre fördelar med att använda React?",
      answer: "•	Lätt att använda och lära sig. •	Med React byggs appar på ett sätt som göra att de är lätta att skala och underhålla. •	En dynamisk webbapplikation på ett enkelt sätt.",

    },
    {
      question:"Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
      answer: "En Single Page Application är en webbapplikation som är designad för att visas som en enda statisk sida. Detta tillvägagångssätt gör applikationen mer användarvänlig och enklare att navigera, eftersom användare kan se hela applikationen på en gång.",

    },
    {
      question:"Nämn tre skillnader mellan React och Angular.",
      answer: "• Angular är ett Javascript-ramverk byggt med Typescript, medan Reactjs är ett Javascript-bibliotek och byggt med JSX. •	Angular JS är baserat på Model View Controller medan React är baserat på Virtual DOM. •	Angular stöder dubbelriktad (tvåvägs) databindning. ReactJS stödjer enkelriktad (envägs) databindning",

    },
      
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h1>Anslagstavla</h1>
      </header>
      <main className='App-main'>
      <BulletinBoard Posts={Posts} />
      </main>
      <footer className='App-footer'>
        <p>FrontendUtbildning 2022</p>
        <p>Reactkurs</p>
        <p>Av Emma Olsson</p>
      </footer>
    </div>
  );
}

export default App;
