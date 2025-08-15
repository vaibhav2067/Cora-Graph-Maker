// code.js — Figma plugin main thread
figma.showUI(__html__, { width: 980, height: 640 });

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'EXPORT_SVG' && typeof msg.svg === 'string') {
    try {
      const node = figma.createNodeFromSvg(msg.svg);
      // Place at viewport center
      const viewportCenter = figma.viewport.center;
      node.x = viewportCenter.x - node.width / 2;
      node.y = viewportCenter.y - node.height / 2;
      figma.currentPage.appendChild(node);
      figma.notify('Graph exported to canvas');
    } catch (e) {
      console.error(e);
      figma.notify('Failed to export SVG. See console for details.');
    }
  }

  if (msg.type === 'CLOSE') {
    figma.closePlugin();
  }
};
