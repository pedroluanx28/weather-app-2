type weatherProps =
    'Thunderstorm' | 'Drizzle' | 'Rain' | 'Snow' | 'Mist' | 'Smoke' | 'Haze' | 'Dust' | 'Fog' | 'Sand' | 'Ash' | 'Squall' | 'Tornado' | 'Clear' | 'Clouds';

    export function AlterImage(weather: weatherProps) {
        const images = {
            Thunderstorm: '../../../public/thunderstorm.jpg',
            Drizzle: '../../../public/rain.jpg',
            Rain: '../../../public/rain.jpg',
            Snow: '../../../public/snow.jpg',
            Mist: '../../../public/mist.jpg',
            Smoke: '../../../public/mist.jpg',
            Haze: '../../../public/mist.jpg',
            Dust: '../../../public/sand.jpg',
            Fog: '../../../public/mist.jpg',
            Sand: '../../../public/sand.jpg',
            Ash: '../../../public/ash.jpg',
            Squall: '../../../public/squall.jpg',
            Tornado: '../../../public/tornado.jpg',
            Clear: '../../../public/clear.jpg',
            Clouds: '../../../public/clouds.jpg',
        }

        return images[weather] ?? null;
    }
