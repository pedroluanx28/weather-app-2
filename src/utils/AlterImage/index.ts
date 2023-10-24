type weatherProps =
    'Thunderstorm' | 'Drizzle' | 'Rain' | 'Snow' | 'Mist' | 'Smoke' | 'Haze' | 'Dust' | 'Fog' | 'Sand' | 'Ash' | 'Squall' | 'Tornado' | 'Clear' | 'Clouds';

    export function AlterImage(weather: weatherProps) {
        const images = {
            Thunderstorm: '../../../public/backdrop.png',
            Drizzle: '../../../public/backdrop.png',
            Rain: '../../../public/backdrop.png',
            Snow: '../../../public/backdrop.png',
            Mist: '../../../public/backdrop.png',
            Smoke: '../../../public/backdrop.png',
            Haze: '../../../public/backdrop.png',
            Dust: '../../../public/backdrop.png',
            Fog: '../../../public/backdrop.png',
            Sand: '../../../public/backdrop.png',
            Ash: '../../../public/backdrop.png',
            Squall: '../../../public/backdrop.png',
            Tornado: '../../../public/backdrop.png',
            Clear: '../../../public/backdrop.png',
            Clouds: '../../../public/backdrop.png',
        }

        return images[weather] ?? null;
    }
