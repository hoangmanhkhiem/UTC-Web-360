import * as THREE from './modules/three.module.js';
import { OrbitControls } from './modules/OrbitControls.js';
import { RGBELoader } from './modules/RGBELoader.js';

const panoramaPoints = [
  {
    id: 'point1',
    url: './images/brown_photostudio_01_4k.hdr',
    connections: [
      { 
        target: 'point2', 
        position: new THREE.Vector3(0, -0.7, -1), 
        rotation: 0 
      }
    ],
    infoPoints: [
      {
        position: new THREE.Vector3(1, 0, -1),
        title: "KhiemVipPro",
        description: "Integrating, sharing and connecting information systems of ministries, branches and localities",
        imageUrl: "./images/vxp_info.jpg"
      }
    ]
  },
  {
    id: 'point2',
    url: './images/studio_country_hall_4k.hdr',
    connections: [
      { 
        target: 'point1', 
        position: new THREE.Vector3(0, -0.7, 1), 
        rotation: Math.PI 
      }
    ],
    infoPoints: []
  }
];

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x333333);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 0.1);

const canvas = document.querySelector('#webgl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.8;
renderer.outputEncoding = THREE.sRGBEncoding;

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.minDistance = 0.1;
controls.maxDistance = 50;
controls.maxPolarAngle = Math.PI;

let currentPanoramaId = 'point1';
let activeArrows = [];
let activeInfoPoints = [];

function createInfoDialog() {
  const dialog = document.createElement('div');
  dialog.id = 'info-dialog';
  dialog.style.display = 'none';
  dialog.style.position = 'fixed';
  dialog.style.top = '50%';
  dialog.style.left = '50%';
  dialog.style.transform = 'translate(-50%, -50%)';
  dialog.style.backgroundColor = 'white';
  dialog.style.padding = '20px';
  dialog.style.borderRadius = '10px';
  dialog.style.boxShadow = '0 0 20px rgba(0,0,0,0.5)';
  dialog.style.zIndex = '1000';
  dialog.style.maxWidth = '80%';
  dialog.style.maxHeight = '80%';
  dialog.style.overflow = 'auto';
  
  document.body.appendChild(dialog);
  
  return dialog;
}


function createMiniMap() {
    const mapContainer = document.createElement('div');
    mapContainer.id = 'mini-map';
    mapContainer.style.position = 'absolute';
    mapContainer.style.bottom = '20px';
    mapContainer.style.right = '20px';
    mapContainer.style.width = '200px';
    mapContainer.style.height = '150px';
    mapContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    mapContainer.style.borderRadius = '5px';
    mapContainer.style.padding = '5px';
    mapContainer.style.zIndex = '100';
    mapContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
    
    const title = document.createElement('div');
    title.textContent = ' MAP';
    title.style.textAlign = 'center';
    title.style.fontWeight = 'bold';
    title.style.marginBottom = '5px';
    mapContainer.appendChild(title);
    
    const mapImageContainer = document.createElement('div');
    mapImageContainer.style.position = 'relative';
    mapImageContainer.style.width = '100%';
    mapImageContainer.style.height = 'calc(100% - 25px)';
    
    const mapImage = document.createElement('img');
    mapImage.src = './images/exhibition_map.jpg'; 
    mapImage.style.width = '100%';
    mapImage.style.height = '100%';
    mapImage.style.objectFit = 'cover';
    mapImageContainer.appendChild(mapImage);
    
    mapContainer.appendChild(mapImageContainer);
    document.body.appendChild(mapContainer);
    
    return { container: mapContainer, markerContainer: mapImageContainer };
  }
  
  function createMapMarker(x, y, panoramaId, miniMap) {
    const marker = document.createElement('div');
    marker.style.position = 'absolute';
    marker.style.left = x + '%';
    marker.style.top = y + '%';
    marker.style.width = '15px';
    marker.style.height = '15px';
    marker.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
    marker.style.borderRadius = '50%';
    marker.style.transform = 'translate(-50%, -50%)';
    marker.style.cursor = 'pointer';
    marker.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
    
    marker.onmouseover = () => {
      marker.style.backgroundColor = 'rgba(255, 0, 0, 1)';
      marker.style.transform = 'translate(-50%, -50%) scale(1.2)';
    };
    
    marker.onmouseout = () => {
      marker.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
      marker.style.transform = 'translate(-50%, -50%)';
    };
    
    marker.onclick = () => {
      loadPanorama(panoramaId);
    };
    
    miniMap.markerContainer.appendChild(marker);
    return marker;
  }
  
  const miniMap = createMiniMap();
  
  const mapMarkers = [
    { x: 30, y: 40, panoramaId: 'point1' },
    { x: 70, y: 60, panoramaId: 'point2' }  
  ];
  
  mapMarkers.forEach(marker => {
    createMapMarker(marker.x, marker.y, marker.panoramaId, miniMap);
  });
  
  function updateCurrentPositionOnMap(panoramaId) {
    const currentMarker = document.getElementById('current-position-marker');
    if (currentMarker) {
      currentMarker.remove();
    }
    
    const markerData = mapMarkers.find(m => m.panoramaId === panoramaId);
    if (!markerData) return;
    
    const marker = document.createElement('div');
    marker.id = 'current-position-marker';
    marker.style.position = 'absolute';
    marker.style.left = markerData.x + '%';
    marker.style.top = markerData.y + '%';
    marker.style.width = '20px';
    marker.style.height = '20px';
    marker.style.border = '3px solid blue';
    marker.style.borderRadius = '50%';
    marker.style.transform = 'translate(-50%, -50%)';
    marker.style.zIndex = '10';
    
    miniMap.markerContainer.appendChild(marker);
  }
  

const infoDialog = createInfoDialog();

function showInfoDialog(title, description, imageUrl) {
  infoDialog.innerHTML = `
    <div style="position: relative;">
      <h2 style="color: #1a3c8f; margin-bottom: 15px;">${title}</h2>
      <button id="close-dialog" style="position: absolute; top: 0; right: 0; background: none; border: none; font-size: 20px; cursor: pointer;">×</button>
      <div style="display: flex; flex-direction: column; align-items: center;">
        <img src="${imageUrl}" style="max-width: 100%; margin-bottom: 15px; border-radius: 5px;">
        <p style="margin-bottom: 15px;">${description}</p>
        <button id="more-info-btn" style="background-color: #1a3c8f; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">MORE INFO</button>
      </div>
    </div>
  `;
  
  infoDialog.style.display = 'block';
  
  document.getElementById('close-dialog').addEventListener('click', () => {
    infoDialog.style.display = 'none';
  });
  
  document.getElementById('more-info-btn').addEventListener('click', () => {
    window.open('https://github.com/hoangmanhkhiem', '_blank');
  });
}

function createDirectionArrow(position, rotation, color = 0x0088ff) {
  const arrowShape = new THREE.Shape();
  arrowShape.moveTo(0, 0.1);
  arrowShape.lineTo(-0.07, -0.05);
  arrowShape.lineTo(0.07, -0.05);
  arrowShape.lineTo(0, 0.1);
  
  const geometry = new THREE.ShapeGeometry(arrowShape);
  const material = new THREE.MeshBasicMaterial({ 
    color: color,
    transparent: true,
    opacity: 0.8,
    side: THREE.DoubleSide
  });
  
  const arrow = new THREE.Mesh(geometry, material);
  arrow.rotation.x = -Math.PI / 2;
  arrow.rotation.z = rotation;
  
  const positionCopy = new THREE.Vector3().copy(position);
  arrow.position.copy(positionCopy);
  
  return arrow;
}

function createInfoPoint(position) {
  const geometry = new THREE.SphereGeometry(0.05, 32, 32);
  const material = new THREE.MeshBasicMaterial({ 
    color: 0xff0000,
    transparent: true,
    opacity: 0.8
  });
  
  const infoPoint = new THREE.Mesh(geometry, material);
  
  const positionCopy = new THREE.Vector3().copy(position);
  infoPoint.position.copy(positionCopy);
  
  const pulse = () => {
    const scale = 1 + 0.1 * Math.sin(Date.now() * 0.005);
    infoPoint.scale.set(scale, scale, scale);
  };
  
  infoPoint.userData.animate = pulse;
  
  return infoPoint;
}

function loadPanorama(panoramaId) {
  activeArrows.forEach(arrow => scene.remove(arrow));
  activeArrows = [];
  
  activeInfoPoints.forEach(point => scene.remove(point));
  activeInfoPoints = [];
  updateCurrentPositionOnMap(panoramaId);
  const panorama = panoramaPoints.find(p => p.id === panoramaId);
  if (!panorama) return;
  
  currentPanoramaId = panoramaId;
  
  new RGBELoader()
    .load(panorama.url, function(texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.background = texture;
      scene.environment = texture;
      
      panorama.connections.forEach(connection => {
        const arrow = createDirectionArrow(
          connection.position,
          connection.rotation
        );
        arrow.userData.targetId = connection.target;
        scene.add(arrow);
        activeArrows.push(arrow);
      });
      
      panorama.infoPoints.forEach(info => {
        const infoPoint = createInfoPoint(info.position);
        infoPoint.userData.info = info;
        scene.add(infoPoint);
        activeInfoPoints.push(infoPoint);
      });
    },
    undefined,
    function(error) {
      console.error('Lỗi khi tải HDR:', error);
    });
}

function onMouseClick(event) {
  event.preventDefault();

  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);

  const arrowIntersects = raycaster.intersectObjects(activeArrows);
  if (arrowIntersects.length > 0) {
    const targetId = arrowIntersects[0].object.userData.targetId;
    loadPanorama(targetId);
    return;
  }
  
  const infoIntersects = raycaster.intersectObjects(activeInfoPoints);
  if (infoIntersects.length > 0) {
    const info = infoIntersects[0].object.userData.info;
    showInfoDialog(info.title, info.description, info.imageUrl);
    return;
  }
}

window.addEventListener('click', onMouseClick, false);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  
  activeInfoPoints.forEach(point => {
    if (point.userData.animate) {
      point.userData.animate();
    }
  });
  
  renderer.render(scene, camera);
}   

loadPanorama('point1');
animate();
