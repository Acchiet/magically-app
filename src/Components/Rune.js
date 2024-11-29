import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";

export default function Rune() {
  const [init, setInit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const [circle, setCircle] = useState(null);
  const [trianglePoints, setTrianglePoints] = useState([]);
  const [currentPointIndex, setCurrentPointIndex] = useState(0);
  const [smallCircleClicked, setSmallCircleClicked] = useState(false);
  const [smallTriangleClicked, setSmallTriangleClicked] = useState(false);
  const [verticalLineClicked, setVerticalLineClicked] = useState(false);
  const [firstDiagonalClicked, setFirstDiagonalClicked] = useState(false);
  const [secondDiagonalClicked, setSecondDiagonalClicked] = useState(false);
  
  const scale = 0.8; // Reduzir o tamanho do bagulho

  const handleButtonClick = () => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const newCircle = { x: centerX, y: centerY, radius: 200 * scale };
    setCircle(newCircle);

    const triangleSize = 40 * scale;
    const points = [
      { x: centerX, y: centerY - triangleSize },
      { x: centerX - newCircle.radius * Math.cos(Math.PI / 6), y: centerY + newCircle.radius / 2 },
      { x: centerX + newCircle.radius * Math.cos(Math.PI / 6), y: centerY + newCircle.radius / 2 }
    ];
    setTrianglePoints(points);
  };

  const handlePointClick = (index) => {
    if (index === currentPointIndex) {
      setCurrentPointIndex(currentPointIndex + 1);
    }
  };

  const handleSmallCircleClick = () => {
    setSmallCircleClicked(true);
  };

  const handleSmallTriangleClick = () => {
    setSmallTriangleClicked(true);
  };

  const handleVerticalLineClick = () => {
    setVerticalLineClicked(true);
  };

  const handleFirstDiagonalClick = () => {
    setFirstDiagonalClicked(true);
  };

  const handleSecondDiagonalClick = () => {
    setSecondDiagonalClicked(true);
    setTimeout(() => { navigate('/Tag');}, 3000);
  };

  return (
    <div className="App">
      {init && <Particles className="particles-container" options={particlesOptions} />}
      {!circle && (
        <button
          onClick={handleButtonClick}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Clique aqui
        </button>
      )}
      {circle && (
        <svg viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`} className="svg-container">
          <circle cx={circle.x} cy={circle.y} r={circle.radius} />
          {trianglePoints.map((point, index) => (
            <g key={index}>
              {index === currentPointIndex && (
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={10 * scale}
                  style={{
                    fill: 'yellow',
                    filter: 'drop-shadow(0 0 5px yellow) drop-shadow(0 0 25px yellow) drop-shadow(0 0 50px yellow) drop-shadow(0 0 100px yellow) drop-shadow(0 0 200px yellow)'
                  }}
                  onClick={() => handlePointClick(index)}
                />
              )}
            </g>
          ))}
          {currentPointIndex === 3 && (
            <>
              <polygon points={trianglePoints.map(p => `${p.x},${p.y}`).join(' ')} />
              {!smallCircleClicked && (
                <circle
                  cx={trianglePoints[0].x}
                  cy={trianglePoints[0].y - 40 * scale}
                  r={10 * scale}
                  style={{
                    fill: 'yellow',
                    filter: 'drop-shadow(0 0 5px yellow) drop-shadow(0 0 25px yellow) drop-shadow(0 0 50px yellow) drop-shadow(0 0 100px yellow) drop-shadow(0 0 200px yellow)'
                  }}
                  onClick={handleSmallCircleClick}
                />
              )}
              {smallCircleClicked && (
                <>
                  <circle cx={trianglePoints[0].x} cy={trianglePoints[0].y - 50 * scale} r={50 * scale} />
                  {!smallTriangleClicked && (
                    <circle
                      cx={trianglePoints[0].x}
                      cy={trianglePoints[0].y - 120 * scale}
                      r={10 * scale}
                      style={{
                        fill: 'yellow',
                        filter: 'drop-shadow(0 0 5px yellow) drop-shadow(0 0 25px yellow) drop-shadow(0 0 50px yellow) drop-shadow(0 0 100px yellow) drop-shadow(0 0 200px yellow)'
                      }}
                      onClick={handleSmallTriangleClick}
                    />
                  )}
                  {smallTriangleClicked && (
                    <>
                      <polygon
                        points={[
                          { x: trianglePoints[0].x, y: trianglePoints[0].y - 160 * scale },
                          { x: trianglePoints[0].x - 30 * scale, y: trianglePoints[0].y - 100 * scale },
                          { x: trianglePoints[0].x + 30 * scale, y: trianglePoints[0].y - 100 * scale }
                        ].map(p => `${p.x},${p.y}`).join(' ')}
                      />
                      {!verticalLineClicked && (
                        <circle
                          cx={trianglePoints[0].x}
                          cy={trianglePoints[0].y + 20 * scale}
                          r={10 * scale}
                          style={{
                            fill: 'yellow',
                            filter: 'drop-shadow(0 0 5px yellow) drop-shadow(0 0 25px yellow) drop-shadow(0 0 50px yellow) drop-shadow(0 0 100px yellow) drop-shadow(0 0 200px yellow)'
                          }}
                          onClick={handleVerticalLineClick}
                        />
                      )}
                      {verticalLineClicked && (
                        <>
                          <line
                            x1={trianglePoints[0].x}
                            y1={trianglePoints[0].y}
                            x2={trianglePoints[0].x}
                            y2={circle.y + circle.radius}
                          />
                          {!firstDiagonalClicked && (
                            <circle
                              cx={trianglePoints[0].x}
                              cy={trianglePoints[0].y + 40 * scale}
                              r={10 * scale}
                              style={{
                                fill: 'yellow',
                                filter: 'drop-shadow(0 0 5px yellow) drop-shadow(0 0 25px yellow) drop-shadow(0 0 50px yellow) drop-shadow(0 0 100px yellow) drop-shadow(0 0 200px yellow)'
                              }}
                              onClick={handleFirstDiagonalClick}
                            />
                          )}
                          {firstDiagonalClicked && (
                            <>
                              <line
                                x1={trianglePoints[0].x + 20 * scale}
                                y1={trianglePoints[0].y + 40 * scale}
                                x2={trianglePoints[0].x - 20 * scale}
                                y2={trianglePoints[0].y + 60 * scale}
                              />
                              {!secondDiagonalClicked && (
                                <circle
                                  cx={trianglePoints[0].x}
                                  cy={trianglePoints[0].y + 100 * scale}
                                  r={10 * scale}
                                  style={{
                                    fill: 'yellow',
                                    filter: 'drop-shadow(0 0 5px yellow) drop-shadow(0 0 25px yellow) drop-shadow(0 0 50px yellow) drop-shadow(0 0 100px yellow) drop-shadow(0 0 200px yellow)'
                                  }}
                                  onClick={handleSecondDiagonalClick}
                                />
                              )}
                              {secondDiagonalClicked && (
                                <line
                                  x1={trianglePoints[0].x + 20 * scale}
                                  y1={trianglePoints[0].y + 70 * scale}
                                  x2={trianglePoints[0].x - 20 * scale}
                                  y2={trianglePoints[0].y + 90 * scale}
                                />
                              )}
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}
        </svg>
      )}
    </div>
  );
}
