import { useEffect, useState } from "react";

function getLagosTime() {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Lagos",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return formatter.format(new Date());
}

export default function Clock() {
  const [time, setTime] = useState(getLagosTime());

  useEffect(() => {
    const id = setInterval(() => setTime(getLagosTime()), 1000 * 15);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="whitespace-nowrap font-mono text-[11px] tracking-widest text-ink-soft uppercase">
      Lagos — {time} WAT
    </span>
  );
}
