interface YinYangProps {
  size?: string; // "200px", "12rem", "40vw"
  opacity?: number; // 0 → 1
  speed?: number; // seconds per rotation
  direction?: "clockwise" | "anticlockwise";
  className?: string;
}

const YinYang = ({
  size,
  opacity = 1,
  speed,
  direction = "clockwise",
  className = "",
}: YinYangProps) => {
  return (
    <div
      className={`yin-yang ${className}`}
      style={{
        opacity,
        ...(size && { ["--yy-size" as any]: size }),
        ...(speed && { ["--yy-rotation-duration" as any]: `${speed}s` }),
        ...(direction === "anticlockwise" && {
          ["--yy-rotation-direction" as any]: "reverse",
        }),
      }}
    />
  );
};

export default YinYang;
