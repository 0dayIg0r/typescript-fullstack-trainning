import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <h1>Faça o login</h1>
      <label htmlFor="emailInput">E-mail</label>
      <input id="emailInput" type="text" />
      <label htmlFor="passwordInput">Senha</label>
      <input id="passwordInput" type="password" />
      <button>Entrar</button>
    </Layout>
  );
}

export default App;
