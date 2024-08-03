from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Dict
from flask import Flask
import networkx as nx
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app = FastAPI()

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}


class Node(BaseModel):
    id: str
    type: str
    data: Dict

class Edge(BaseModel):
    source: str
    target: str
    id: str

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

@app.post("/pipelines/parse")
async def parse_pipeline(pipeline: Pipeline):
    G = nx.DiGraph()
    
    for node in pipeline.nodes:
        G.add_node(node.id)
    
    for edge in pipeline.edges:
        G.add_edge(edge.source, edge.target)
    
    num_nodes = G.number_of_nodes()
    num_edges = G.number_of_edges()
    is_dag = nx.is_directed_acyclic_graph(G)
    
    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }
