import React, { useEffect, useState } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  
} from "@mui/material";

function Propiedad() {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const data = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/admin/allUser"
      );
      const data = response.data;

      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    data();
  }, []);

  return (
    <>
      {" "}
      <Box textAlign="center" p={3}>
        {user && user.length > 0 ? (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Usuario</TableCell>
                <TableCell>Favoritos</TableCell>

                <TableCell> Eliminar Usuario</TableCell>
                <TableCell> Admin</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={2}>
                      <Button variant="contained">Favoritos</Button>
                    </Stack>
                  </TableCell>

                  <TableCell>
                    <Stack direction="row" spacing={2}>
                      <Button variant="contained">Delete</Button>
                    </Stack>
                  </TableCell>
                  <TableCell>{user.admin == true ? "SI" : "NO"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : null}
      </Box>
    </>
  );
}

export default Propiedad;
