import { YMaps, Map, Placemark, FullscreenControl, GeolocationControl, ZoomControl } from 'react-yandex-maps';

import s from './YMap.module.scss';
import mapTag from '../../img/logo-black.svg';

const YMap = () => {
    return(
        <YMaps>
            <div className={s.map}>
                <Map 
                    defaultState={{
                        center: [51.737936, 36.192377], 
                        zoom: 12
                    }}>
                    <Placemark 
                        geometry={{
                            type: 'Point',
                            coordinates: [51.737936, 36.192377]
                        }}
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: mapTag,
                            iconImageSize: [182, 82],
                            iconImageOffset: [-3, -42]
                        }}
                    />
                    <FullscreenControl options={{float: 'left'}} />
                    <GeolocationControl options={{float: 'right'}} />
                    <ZoomControl options={{float: 'left'}} />
                </Map>
            </div>
        </YMaps>
    );
}

export { YMap };