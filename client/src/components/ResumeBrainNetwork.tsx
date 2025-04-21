import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import * as d3 from 'd3-force-3d';

interface Node {
  id: string;
  group: string; // cluster/category
  label: string;
}

interface Link {
  source: string;
  target: string;
}

const nodes: Node[] = [
  // Skills cluster: ML
  { id: 'Python', group: 'ML', label: 'Python (6 yrs)' },
  { id: 'TensorFlow', group: 'ML', label: 'TensorFlow' },
  { id: 'JupyterNotebook', group: 'ML', label: 'JupyterNotebook' },
  { id: 'Selenium', group: 'ML', label: 'Selenium' },

  // Skills cluster: Web
  { id: 'JavaScript', group: 'Web', label: 'JavaScript (5 yrs)' },
  { id: 'React', group: 'Web', label: 'React' },
  { id: 'Bootstrap', group: 'Web', label: 'Bootstrap' },

  // Skills cluster: Cloud
  { id: 'AWS', group: 'Cloud', label: 'AWS' },
  { id: 'GCP', group: 'Cloud', label: 'GCP' },
  { id: 'Docker', group: 'Cloud', label: 'Docker' },
  { id: 'Kubernetes', group: 'Cloud', label: 'Kubernetes' },

  // Projects cluster
  { id: 'Glance', group: 'Project', label: 'Glance AI Startup' },
  { id: 'AntiPhishing', group: 'Project', label: 'Anti-Phishing Chrome Extension' },
  { id: 'FindThatPokemon', group: 'Project', label: 'Find That Pokémon' },
  { id: 'TinderRoommates', group: 'Project', label: 'Tinder for Roommates' },

  // Experience cluster
  { id: 'CoFounder', group: 'Experience', label: 'Co-Founder & Software Engineer' },
  { id: 'AIIntern', group: 'Experience', label: 'AI Research Intern' },

  // Education cluster
  { id: 'WilfridLaurier', group: 'Education', label: 'Wilfrid Laurier University' }
];

const links: Link[] = [
  // Connect skills to projects
  { source: 'Python', target: 'Glance' },
  { source: 'TensorFlow', target: 'Glance' },
  { source: 'React', target: 'Glance' },
  { source: 'Docker', target: 'Glance' },

  { source: 'JavaScript', target: 'AntiPhishing' },
  { source: 'Selenium', target: 'AntiPhishing' },
  { source: 'AWS', target: 'AntiPhishing' },

  { source: 'Python', target: 'FindThatPokemon' },

  { source: 'React', target: 'TinderRoommates' },
  { source: 'JavaScript', target: 'TinderRoommates' },

  // Connect experience to projects
  { source: 'CoFounder', target: 'Glance' },
  { source: 'AIIntern', target: 'AntiPhishing' },
  { source: 'AIIntern', target: 'FindThatPokemon' },

  // Connect education to experience
  { source: 'WilfridLaurier', target: 'CoFounder' },
  { source: 'WilfridLaurier', target: 'AIIntern' }
];

// Color map for groups
const groupColors: Record<string, number> = {
  ML: 0xff6b6b,
  Web: 0x4d96ff,
  Cloud: 0x6bcb77,
  Project: 0xffd93d,
  Experience: 0x6a4c93,
  Education: 0xff6f91
};

const ResumeBrainNetwork: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const simulationRef = useRef<d3.Simulation<Node, undefined> | null>(null);
  const nodesRef = useRef<THREE.Mesh[]>([]);
  const linksRef = useRef<THREE.Line[]>([]);
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 100;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Light
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(50, 50, 50);
    scene.add(light);

    // Create node spheres
    const nodeGeometry = new THREE.SphereGeometry(2, 16, 16);

    nodesRef.current = nodes.map((node) => {
      const color = new THREE.Color(groupColors[node.group] || 0xffffff);
      const material = new THREE.MeshPhongMaterial({ color });
      const sphere = new THREE.Mesh(nodeGeometry, material);
      sphere.userData = { id: node.id, label: node.label, group: node.group };
      scene.add(sphere);
      return sphere;
    });

    // Create link lines
    const linkMaterial = new THREE.LineBasicMaterial({ color: 0x888888 });
    linksRef.current = links.map(() => {
      const geometry = new THREE.BufferGeometry();
      const line = new THREE.Line(geometry, linkMaterial);
      scene.add(line);
      return line;
    });

    // D3 force simulation
    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id((d: any) => d.id).distance(20).strength(1))
      .force('charge', d3.forceManyBody().strength(-50))
      .force('center', d3.forceCenter(0, 0, 0))
      .force('collision', d3.forceCollide(5))
      .stop();

    simulationRef.current = simulation;

    // Initialize positions randomly in 3D
    nodes.forEach(node => {
      (node as any).x = (Math.random() - 0.5) * 100;
      (node as any).y = (Math.random() - 0.5) * 100;
      (node as any).z = (Math.random() - 0.5) * 100;
    });

    // Run simulation for fixed iterations
    for (let i = 0; i < 300; i++) {
      simulation.tick();
    }

    // Update Three.js objects positions
    const updatePositions = () => {
      nodes.forEach((node, i) => {
        const sphere = nodesRef.current[i];
        if (!sphere || !node) return; // Defensive check
        sphere.position.set((node as any).x, (node as any).y, (node as any).z);
      });
    
      links.forEach((link, i) => {
        const line = linksRef.current[i];
        if (!line || !link) return; // Defensive check
        
        const source = nodes.find(n => n.id === link.source);
        const target = nodes.find(n => n.id === link.target);
        if (!source || !target) return; // Defensive check
        
        const positions = new Float32Array([
          (source as any).x, (source as any).y, (source as any).z,
          (target as any).x, (target as any).y, (target as any).z
        ]);
        line.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        line.geometry.computeBoundingSphere();
        line.geometry.attributes.position.needsUpdate = true;
      });
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      updatePositions();
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Raycasting for click interaction
    const onClick = (event: MouseEvent) => {
      if (!mountRef.current || !cameraRef.current) return;
      const rect = mountRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, cameraRef.current);
      const intersects = raycaster.intersectObjects(nodesRef.current);
      if (intersects.length > 0) {
        const clickedNode = intersects[0].object;
        alert(`Clicked on: ${clickedNode.userData.label} (${clickedNode.userData.group})`);
        // TODO: Implement zoom and highlight connected nodes
      }
    };
    mountRef.current.addEventListener('click', onClick);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
        mountRef.current.removeEventListener('click', onClick);
      }
      simulation.stop();
    };
  }, []);

  return (
    <div ref={mountRef} style={{ width: '100%', height: '700px', borderRadius: '12px', overflow: 'hidden' }} />
  );
};

export default ResumeBrainNetwork;
