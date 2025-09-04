import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  Typography,
} from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import type React from "react";
import { Link } from "react-router-dom";
import type { Istep } from "../../interfaces";

interface ITaskStepProps {
  steps: Istep[];
  onToggle: (stepId: string) => void;
}

export const TaskStep: React.FC<ITaskStepProps> = ({ steps, onToggle }) => {
  return (
    <Box display="flex" flexDirection="column">
      {steps.map((step, index) => (
        <FormControl key={step.id} sx={{ marginBottom: 1 }}>
          <Box display="flex" alignItems="center">
            <Typography marginRight={1}>{index + 1}º</Typography>
            <FormControlLabel
              control={
                <Checkbox
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<RadioButtonCheckedIcon />}
                  onChange={() => onToggle(step.id)}
                  checked={step.completed}
                  sx={{
                    paddingRight: 1,
                  }}
                />
              }
              label={
                <Box
                  sx={{
                    flex: 1,
                    minWidth: 0,
                    wordBreak: "break-word",
                  }}
                >
                  {step.title.startsWith("http") ? (
                    <Link to={step.title} target="_blank" rel="step link">
                      <Typography sx={{ wordBreak: "break-word" }}>
                        {step.title}
                      </Typography>
                    </Link>
                  ) : (
                    <Typography sx={{ wordBreak: "break-word" }}>
                      {step.title}
                    </Typography>
                  )}
                </Box>
              }
            />
          </Box>
        </FormControl>
      ))}
    </Box>
  );
};
