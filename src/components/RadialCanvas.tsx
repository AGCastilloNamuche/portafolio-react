import { useEffect, useRef } from "react"

const RadialCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);

        gradient.addColorStop(0, '#ff5050');   // Color central
        gradient.addColorStop(1, 'rgba(0,0,0,0)'); // Transparente en los bordes

        // Aplicar y dibujar
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 32, 32);
    }, [])
    return (
        <canvas ref={canvasRef} width={32} height={32} className="svelte-firmm" ></canvas>
    )
}

export default RadialCanvas