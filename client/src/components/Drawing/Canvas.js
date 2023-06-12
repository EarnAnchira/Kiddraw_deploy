import React, { useRef, useEffect, useState } from 'react';
import './Canvas.css';

import paperHead from './paperhead.png';
import headLine from './headline.png';

// router
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

const Canvas = () => {
    // router
    const { StoryID } = useParams("");
    const { UserName } = useParams("");
    const { CustomID } = useParams("");
    const { CharacterID } = useParams("");
    const [dataC, setDataC] = useState([]);
    const history = useNavigate();

    // canvas
    const canvasWidth = 600;
    const canvasHeight = 550;
    const canvasRef = useRef(null);
    const isDrawing = useRef(false);
    const lines = useRef([]);
    const contextRef = useRef(null);

    // default pen style
    const [color, setColor] = useState('#000000');
    const [size, setSize] = useState(15);

    const startDrawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = getOffsetCoords(nativeEvent);
        isDrawing.current = true;
        const newLine = { points: [[offsetX, offsetY]], color, size };
        lines.current.push(newLine);
    };

    const draw = ({ nativeEvent }) => {
        if (!isDrawing.current) return;
        const { offsetX, offsetY } = getOffsetCoords(nativeEvent);
        const currentLine = lines.current[lines.current.length - 1];
        currentLine.points.push([offsetX, offsetY]);

        const context = canvasRef.current.getContext('2d');
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        lines.current.forEach((line) => {
        context.beginPath();
        context.strokeStyle = line.color;
        context.lineWidth = line.size;
        line.points.forEach(([x, y], index) => {
            if (index === 0) {
            context.moveTo(x, y);
            } else {
            context.lineTo(x, y);
            }
        });
        context.stroke();
        });
    };

    const stopDrawing = () => {
        isDrawing.current = false;
    };

    const getOffsetCoords = (event) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const clientX = event.clientX || event.touches[0].clientX;
        const clientY = event.clientY || event.touches[0].clientY;
        const offsetX = clientX - rect.left;
        const offsetY = clientY - rect.top;
        return { offsetX, offsetY };
    };

    // adjust pen style
    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    const handleSizeChange = (event) => {
        setSize(Number(event.target.value));
    };

    // undo
    const handleUndo = () => {
        lines.current.pop();
        redrawCanvas();
    };

    const redrawCanvas = () => {
        const context = canvasRef.current.getContext('2d');
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        lines.current.forEach((line) => {
        context.beginPath();
        context.strokeStyle = line.color;
        context.lineWidth = line.size;
        line.points.forEach(([x, y], index) => {
            if (index === 0) {
            context.moveTo(x, y);
            } else {
            context.lineTo(x, y);
            }
        });
        context.stroke();
        });
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        contextRef.current = context;
        context.lineJoin = 'round';
        context.lineCap = 'round';
        context.lineWidth = size;
    }, [size]);

    // next
    const saveDrawing = async (e) => {
        e.preventDefault();
        const canvas = canvasRef.current;
        const pngData = canvas.toDataURL('image/png');
        axios.post(`/canvas/${UserName}/${StoryID}`, { pngData })
        .then(() => {
            history(`/homeuser/${UserName}/${StoryID}/poseanimator`)
            console.log('Drawing saved successfully');
        })
        .catch((error) => {
            console.error('Error saving drawing:', error);
        });
    };

    const getDataCustom = async () => {
        const res = await fetch(`/poseanimatorCustom/${StoryID}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
        });
        const data = await res.json();
        console.log(data);
        if (res.status === 422 || !data) {
        console.log("error ");

        } else {
        setDataC(data[0])
        console.log("get data");
        }
    }

    useEffect(() => {
        getDataCustom();
    }, []);

  return (
    <div className="canvas-wrapper">
        <img width="650" src={paperHead}></img>

        <div className="paper">
            <img width="350" src={headLine} style={{margin:"20px 20px 20px 20px"}}></img>
            <canvas className="canvas"
                ref={canvasRef}
                width={canvasWidth}
                height={canvasHeight}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseOut={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
            />

            <div className="tool">
                <label> COLOR </label>
                <input className="colorPicker"
                    type="color"
                    value={color}
                    onChange={handleColorChange}
                    
                />

                <label> SIZE </label>
                <input className="penSize"
                    type="range"
                    min="1"
                    max="50"
                    value={size}
                    onChange={handleSizeChange}
                />

                <button className="undo_btn" onClick={handleUndo}> UNDO </button>
            </div>

            <button className="next_btn" onClick={saveDrawing}> NEXT </button>
        </div>

    </div>
  );  
};
export default Canvas;
