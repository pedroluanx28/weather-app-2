import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CelsiusFormat } from '../../utils/Converter';
import Swal from 'sweetalert2';
import axios from 'axios';

export default function Local() {
    const [data, setData] = useState<any>({});
    const [isFetching, setIsFetching] = useState<boolean>(true);
    const { local } = useParams();
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=5ded3f796b16afe0854746d4c62c93c8`);

            setData(response.data);
            setIsFetching(false);
        }
        catch (error: any) {
            console.error(error);
            navigate('/');
            Swal.fire({
                icon: 'error',
                text: 'O nome do local é inválido!',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
            })
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            {isFetching
                ? <p>Carregando...</p>
                : (
                    <div>
                        <p>Temperatura: {CelsiusFormat(data?.main?.temp)}</p>
                        <p>Sensação térmica: {CelsiusFormat(data?.main?.feels_like)}</p>
                        <p>Temperatura minima: {CelsiusFormat(data?.main?.temp_min)}</p>
                        <p>Temperatura máxima: {CelsiusFormat(data?.main?.temp_max)}</p>
                        <p>Humidade: {data?.main?.humidity}</p>
                        <p>Velocidade do vento: {data?.wind?.speed}</p>
                        <p>Quantidade de nuvens: {data?.clouds?.all}</p>
                        {data?.weather?.map((weather: any) => {
                            return (
                                <div key={weather?.id}>
                                    <p>Weather: {weather?.main}</p>
                                    <p>Weather Description: {weather?.description}</p>
                                    <img src={`https://openweathermap.org/img/wn/${weather?.icon}@2x.png`} alt="Imagem do tempo" />
                                </div>
                            )
                        })}
                    </div>
                )}
        </div>
    )
}
