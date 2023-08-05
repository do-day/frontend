import { RefObject, useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const initialPosition = {
  latitude: 37.512349,
  longitude: 126.92801,
};

export default function useMap(mapRef: RefObject<HTMLDivElement>) {
  const [map, setMap] = useState<any>();
  const [marker, setMarker] = useState<any>();
  const [position, setPosition] = useState(initialPosition);
  const [location, setLocation] = useState<string>('');
  const hasMarkerEvent = useRef(false);

  // 지도 인스턴스 생성
  useEffect(() => {
    window.kakao.maps.load(() => {
      if (!mapRef.current) return;

      const options = {
        center: new window.kakao.maps.LatLng(
          initialPosition.latitude,
          initialPosition.longitude,
        ),
        level: 3,
      };
      setMap(new window.kakao.maps.Map(mapRef.current, options));
    });
  }, [mapRef]);

  // 브라우저에서 현재 위치 받아오고 마커 인스턴스 생성
  useEffect(() => {
    if (!map) return;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setPosition({ latitude, longitude });
      });
    }
    const marker = new window.kakao.maps.Marker({
      map: map,
      draggable: true,
    });
    setMarker(marker);
  }, [map]);

  // 마커 보여주고 지도를 중심으로 이동 + 마커에 이벤트 등록
  useEffect(() => {
    if (!map || !marker) return;

    const locPosition = new window.kakao.maps.LatLng(
      position.latitude,
      position.longitude,
    );

    marker.setPosition(locPosition);
    map.setCenter(locPosition);

    if (hasMarkerEvent.current) return;
    window.kakao.maps.event.addListener(marker, 'dragend', handleDragEnd);
    hasMarkerEvent.current = true;
  }, [map, marker, position]);

  // 지도 중심 좌표(마커 위치)로 주소 받아오기
  useEffect(() => {
    if (!map || !marker) return;

    const geocoder = new window.kakao.maps.services.Geocoder();
    const coords = map.getCenter();
    geocoder.coord2Address(
      coords.getLng(),
      coords.getLat(),
      (result: any, status: string) => {
        if (status !== window.kakao.maps.services.Status.OK) return;
        setLocation(result[0].address.address_name);
      },
    );
  }, [map, marker, position]);

  const handleDragEnd = () => {
    const latlng = marker.getPosition();
    const latitude = latlng.getLat();
    const longitude = latlng.getLng();
    setPosition({ latitude, longitude });
  };

  return { location, position };
}
