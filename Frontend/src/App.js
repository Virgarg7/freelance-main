import React from 'react';
import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import axios from 'axios';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

function App() {
  const { nodes, edges } = useStore(selector, shallow);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8000/pipelines/parse', {
        nodes: nodes.map(node => ({ id: node.id, data: node.data })),
        edges: edges.map(edge => ({
          source: edge.source,
          target: edge.target,
          type: edge.type
        })),
      });

      const { num_nodes, num_edges, is_dag } = response.data;
      alert(`Number of Nodes: ${num_nodes}\nNumber of Edges: ${num_edges}\nIs DAG: ${is_dag}`);
    } catch (error) {
      console.error('Error submitting the pipeline:', error);
      alert('Failed to submit the pipeline.');
    }
  };

  return (
    <div
      style={{
        minHeight: "100svh",
        display: "grid",
        gridTemplateRows: "auto 1fr",
      }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          boxShadow: "0px 1px 5px gray",
        }}>
        <PipelineToolbar />
        <SubmitButton onClick={handleSubmit} />
      </div>
      <PipelineUI />
    </div>
  );
}

export default App;
