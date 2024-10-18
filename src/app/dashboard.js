import Component1 from '../components/Component1';
import Component2 from '../components/Component2';
import Component3 from '../components/Component3';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import "./styles/styles.css";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = true; 
    if (!isLoggedIn) {
      router.push('/login'); 
    }
  }, [router]);

  return (
    <div className="dashboard-container">
      <h1>paginilla</h1>
      <p>Hola carnal</p>
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  );
}