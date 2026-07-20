export default function MetricCard({ title, value, status }) {
  const statusColor = status === "optimal" ? "green" : "orange";

  return (
    <div
      className="card"
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
        width: "250px",
        textAlign: "center",
      }}
    >
      <h3>{title}</h3>

      <p
        style={{
          fontSize: "1.8rem",
          fontWeight: "bold",
        }}
      >
        {value}
      </p>

      <span
        style={{
          color: statusColor,
          fontWeight: "bold",
        }}
      >
        {status === "optimal" ? "✅" : "⚠️"} System Status:{" "}
        {status.toUpperCase()}
      </span>
    </div>
  );
}