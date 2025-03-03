"use client";

import React, { useState, useEffect } from "react";
import { format, subDays, startOfYear } from "date-fns";
import { useTheme } from "next-themes";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Skeleton } from "@/components/ui/skeleton";

const daysInYear = 365;
const startDate = startOfYear(new Date());

// Generate mock data
type ActivityData = { date: string; count: number };
const generateActivityData = (): ActivityData[] => {
  return Array.from({ length: daysInYear }, (_, index) => {
    const date = subDays(startDate, daysInYear - index - 1);
    return {
      date: format(date, "yyyy-MM-dd"),
      count: Math.floor(Math.random() * 5),
    };
  });
};

const activityData = generateActivityData();

export function HabitHeatmap() {
  const { theme, resolvedTheme, systemTheme } = useTheme();
  const [clientTheme, setClientTheme] = useState<string | null>(null);

  useEffect(() => {
    setClientTheme(resolvedTheme ?? theme ?? systemTheme ?? "light");
  }, [resolvedTheme, theme, systemTheme]);

  const getColor = (count: number) => {
    if (!clientTheme) return "transparent";

    const colors =
      clientTheme === "dark"
        ? ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"]
        : ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];

    return count === 0 ? colors[0] : colors[Math.min(count, colors.length - 1)];
  };

  return (
    <div className="flex justify-center p-4">
      <div className="p-4 border rounded-md">
        {!clientTheme ? (
          <div className="grid grid-flow-col grid-rows-7 gap-1">
            {Array.from({ length: daysInYear }).map((_, idx) => (
              <Skeleton key={idx} className="w-4 h-4 rounded-xs" />
            ))}
          </div>
        ) : (
          <div className="grid grid-flow-col grid-rows-7 gap-1 transition-opacity duration-200 opacity-100">
            {activityData.map((day) => (
              <Tooltip key={day.date}>
                <TooltipTrigger asChild>
                  <div
                    className="w-4 h-4 rounded-xs cursor-pointer transition-transform hover:scale-110"
                    style={{ backgroundColor: getColor(day.count) }}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  {day.count} activities on {day.date}
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
