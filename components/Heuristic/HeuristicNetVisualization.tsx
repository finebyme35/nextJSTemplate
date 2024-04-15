import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import Modal from 'components/Modal';

interface Node {
  id: string;
  label: string;
}

interface Link {
  source: string;
  target: string;
  weight: number;
}

interface HeuristicsNetDiagramProps {
  graphData: {
    nodes: any[];
    links: Link[];
  };
}

const HeuristicsNetDiagram: React.FC<HeuristicsNetDiagramProps> = ({ graphData }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = React.useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleNodeClick = (event: any, node: Node) => {
    const [x, y] = d3.pointer(event);
    setModalPosition({ x, y });
    setSelectedNode(node);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (!graphData.nodes || !graphData.links || !svgRef.current) return;

    const svg = d3.select<SVGSVGElement, unknown>(svgRef.current);

    // Clear existing content in the SVG
    svg.selectAll('*').remove();

    // Add container as the first child of the SVG
    const container = svg.insert('g', ':first-child');

    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;

    const simulation = d3
      .forceSimulation(graphData.nodes)
      .force('link', d3.forceLink(graphData.links).id((d: any) => d.id))
      .force('charge', d3.forceManyBody().strength(-50))
      .force('center', d3.forceCenter(width / 2, height / 2));

    const link = container
      .selectAll<SVGLineElement, Link>('line.link')
      .data(graphData.links)
      .enter()
      .append('line')
      .attr('class', 'link')
      .style('stroke', 'black');

    const node = container
      .selectAll<SVGCircleElement, Node>('circle.node')
      .data(graphData.nodes)
      .enter()
      .append('circle')
      .attr('class', 'node')
      .attr('r', 10)
      .style('fill', 'green')
      .on('click', (event, d) => handleNodeClick(event, d));;

    const label = container
      .selectAll<SVGTextElement, Node>('text.label')
      .data(graphData.nodes)
      .enter()
      .append('text')
      .attr('class', 'label')
      .text((d: Node) => d.label)
      .attr('x', 15)
      .attr('y', 5)
      .style('fill', 'black');

    const zoomHandler: any = d3.zoom().on('zoom', (event: any) => {
      container.attr('transform', event.transform);
    });

    svg.call(zoomHandler);

    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node.attr('cx', (d: any) => d.x).attr('cy', (d: any) => d.y);

      label.attr('x', (d: any) => d.x + 15).attr('y', (d: any) => d.y + 5);
    });
  }, [graphData]);

  return (
    <svg
      ref={svgRef}
      className="border border-black h-[120vh] w-[70vh]"
      style={{ cursor: 'grab' }}
    >
      <Modal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        nodeId={selectedNode?.id || ''}
        nodeLabel={selectedNode?.label || ''}
        position={modalPosition}
      />
    </svg>
  );
};

export default HeuristicsNetDiagram;
