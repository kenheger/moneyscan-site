"use client";

import * as React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

// Calculate compound interest balance over time
function calculateGrowth(
  principal: number,
  rate: number,
  years: number,
): { year: number; balance: number; contribution: number }[] {
  const data = [];
  for (let year = 0; year <= years; year++) {
    const balance = principal * Math.pow(1 + rate / 100, year);
    data.push({
      year,
      balance: Math.round(balance),
      contribution: principal,
    });
  }
  return data;
}

const rateOptions = ["8", "10", "12", "15"];
const yearOptions = ["10", "15", "20", "30"];

export function CompoundInterestChart() {
  const [principal, setPrincipal] = React.useState(59000);
  const [rate, setRate] = React.useState("12");
  const [years, setYears] = React.useState("15");

  const data = calculateGrowth(
    principal,
    parseInt(rate),
    parseInt(years),
  );

  const finalBalance = data[data.length - 1].balance;
  const crossesAt = data.findIndex(
    (d) => d.balance > principal,
  );

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">
          Compound Interest: Growth vs. Total Investment
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Controls */}
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex-1 min-w-[140px]">
            <Label className="text-xs text-muted-foreground">
              Initial Investment
            </Label>
            <Input
              type="number"
              value={principal}
              onChange={(e) =>
                setPrincipal(Number(e.target.value) || 0)
              }
              className="h-9"
            />
          </div>
          <div className="w-[100px]">
            <Label className="text-xs text-muted-foreground">
              Return %
            </Label>
            <Select value={rate} onValueChange={setRate}>
              <SelectTrigger className="h-9">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {rateOptions.map((r) => (
                  <SelectItem key={r} value={r}>
                    {r}%
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="w-[100px]">
            <Label className="text-xs text-muted-foreground">Years</Label>
            <Select value={years} onValueChange={setYears}>
              <SelectTrigger className="h-9">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {yearOptions.map((y) => (
                  <SelectItem key={y} value={y}>
                    {y}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Summary */}
        <div className="flex gap-6 mb-4 text-sm">
          <div>
            <span className="text-muted-foreground">Principal: </span>
            <span className="font-semibold">
              ${principal.toLocaleString()}
            </span>
          </div>
          <div>
            <span className="text-muted-foreground">Final: </span>
            <span className="font-semibold text-emerald-600">
              ${finalBalance.toLocaleString()}
            </span>
          </div>
          {crossesAt > 0 && (
            <div>
              <span className="text-muted-foreground">
                Crosses at:{" "}
              </span>
              <span className="font-semibold">Year {crossesAt}</span>
            </div>
          )}
        </div>

        {/* Chart */}
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" opacity={0.3} />
              <XAxis
                dataKey="year"
                tick={{ fontSize: 12 }}
                tickFormatter={(v) => `Yr ${v}`}
              />
              <YAxis
                tick={{ fontSize: 12 }}
                tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`}
              />
              <Tooltip
                formatter={(value: number) => [
                  `$${value.toLocaleString()}`,
                  "",
                ]}
                labelFormatter={(label) => `Year ${label}`}
              />
              <Legend
                verticalAlign="top"
                height={36}
                formatter={(value) =>
                  value === "balance"
                    ? "Total Balance"
                    : "Total Investment"
                }
              />
              <Line
                type="monotone"
                dataKey="balance"
                stroke="#10b981"
                strokeWidth={2.5}
                dot={false}
                name="balance"
              />
              <Line
                type="monotone"
                dataKey="contribution"
                stroke="#ef4444"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
                name="contribution"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}