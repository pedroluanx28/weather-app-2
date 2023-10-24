import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CelsiusFormat } from '../../utils/Converter';
import axios from 'axios';
import { Divider } from '../../Components/Divider';
import { Translate } from '../../utils/Translate';
import { AlterImage } from '../../utils/AlterImage';
import { Spinner } from 'react-bootstrap';

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
                ? (
                    <div
                        style={{
                            height: '100vh', backgroundImage: 'url("../../../public/backdrop.png")'
                        }}
                        className='d-flex align-items-center justify-content-center'>

                        <Spinner animation='border' role='status' variant='light' />
                    </div>
                )
                : (
                    <div id='body' className='d-flex justify-content-center align-items-center' style={{
                        backgroundImage: `url(${AlterImage(data?.weather[0]?.main)})`
                    }}>
                        <div className='d-flex justify-content-center align-items-center flex-column p-4' id='card'>
                            <div>
                                <h3 className='text-center'>{data?.name} - {data?.sys?.country}</h3>
                                <h1 className='temperature'>{CelsiusFormat(data?.main?.temp)}</h1>
                                {data?.weather?.map((weather: any, index: number) => {
                                    return (
                                        <div className='d-flex justify-content-center align-items-center' key={index}>
                                            <img id='weather-img' src={`https://openweathermap.org/img/wn/${weather?.icon}@2x.png`} alt="Weather" />
                                            <p className='m-0'>{Translate(weather?.description)}</p>
                                        </div>
                                    )
                                })}
                                <div className='d-flex justify-content-between'>
                                    <p className='temperatures text-primary'>Temp min {CelsiusFormat(data?.main?.temp_min)}</p>
                                    <p className='temperatures text-danger'>Temp max {CelsiusFormat(data?.main?.temp_max)}</p>
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
                                    <p className='m-0'>{data?.wind?.speed} m/s</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}
