import React, { useEffect, useRef } from 'react';
import './Animation.css'; 

const AnimationComponent = () => {
    const containerRef = useRef(null);
    const circlesRef = useRef([]);
    const mousePos = useRef({ x: 0, y: 0 });
    const velocitiesRef = useRef([]);

    useEffect(() => {
        const container = containerRef.current;
        const numCircles = 6;
        const circles = [];
        const velocitiesArr = [];

        for (let i = 0; i < numCircles; i++) {
            const circle = document.createElement('div');
            circle.className = 'background-anim';
            container.appendChild(circle);
            circles.push(circle);
            velocitiesArr.push({ x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 });
        }
        circlesRef.current = circles;
        velocitiesRef.current = velocitiesArr;

        const updateCircles = () => {
            const circles = circlesRef.current;
            const velocities = velocitiesRef.current;

            circles.forEach((circle, index) => {
                const velocity = velocities[index];
                const rect = circle.getBoundingClientRect();


                const newX = rect.left + velocity.x;
                const newY = rect.top + velocity.y;

                if (newX < 0 || newX > window.innerWidth - rect.width) velocity.x *= -1;
                if (newY < 0 || newY > window.innerHeight - rect.height) velocity.y *= -1;

                circle.style.left = `${Math.min(Math.max(newX, 0), window.innerWidth - rect.width)}px`;
                circle.style.top = `${Math.min(Math.max(newY, 0), window.innerHeight - rect.height)}px`;

                velocities[index] = velocity;
            });

            requestAnimationFrame(updateCircles);
        };

        requestAnimationFrame(updateCircles);

        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        const moveTowardsCursor = () => {
            const circles = circlesRef.current;

            circles.forEach((circle) => {
                const rect = circle.getBoundingClientRect();
                const circleCenterX = rect.left + rect.width / 2;
                const circleCenterY = rect.top + rect.height / 2;
                const dx = mousePos.current.x - circleCenterX;
                const dy = mousePos.current.y - circleCenterY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const minDistance = 50;
                const maxDistance = 200;
                const moveSpeed = Math.min(10, Math.max(0, (maxDistance - Math.max(distance, minDistance)) / maxDistance));

                if (distance > minDistance) {
                    circle.style.transform = `translate(${dx * moveSpeed}px, ${dy * moveSpeed}px)`;
                }
            });

            requestAnimationFrame(moveTowardsCursor);
        };

        requestAnimationFrame(moveTowardsCursor);

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <div className="bg-animations" ref={containerRef} />;
};

export default AnimationComponent;
