import { Paper, Typography } from "@mui/material";

export default function AboutPage() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
        Acerca de
      </Typography>

      <Typography color="text.secondary">
        Examen elaborado por David Frías      
      </Typography>
    </Paper>
  );
}