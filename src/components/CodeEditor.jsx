import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Box, Button, VStack } from '@chakra-ui/react';

const CodeEditor = () => {
  const [code, setCode] = useState('// Write your code here');

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const runCode = () => {
    try {
      // eslint-disable-next-line no-eval
      eval(code);
    } catch (error) {
      console.error('Error executing code:', error);
    }
  };

  return (
    <VStack spacing={4} align="stretch">
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%" height="400px">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          defaultValue="// Write your code here"
          onChange={handleEditorChange}
        />
      </Box>
      <Button colorScheme="teal" onClick={runCode}>Run Code</Button>
    </VStack>
  );
};

export default CodeEditor;