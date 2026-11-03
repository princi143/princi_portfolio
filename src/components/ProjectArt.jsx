// Schematic drawings of how each project works. They inherit the page palette
// through currentColor and CSS variables, so they morph with the chapter colour.

const Packet = ({ path, dur = '3s', delay = '0s' }) => (
  <circle r="5" className="art-packet">
    <animateMotion dur={dur} begin={delay} repeatCount="indefinite" path={path} />
  </circle>
);

function Schedulink() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const booked = new Set(['0-1', '0-4', '1-0', '1-2', '2-3', '3-1', '3-5', '4-0', '4-2', '4-4']);
  return (
    <svg viewBox="0 0 480 360" role="img" aria-label="Weekly availability grid with booked slots and one slot being selected">
      {days.map((d, c) => (
        <text key={d} x={94 + c * 82} y="40" className="art-label" textAnchor="middle">{d}</text>
      ))}
      {['9:00', '10:00', '11:00', '12:00', '14:00', '15:00'].map((t, r) => (
        <text key={t} x="4" y={78 + r * 46} className="art-label">{t}</text>
      ))}
      {days.map((_, c) =>
        Array.from({ length: 6 }).map((__, r) => {
          const key = `${c}-${r}`;
          const picked = key === '2-1';
          return (
            <rect
              key={key}
              x={60 + c * 82}
              y={58 + r * 46}
              width="68"
              height="34"
              rx="6"
              className={picked ? 'art-hot' : booked.has(key) ? 'art-fill' : 'art-slot'}
            />
          );
        }),
      )}
      <path d="M256 129 l8 8 l14 -16" className="art-check" />
      <Packet path="M40 340 C 160 330, 220 200, 264 121" dur="4s" />
    </svg>
  );
}

function FinSync() {
  return (
    <svg viewBox="0 0 480 360" role="img" aria-label="Broker statements flowing through normalise and de-duplicate steps into a capital gains ledger, with one mismatch flagged">
      {['Zerodha', 'Groww', 'Other'].map((b, i) => (
        <g key={b}>
          <rect x="16" y={60 + i * 90} width="96" height="60" rx="6" className="art-slot" />
          <text x="64" y={95 + i * 90} textAnchor="middle" className="art-label">{b}</text>
          <path d={`M112 ${90 + i * 90} C 160 ${90 + i * 90}, 160 180, 196 180`} className="art-wire" />
        </g>
      ))}
      <rect x="196" y="150" width="96" height="60" rx="30" className="art-fill" />
      <text x="244" y="185" textAnchor="middle" className="art-label art-label-inv">normalise</text>
      <path d="M292 180 H 330" className="art-wire" />
      <rect x="330" y="70" width="134" height="220" rx="8" className="art-slot" />
      {['STCG', 'LTCG', 'Dividend', 'AIS'].map((row, i) => (
        <g key={row}>
          <text x="346" y={110 + i * 48} className="art-label">{row}</text>
          <rect x="412" y={98 + i * 48} width="38" height="16" rx="4" className={i === 3 ? 'art-hot' : 'art-fill'} />
        </g>
      ))}
      <Packet path="M112 90 C 160 90, 160 180, 196 180 H 330" dur="3.2s" />
      <Packet path="M112 270 C 160 270, 160 180, 196 180 H 330" dur="3.2s" delay="1.6s" />
    </svg>
  );
}

function TrustIQ() {
  const models = [
    { name: 'Model A', trust: 0.62, lat: 0.4 },
    { name: 'Model B', trust: 0.88, lat: 0.7, pick: true },
    { name: 'Model C', trust: 0.48, lat: 0.9 },
    { name: 'Model D', trust: 0.74, lat: 0.3 },
  ];
  return (
    <svg viewBox="0 0 480 360" role="img" aria-label="Benchmark bars comparing trust and latency for four models, with Model B recommended">
      <text x="140" y="36" className="art-label">trust</text>
      <text x="330" y="36" className="art-label">speed</text>
      {models.map((m, i) => (
        <g key={m.name}>
          <text x="16" y={84 + i * 70} className="art-label">{m.name}</text>
          <rect x="140" y={68 + i * 70} width="160" height="22" rx="4" className="art-slot" />
          <rect x="140" y={68 + i * 70} width={160 * m.trust} height="22" rx="4" className={m.pick ? 'art-hot' : 'art-fill'} />
          <rect x="330" y={68 + i * 70} width="130" height="22" rx="4" className="art-slot" />
          <rect x="330" y={68 + i * 70} width={130 * m.lat} height="22" rx="4" className={m.pick ? 'art-hot' : 'art-fill'} />
        </g>
      ))}
      <path d="M100 145 H 126" className="art-wire" />
      <circle cx="96" cy="145" r="5" className="art-dot-hot" />
    </svg>
  );
}

function SafeTwin() {
  const nodes = { A: [60, 180], B: [170, 90], C: [170, 270], D: [290, 90], E: [290, 200], F: [410, 150] };
  const edges = [['A', 'B'], ['A', 'C'], ['B', 'D'], ['B', 'E'], ['C', 'E'], ['D', 'F'], ['E', 'F']];
  const cascade = new Set(['B-E', 'E-F', 'B-D']);
  return (
    <svg viewBox="0 0 480 360" role="img" aria-label="Machine dependency graph where a failure at node B cascades through E to F">
      {edges.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
          className={cascade.has(`${a}-${b}`) ? 'art-wire-hot' : 'art-wire'}
        />
      ))}
      {Object.entries(nodes).map(([k, [x, y]]) => (
        <g key={k}>
          <circle cx={x} cy={y} r="26" className={k === 'B' ? 'art-hot' : 'art-fill'} />
          <text x={x} y={y + 5} textAnchor="middle" className="art-label art-label-inv">{k}</text>
        </g>
      ))}
      <circle cx="170" cy="90" r="38" className="art-ring" />
      <text x="60" y="246" textAnchor="middle" className="art-label">safe window</text>
      <Packet path="M170 90 L 290 200 L 410 150" dur="2.6s" />
    </svg>
  );
}

const art = { schedulink: Schedulink, finsync: FinSync, trustiq: TrustIQ, 'safe-twin': SafeTwin };

export default function ProjectArt({ id }) {
  const Art = art[id];
  return Art ? <Art /> : null;
}
