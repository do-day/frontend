import { RefObject, useEffect, useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function useMapView(
  mapRef: RefObject<HTMLDivElement>,
  latitude?: number,
  longitude?: number,
) {
  const [map, setMap] = useState<any>();
  const [marker, setMarker] = useState<any>();
  // NOTE: 보고하는 사람의 위치를 검증할 때 사용하는 정보
  const [currentPosition, setCurrentPosition] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [currentLocation, setCurrentLocation] = useState<string>('');

  // 지도 인스턴스 생성
  useEffect(() => {
    window.kakao.maps.load(() => {
      if (!mapRef.current || !latitude || !longitude) return;

      const options = {
        center: new window.kakao.maps.LatLng(latitude, longitude),
        level: 3,
      };
      setMap(new window.kakao.maps.Map(mapRef.current, options));
    });
  }, [mapRef, latitude, longitude]);

  // 브라우저에서 현재 위치 받아오고 마커 인스턴스 생성
  useEffect(() => {
    if (!map) return;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setCurrentPosition({ latitude, longitude });
      });
    }
    const marker = new window.kakao.maps.Marker({
      map: map,
    });
    setMarker(marker);
  }, [map]);

  // 마커 보여주고 지도를 중심으로 이동 + 마커에 이벤트 등록
  useEffect(() => {
    if (!map || !marker || !latitude || !longitude) return;

    const locPosition = new window.kakao.maps.LatLng(latitude, longitude);

    marker.setPosition(locPosition);
    map.setCenter(locPosition);
  }, [map, marker, latitude, longitude]);

  // 현재 위치로 주소 받아오기
  useEffect(() => {
    if (!map) return;

    const geocoder = new window.kakao.maps.services.Geocoder();
    const coords = new window.kakao.maps.LatLng(
      currentPosition.latitude,
      currentPosition.longitude,
    );

    geocoder.coord2Address(
      coords.getLng(),
      coords.getLat(),
      (result: any, status: string) => {
        if (status !== window.kakao.maps.services.Status.OK) return;
        setCurrentLocation(result[0].address.address_name);
      },
    );
  }, [currentPosition.latitude, currentPosition.longitude, map]);

  return { currentLocation, currentPosition };
}
