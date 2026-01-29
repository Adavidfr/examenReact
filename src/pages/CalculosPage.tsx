import { useState } from "react";
import { Paper, TextField, Typography } from "@mui/material";

export default function CalculosPage() {

    const [baseT, setBaseT] = useState(0);
    const [alturaT, setAlturaT] = useState(0);

    const areaTriangulo = (baseT: number, alturaT: number) => {
        return (baseT * alturaT) / 2;
    }

    const [baseR, setBaseR] = useState(0);
    const [alturaR, setAlturaR] = useState(0);

    const areaRectangulo = (baseR: number, alturaR: number) => {
        return baseR * alturaR;
    }

    const [valor, setValor] = useState(0);

    const calculoIva = (valor: number) => {
        return valor * 0.15;
    }

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h4" fontWeight={900} gutterBottom>
      Cálculos Matemáticos y Comerciales
      </Typography>

      <Typography variant="h5" fontWeight={900} gutterBottom>
      Área de Triángulo
      </Typography>

      <TextField
        label="Base"
        type="number"
        value={baseT}
        onChange={(e) => setBaseT (Number(e.target.value))}
        sx={{ mr: 2, mb: 2 }}
      />

      <TextField
        label="Altura"
        type="number"
        value={alturaT}
        onChange={(e) => setAlturaT(Number(e.target.value))}
        sx={{ mb: 2 }}
      />

      <Typography sx={{ mt: 1 }}>
        Área del triángulo: <strong>{areaTriangulo(baseT, alturaT)}</strong>
      </Typography>

      <br/><br/>

      <Typography variant="h5" fontWeight={900} gutterBottom>
      Área Rectángulo
      </Typography>

      <TextField
        label="Base"
        type="number"
        value={baseR}
        onChange={(e) => setBaseR (Number(e.target.value))}
        sx={{ mr: 2, mb: 2 }}
      />

      <TextField
        label="Altura"
        type="number"
        value={alturaR}
        onChange={(e) => setAlturaR(Number(e.target.value))}
        sx={{ mb: 2 }}
      />

      <Typography sx={{ mt: 1 }}>
        Área del rectángulo: <strong>{areaRectangulo(baseR, alturaR)}</strong>
      </Typography>

            <br/><br/>

      <Typography variant="h5" fontWeight={900} gutterBottom>
      Cálculo Iva
      </Typography>

      <TextField
        label="Valor del producto o servicio"
        type="number"
        value={valor}
        onChange={(e) => setValor (Number(e.target.value))}
        sx={{ mr: 2, mb: 2 }}
      />

      <Typography sx={{ mt: 1 }}>
        Iva calculado: <strong>{ calculoIva(valor )  }</strong>
      </Typography>
    </Paper>
  );
}