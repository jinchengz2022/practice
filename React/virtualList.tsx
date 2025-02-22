import React, { useState, useRef, useEffect } from "react";

export const VirtualTable = ({ data, rowHeight, visibleRows }: any) => {
  const tableRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);
  const preloadRows = 5; // 预加载行数

  const handleScroll = (e: any) => {
    setScrollTop(e.target.scrollTop);
  };

  const startRow = Math.max(0, Math.floor(scrollTop / rowHeight) - preloadRows);
  const endRow = startRow + visibleRows + 2 * preloadRows;

  const visibleData = data.slice(startRow, endRow);

  return (
    <div
      ref={tableRef}
      style={{
        height: visibleRows * rowHeight,
        overflowY: "auto",
        position: "relative",
      }}
      onScroll={handleScroll}
    >
      <div
        style={{
          height: data.length * rowHeight,
          position: "relative",
        }}
      >
        {visibleData.map((item: any, index: any) => (
          <div
            key={index}
            style={{
              position: "absolute",
              top: (startRow + index) * rowHeight,
              height: rowHeight,
              width: "100%",
              border: "1px solid #ccc",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
