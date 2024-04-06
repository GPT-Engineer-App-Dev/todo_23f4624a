import { useState } from "react";
import { Box, Flex, Heading, Input, Button, Checkbox, Text, Stack } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <Box p={8}>
      <Flex justify="center" mb={8}>
        <Heading>Todo App</Heading>
      </Flex>
      <Flex mb={4}>
        <Input placeholder="Add a new todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} mr={4} />
        <Button onClick={addTodo} colorScheme="blue">
          <FaPlus />
        </Button>
      </Flex>
      <Box>
        {todos.map((todo, index) => (
          <Flex key={index} align="center" mb={2}>
            <Checkbox isChecked={todo.completed} onChange={() => toggleTodo(index)} mr={4} />
            <Text as={todo.completed ? "del" : "span"} flexGrow={1} color={todo.completed ? "gray.500" : "inherit"}>
              {todo.text}
            </Text>
            <Button onClick={() => deleteTodo(index)} colorScheme="red" ml={4}>
              Delete
            </Button>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default Index;
