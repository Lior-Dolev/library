import type { FC } from "react";
import { styled, useTheme } from "@mui/material";
import "./TubeProgress.css";

const TubePart = styled(`span`)({
  display: "block",
  position: "relative",
});

const TubeEdge = styled(TubePart)({
  height: "5%",
  background:
    "linear-gradient(90deg, #000 0%, #fff 15%, #eee 20%, #000 40%, #000 90%, #fff 95%, #000 100%)",
});

const TubeBody = styled(TubePart)({
  height: "90%",
});

interface ValuesConfig {
  dangerLimit: number;
  warningLimit: number;
}

export interface TubeProgressProps {
  /**
   * Precentage 1-100
   */
  value?: number;

  valuesConfig?: ValuesConfig;
}

const TubeProgress: FC<TubeProgressProps> = ({
  value = 80,
  valuesConfig: { dangerLimit, warningLimit } = {
    dangerLimit: 20,
    warningLimit: 40,
  },
}: TubeProgressProps) => {
  const theme = useTheme();
  const color: string =
    value < dangerLimit
      ? theme.palette.error.main
      : value < warningLimit
      ? theme.palette.warning.main
      : theme.palette.success.main;

  return (
    <div
      className="bar-chart tube"
      style={
        {
          "--tube-value": `${value}%`,
          "--tube-color": color,
        } as any
      }
    >
      <TubeEdge />
      <TubeBody />
      <TubeEdge />
    </div>
  );
};

export default TubeProgress;
