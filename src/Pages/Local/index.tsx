import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CelsiusFormat } from '../../utils/Converter';
import { Converterkm } from '../../utils/Converterkm';
import axios from 'axios';
import { Divider } from '../../Components/Divider';

import './styles.css';

export default function Local() {
    const [data, setData] = useState<any>({});
    const [isFetching, setIsFetching] = useState<boolean>(true);
    const { local } = useParams();
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=${apiKey}`);

            setData(response.data);
            setIsFetching(false);
        }
        catch (error: any) {
            console.error(error);
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
                    // <div>
                    //     <p>Temperatura: {CelsiusFormat(data?.main?.temp)}</p>
                    //     <p>Sensação térmica: {CelsiusFormat(data?.main?.feels_like)}</p>
                    //     <p>Temperatura minima: {CelsiusFormat(data?.main?.temp_min)}</p>
                    //     <p>Temperatura máxima: {CelsiusFormat(data?.main?.temp_max)}</p>
                    //     <p>Humidade: {data?.main?.humidity}</p>
                    //     <p>Velocidade do vento: {data?.wind?.speed}</p>
                    //     <p>Quantidade de nuvens: {data?.clouds?.all}</p>
                    //     {data?.weather?.map((weather: any) => {
                    //         return (
                    //             <div key={weather?.id}>
                    //                 <p>Weather: {weather?.main}</p>
                    //                 <p>Weather Description: {weather?.description}</p>
                    //                 <img src={`https://openweathermap.org/img/wn/${weather?.icon}@2x.png`} alt="Imagem do tempo" />
                    //             </div>
                    //         )
                    //     })}
                    // </div>
                    <div id='body' className='d-flex justify-content-center align-items-center'>
                        <div className='d-flex justify-content-center align-items-center flex-column p-4' id='card'>
                            <div>
                                <h1 className='temperature'>{CelsiusFormat(data?.main?.temp)}</h1>
                                {data?.weather?.map((weather: any, index: number) => {
                                    return (
                                        <div className='d-flex justify-content-center align-items-center' key={index}>
                                            <img id='weather-img' src={`https://openweathermap.org/img/wn/${weather?.icon}@2x.png`} alt="Weather" />
                                            <p className='m-0'>{weather?.main}</p>
                                        </div>
                                    )
                                })}
                                <div className='d-flex justify-content-between'>
                                    <p className='temperatures'>Temp min {CelsiusFormat(data?.main?.temp_min)}</p>
                                    <p className='temperatures'>Temp max {CelsiusFormat(data?.main?.temp_max)}</p>
                                </div>
                            </div>

                            <div className='w-100'>
                                <Divider />
                                <div className='d-flex justify-content-between'>
                                    <p className='m-0'>Sensação Térmica</p>
                                    <p className='m-0'>{CelsiusFormat(data?.main?.feels_like)}</p>
                                </div>
                                <Divider />
                                <div className='d-flex justify-content-between'>
                                    <p className='m-0'>Umidade</p>
                                    <p className='m-0'>{data?.main?.humidity}%</p>
                                </div>
                                <Divider />
                                <div className='d-flex justify-content-between'>
                                    <p className='m-0'>Velocidade do vento</p>
                                    <p className='m-0'>{Converterkm(data?.wind?.speed)} Km/h</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}
