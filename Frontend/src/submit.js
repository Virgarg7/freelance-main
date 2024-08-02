import React from 'react';
import axios from 'axios';
import { FaSave } from "react-icons/fa";
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        backgroundColor: "#5f71d5",
        paddingInline: "16px",
        alignSelf: "center",
        color: "#eee",
        outline: "none",
        border: "none",
        borderRadius: "4px",
        paddingBlock: "8px",
        cursor: "pointer",
      }}>
      <FaSave color="#eeeeee" />
      <span>Submit</span>
    </button>
  );
};
