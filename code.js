// code.js — Figma plugin main thread (beautified UI companion)
// Opens the UI at a comfortable size; Figma will clamp if oversized.
figma.showUI(__html__, { width: 980, height: 640 });

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'EXPORT_SVG' && typeof msg.svg === 'string') {
    try {
      const node = figma.createNodeFromSvg(msg.svg);
      // Place at viewport center
      const { x: cx, y: cy } = figma.viewport.center;
      node.x = cx - node.width / 2;
      node.y = cy - node.height / 2;
      figma.currentPage.appendChild(node);
      figma.notify('✅ Graph exported to canvas');
    } catch (e) {
      console.error(e);
      figma.notify('❌ Failed to export SVG. See console for details.');
    }
  }

  if (msg.type === 'CLOSE') {
    figma.closePlugin();
  }
};
