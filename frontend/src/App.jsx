import { useState } from "react";
import MetricCard from "./components/MetricCard";

function App() {
  const [nodeCount, setNodeCount] = useState(12);
  const [isLive, setIsLive] = useState(true);

  return (
    <main
      style={{
        padding: "2rem",
        fontFamily: "sans-serif",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>CC 106 Dashboard Engine</h1>

        <button onClick={() => setIsLive(!isLive)}>
          {isLive
            ? "⏹ Stop Live Streams"
            : "▶️ Resume Live Streams"}
        </button>
      </header>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        <MetricCard
          title="Active Cluster Nodes"
          value={`${nodeCount} Nodes`}
          status={nodeCount > 5 ? "optimal" : "warning"}
        />

        <MetricCard
          title="Stream Engine Status"
          value={isLive ? "Ingesting" : "Paused"}
          status={isLive ? "optimal" : "warning"}
        />
      </div>

      <div style={{ marginTop: "2rem" }}>
        <button
          onClick={() => setNodeCount((prev) => prev + 1)}
          style={{ marginRight: "10px" }}
        >
          ⚡ Provision New Node
        </button>

        <button
          onClick={() =>
            setNodeCount((prev) => Math.max(0, prev - 1))
          }
        >
          ⚠️ Decommission Node
        </button>
      </div>
    </main>
  );
}

export default App;