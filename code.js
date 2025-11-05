figma.showUI(`
<style>${__uiFiles__.styles}</style>
${__uiFiles__.main}`, { width: 980, height: 640 })

// Send user data to UI immediately when plugin starts
figma.ui.postMessage({
  type: 'USER_DATA',
  user: {
    name: (figma.currentUser && figma.currentUser.name) || 'User',
    photoUrl: (figma.currentUser && figma.currentUser.photoUrl) || null
  }
})

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'EXPORT_SVG' && typeof msg.svg === 'string') {
    try {
      const node = figma.createNodeFromSvg(msg.svg);
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