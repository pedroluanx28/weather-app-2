import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './styles.css';

export default function App() {
  const [local, setLocal] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

  const fetchData = async () => {
    try {
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=${apiKey}`);

      navigate(`/local/${local}`);
    }
    catch (error: any) {
      console.error(error);
      setError(true);
    }
  }

  function clickEnter(key: string) {
    if (key === "Enter") {
      fetchData();
    }
  }

  return (
    <div id='body' className='d-flex justify-content-center align-items-center'>

      <div className='d-flex justify-content-center align-items-center flex-column p-4' id='card'>
        <img src="logo.png" alt="Logo Weather App" id='logo-image' className='mb-3' />

        <label className='fw-bold fs-4 mb-2' id='text-input'>Qual local você quer ver agora?</label>
        <input className={
          error
            ? 'form-control mb-1 border-danger text-danger'
            : 'form-control mb-1'
        } id='input-weather' type="text" placeholder='Digite um local para ver o clima' onChange={(e) => {
          setLocal(e.target.value);
          setError(false);
        }} onKeyDown={(e) => clickEnter(e.key)} />

        {error && <span className='text-danger me-auto'>O nome do local é inválido!</span>}

        <div id='button-container' className='mt-5'>

          <button type="submit" className='btn btn-primary' onClick={fetchData}>Ver clima</button>

        </div>
      </div>

    </div>
  )
}
