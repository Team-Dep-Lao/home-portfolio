import { cn } from "@/lib/utils";
import React from "react";

interface CircularProgressProps {
  percentage: number; // Giá trị phần trăm (0-100)
  size?: number; // Kích thước của hình tròn
  strokeWidth?: number; // Độ dày của đường tròn
  label?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  size = 100,
  strokeWidth = 10,
  label,
}) => {
  const radius = (size - strokeWidth) / 2; // Bán kính của hình tròn
  const circumference = 2 * Math.PI * radius; // Chu vi của đường tròn
  const offset = circumference - (percentage / 100) * circumference; // Độ dài để hiển thị phần trăm
  const color =
    percentage > 85
      ? "green"
      : percentage > 65
      ? "blue"
      : percentage > 30
      ? "orange"
      : "red";
  const textColor =
    percentage > 85
      ? "fill-green-500"
      : percentage > 65
      ? "fill-blue-500"
      : percentage > 30
      ? "fill-orange-500"
      : "fill-red-500";

  return (
    <div className="flex flex-col items-center gap-2">
      <svg
        width={size}
        height={size}
        className="block mx-auto"
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* Đường tròn nền */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="gray"
          strokeWidth={strokeWidth}
          className="opacity-20"
        />
        {/* Đường tròn phần trăm */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500"
          transform={`rotate(180 ${size / 2} ${size / 2})`} // Xoay điểm bắt đầu lên 12 giờ
        />
        {/* Văn bản hiển thị phần trăm */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          className={cn([`text-xl font-bold`, textColor])}
        >
          {percentage}%
        </text>
      </svg>
      <div className="text-white font-bold text-lg">{label}</div>
    </div>
  );
};

export default CircularProgress;
