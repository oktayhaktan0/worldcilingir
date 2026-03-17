import { districtCoords } from '@/data/districts-coords';

function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d;
}

function deg2rad(deg: number) {
    return deg * (Math.PI / 180);
}

export function findNearestDistrict(lat: number, lng: number) {
    let nearestDistrict = null;
    let minDistance = Infinity;

    for (const key in districtCoords) {
        const district = districtCoords[key];
        const distance = getDistanceFromLatLonInKm(lat, lng, district.lat, district.lng);

        if (distance < minDistance) {
            minDistance = distance;
            nearestDistrict = district;
        }
    }

    return nearestDistrict;
}
