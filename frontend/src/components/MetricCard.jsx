export default function MetricCard({ title, value, status }) {
  const statusColor =
    status === "optimal" ? "green" : "orange";

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
        width: "250px",
      }}
    >
      <h3>{title}</h3>

      <p
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        {value}
      </p>

      <span style={{ color: statusColor }}>
        System Status: {status.toUpperCase()}
      </span>
    </div>
  );
}