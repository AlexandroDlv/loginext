import Head from 'next/head';
import LoginForm from './components/LoginForm';
import Component1 from './components/Component1';
import Component2 from './components/Component2'; 
import Component3 from './components/Component3';
import "./styles/styles.css";

export default function Home() {
  return (
    <div className="home-container">
      <Head>
        <title>Pagina del login</title>
      </Head>
      <h1>Bienvenido</h1>
      <LoginForm />
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  );
}