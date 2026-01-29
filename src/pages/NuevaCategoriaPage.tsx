import { useState } from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";

export default function CalculosPage() {

    const [categoria, setCategoria] = useState("");
    const [descripcion, setdescripcion] = useState("");

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h4" fontWeight={900} gutterBottom>
      Registrar Nueva Categoría
      </Typography>

      <Typography variant="h5" fontWeight={900} gutterBottom>
      Nombre de la categoría:
      </Typography>

      <TextField  
        type="string"
        value={categoria}
        onChange={(e) => setCategoria (e.target.value)}
        sx={{ mr: 2, mb: 2 }}
      />

    <Typography variant="h5" fontWeight={900} gutterBottom>
      Descripción:
      </Typography>

      <TextField
        type="string"
        value={descripcion}
        onChange={(e) => setdescripcion (e.target.value)}
        sx={{ mr: 2, mb: 2 }}
      />
       <br/><br/>
      <Button  variant="contained" color="primary">Guardar Categoría</Button>
    </Paper>
  );
}