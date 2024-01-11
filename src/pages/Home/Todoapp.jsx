import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  styled,
  TextField,
  Grid,
  IconButton,
  Tooltip,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, removeTodo } from "./redux/todoslice";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const Todoouter = styled("div")({
  ".todoinnerbox": {
    background: "skyblue",
    padding: "50px 20px",
    height: "100vh",
  },
  ".todobox": {
    background: "lightgreen",
    padding: "10px 20px",
    marginBottom: "20px",
    borderRadius: "7px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    "& h5": {
      wordBreak: "break-all",
    },
  },
});

function Todoapp() {
  const [todovalue, setTodovalue] = useState("");
  const todolist = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const username= JSON.parse(localStorage.getItem('userDetails'));



  const handleChange = (e) => {
    setTodovalue(e.target.value);
  };

  const handletodo = () => {
    if (!todovalue.length == 0) {
      dispatch(addtodo(todovalue));
      setTodovalue("");
    } 
    else {
      toast.error("Field can not be empty");
    }
  };
  const handleremove = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <Todoouter>
      <Container maxWidth="sm">
        <Box className="todoinnerbox">
            <Typography variant="h4" align="center" >Hello <span style={{color:'tomato'}}>{username.username}</span></Typography>
          <Box align="center" pb={3}>
            <Typography variant="h3">Todo App</Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item lg={7} md={6}>
              <TextField
                variant="outlined"
                placeholder="Enter anything"
                size="small"
                fullWidth
                onChange={handleChange}
                value={todovalue}
                autoComplete="off"
              />
            </Grid>
            <Grid item lg={5} md={6}>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                size="medium"
                onClick={handletodo}
              >
                Add
              </Button>
            </Grid>
          </Grid>
          <Box mt={5}>
            {todolist.length === 0 ? (
              <>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="h4">NO Data</Typography>
                </Box>
              </>
            ) : (
              <>
                {todolist.map((data, id) => {
                  return (
                    <Box className="todobox" key={id}>
                      <Typography variant="h5">{data}</Typography>
                      <Tooltip title="Delete Button">
                        <IconButton onClick={() => handleremove(id)}>
                          <MdDelete color="red" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  );
                })}
              </>
            )}
          </Box>
        </Box>
      </Container>
    </Todoouter>
  );
}
export default Todoapp;
