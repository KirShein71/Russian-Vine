import React from "react";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function Ymap() {
    const mapState = {center: [59.94, 30.28], zoom: 10 }
    return(
        <YMaps>
            <Map defaultState={mapState}>
                <Placemark geometry={{coordinates:[59.941344, 30.276773]}}
                    properties={{
                        hintContent: '../img/map.png',
                      }}
                />
            </Map>
        </YMaps>
    )
}

export default Ymap;

