import './style.css'
import 'maplibre-gl/dist/maplibre-gl.css';
import maplibregl from 'maplibre-gl';

const map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/jp-mierune-streets/style.json?key=YrX4CokEM5SwZASPaSs9#0.3/-16.97672/61.72252',
    center: [139.767, 35.681],
    zoom: 11,
});

map.addControl(
    new maplibregl.NavigationControl({
        visualizePitch: true,
    })
);
// MapTiler読み込み

// コントロール関係表示
map.addControl(new maplibregl.NavigationControl());

map.on('click', function (e) {
    // クリック位置経緯度取得
    const lat = e.lngLat.lat;
    const lng = e.lngLat.lng;
    // 経緯度表示
    alert('lat: ' + lat + ', lng: ' + lng);
});