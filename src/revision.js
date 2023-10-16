import './App.css';

function App() {
  const name = "test";

  const user = {
    firstname:"Lee",
    lastname: "Hazel"
  }

  function hello(user){
    return `반갑습니다 ${user.firstname} ${user.lastname}`;
  }

  const isLogIn = true;

  const langs = ['react','nextjs','typescript'];


  return (
    <div className="App">
      <h1> Hangman </h1>

      <p>{name}</p>
      <p>{hello(user)}</p>
      {isLogIn ? <p>로그인됨!</p>:<p>로그인해줘</p>}
      
      {
        langs.map((item)=>(
          <li>{item}</li>
        ))
      }
    </div>
  );
}

export default App;
