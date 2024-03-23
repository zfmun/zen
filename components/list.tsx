"use client"

import * as React from "react"
const { format, subDays } = require('date-fns');

import { cn } from "@/lib/utils"
import { ScrollArea } from "./ui/scroll-area"
import { Separator } from "./ui/separator"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `Entry ${a.length - i}`
)

const startDate = new Date(2024, 0, 1); // January 1, 2024
const numDays = 50; // Number of dates to generate

const dates = Array.from({ length: numDays }).map((_, index) =>
  format(subDays(startDate, index), 'MM/dd/yyyy')
);

export function ToDoList() {
  return (
    <ScrollArea className="h-screen">
      <div className="flex flex-col gap-2 p-4 pt-0">
        {dates.map((date, index) => (
          <>
            <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
              <div className="flex w-full flex-col gap-2">
                <div key={index} className="text-sm">
                  <div className="font-semibold">{date}</div>
                  <div className="text-xs font-medium text-muted-foreground">Title</div>
                </div>
              </div>
            </button>
          </>
        ))}
      </div>
    </ScrollArea>
  )
}
