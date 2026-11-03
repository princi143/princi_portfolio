import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../hooks/useLenis';

// Interference pattern of two radio sources, drawn with a tiny WebGL shader.
// Transparent canvas, so the morphing page colour shows through.
const VERT = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;
const FRAG = `
precision mediump float;
uniform vec2 r; uniform float t; uniform vec2 m;
void main(){
  vec2 uv = gl_FragCoord.xy / r;
  vec2 p = (gl_FragCoord.xy - 0.5 * r) / r.y;
  vec2 a = vec2(-0.75, 0.35) + m * 0.18;
  vec2 b = vec2(0.85, -0.45) - m * 0.10;
  float w = sin(length(p - a) * 34.0 - t * 1.1) + sin(length(p - b) * 27.0 - t * 0.8);
  float crest = smoothstep(1.55, 1.92, w);
  float glow = smoothstep(0.6, 1.95, w) * 0.12;
  vec3 lilac = vec3(0.70, 0.66, 1.0);
  vec3 pink = vec3(1.0, 0.31, 0.64);
  vec3 c = mix(lilac, pink, smoothstep(0.15, 0.95, uv.x + 0.15 * sin(t * 0.3)));
  float vig = smoothstep(1.35, 0.15, length(p * vec2(0.9, 1.2)));
  float alpha = (crest * 0.55 + glow) * vig;
  gl_FragColor = vec4(c * alpha, alpha);
}`;

export default function SignalField() {
  const canvas = useRef(null);

  useEffect(() => {
    const cv = canvas.current;
    const gl = cv.getContext('webgl', { premultipliedAlpha: true, antialias: false, alpha: true });
    if (!gl) return undefined;

    const compile = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram();
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'p');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const uR = gl.getUniformLocation(prog, 'r');
    const uT = gl.getUniformLocation(prog, 't');
    const uM = gl.getUniformLocation(prog, 'm');

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e) => {
      mouse.tx = e.clientX / window.innerWidth - 0.5;
      mouse.ty = 0.5 - e.clientY / window.innerHeight;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      cv.width = Math.round(cv.clientWidth * dpr);
      cv.height = Math.round(cv.clientHeight * dpr);
      gl.viewport(0, 0, cv.width, cv.height);
    };

    const draw = (time) => {
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      gl.uniform2f(uR, cv.width, cv.height);
      gl.uniform1f(uT, time / 1000);
      gl.uniform2f(uM, mouse.x, mouse.y);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    resize();
    const reduce = prefersReducedMotion();
    let raf = 0;
    let visible = true;
    const loop = (time) => {
      draw(time);
      if (visible) raf = requestAnimationFrame(loop);
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible && !reduce) raf = requestAnimationFrame(loop);
    });

    if (reduce) draw(4000);
    else io.observe(cv);

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return <canvas ref={canvas} className="signal-field" aria-hidden="true" />;
}
