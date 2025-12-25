"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface DataFlowLayersProps {
  nodes: Array<{ position: THREE.Vector3; type: string }>;
  scene: THREE.Scene;
}

// Layer 1: Live - Fast moving, bright #64FFDA points
export function LiveDataLayer({ nodes, scene }: DataFlowLayersProps) {
  const layerRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    const liveCount = Math.min(10, nodes.length);
    const positions = new Float32Array(liveCount * 3);
    const colors = new Float32Array(liveCount * 3);
    const velocities = new Float32Array(liveCount * 3);

    const liveColor = new THREE.Color(0x64ffda);

    for (let i = 0; i < liveCount; i++) {
      const i3 = i * 3;
      const node = nodes[i % nodes.length];

      positions[i3] = node.position.x;
      positions[i3 + 1] = node.position.y;
      positions[i3 + 2] = node.position.z;

      colors[i3] = liveColor.r;
      colors[i3 + 1] = liveColor.g;
      colors[i3 + 2] = liveColor.b;

      // Fast velocity (30-40px/s)
      velocities[i3] = (Math.random() - 0.5) * 0.8;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.8;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.8;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 3,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);
    layerRef.current = points;

    // Animation
    let time = 0;
    const animate = () => {
      time += 0.016;
      const positions = points.geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < liveCount; i++) {
        const i3 = i * 3;
        positions[i3] += velocities[i3];
        positions[i3 + 1] += velocities[i3 + 1];
        positions[i3 + 2] += velocities[i3 + 2];

        // Wrap around
        if (Math.abs(positions[i3]) > 40) velocities[i3] *= -1;
        if (Math.abs(positions[i3 + 1]) > 40) velocities[i3 + 1] *= -1;
        if (Math.abs(positions[i3 + 2]) > 30) velocities[i3 + 2] *= -1;
      }

      points.geometry.attributes.position.needsUpdate = true;
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      scene.remove(points);
      points.geometry.dispose();
      (points.material as THREE.Material).dispose();
    };
  }, [nodes, scene]);

  return null;
}

// Layer 2: Historical - Slow moving, thick, low opacity #112240 lines
export function HistoricalDataLayer({ nodes, scene }: DataFlowLayersProps) {
  const linesRef = useRef<THREE.Line[]>([]);

  useEffect(() => {
    const historicalColor = new THREE.Color(0x112240);
    const lineCount = Math.min(20, nodes.length / 2);

    for (let i = 0; i < lineCount; i++) {
      const node1 = nodes[i * 2];
      const node2 = nodes[i * 2 + 1] || nodes[0];

      const geometry = new THREE.BufferGeometry().setFromPoints([
        node1.position,
        node2.position,
      ]);

      const material = new THREE.LineBasicMaterial({
        color: historicalColor,
        opacity: 0.3,
        transparent: true,
        linewidth: 2,
      });

      const line = new THREE.Line(geometry, material);
      scene.add(line);
      linesRef.current.push(line);
    }

    // Slow animation (5-10px/s)
    let time = 0;
    const animate = () => {
      time += 0.016;
      linesRef.current.forEach((line, idx) => {
        const geometry = line.geometry as THREE.BufferGeometry;
        const positions = geometry.attributes.position.array as Float32Array;

        if (positions.length >= 6) {
          // Slow movement
          positions[0] += Math.sin(time + idx) * 0.05;
          positions[1] += Math.cos(time + idx) * 0.05;
          positions[3] += Math.sin(time + idx + 1) * 0.05;
          positions[4] += Math.cos(time + idx + 1) * 0.05;

          geometry.attributes.position.needsUpdate = true;
        }
      });

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      linesRef.current.forEach((line) => {
        scene.remove(line);
        line.geometry.dispose();
        (line.material as THREE.Material).dispose();
      });
      linesRef.current = [];
    };
  }, [nodes, scene]);

  return null;
}

// Layer 3: Predictive - Dashed, wavy #57CBFF lines
export function PredictiveDataLayer({ nodes, scene }: DataFlowLayersProps) {
  const linesRef = useRef<THREE.Line[]>([]);

  useEffect(() => {
    const predictiveColor = new THREE.Color(0x57cbff);
    const lineCount = Math.min(15, nodes.length / 2);

    for (let i = 0; i < lineCount; i++) {
      const node1 = nodes[i * 2];
      const node2 = nodes[i * 2 + 1] || nodes[0];

      // Create wavy path
      const points: THREE.Vector3[] = [];
      const segments = 10;
      for (let j = 0; j <= segments; j++) {
        const t = j / segments;
        const x = node1.position.x + (node2.position.x - node1.position.x) * t;
        const y =
          node1.position.y +
          (node2.position.y - node1.position.y) * t +
          Math.sin(t * Math.PI * 2 + i) * 2;
        const z = node1.position.z + (node2.position.z - node1.position.z) * t;
        points.push(new THREE.Vector3(x, y, z));
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);

      const material = new THREE.LineDashedMaterial({
        color: predictiveColor,
        opacity: 0.6,
        transparent: true,
        dashSize: 1,
        gapSize: 1,
      });

      const line = new THREE.Line(geometry, material);
      line.computeLineDistances(); // Required for dashed lines
      scene.add(line);
      linesRef.current.push(line);
    }

    // Wavy animation
    let time = 0;
    const animate = () => {
      time += 0.016;
      linesRef.current.forEach((line, idx) => {
        const geometry = line.geometry as THREE.BufferGeometry;
        const positions = geometry.attributes.position.array as Float32Array;

        // Update wavy motion
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] += Math.sin(time * 0.5 + idx + i * 0.1) * 0.02;
        }

        geometry.attributes.position.needsUpdate = true;
      });

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      linesRef.current.forEach((line) => {
        scene.remove(line);
        line.geometry.dispose();
        (line.material as THREE.Material).dispose();
      });
      linesRef.current = [];
    };
  }, [nodes, scene]);

  return null;
}
