figma.showUI(`
<style>${__uiFiles__.styles}</style>
${__uiFiles__.main}
<script>${__uiFiles__.utils}</script>
<script>${__uiFiles__.data}</script>
<script>${__uiFiles__.exports}</script>
<script>${__uiFiles__.uihelpers}</script>
<script>${__uiFiles__.renderers}</script>
<script>${__uiFiles__.script}</script>`, { width: 980, height: 640 })

function postCurrentUserData() {
  figma.ui.postMessage({
    type: 'USER_DATA',
    user: {
      name: (figma.currentUser && figma.currentUser.name) || 'User',
      photoUrl: (figma.currentUser && figma.currentUser.photoUrl) || null
    }
  });
}

// Send user data to UI immediately when plugin starts
postCurrentUserData();

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'EXPORT_SVG' && typeof msg.svg === 'string') {
    try {
      const { x: cx, y: cy } = figma.viewport.center;
      const animation = msg.animation && typeof msg.animation === 'object' ? msg.animation : null;

      if (animation && animation.enabled) {
        const stateANode = figma.createNodeFromSvg(msg.svg);
        const stateBNode = figma.createNodeFromSvg(msg.svg);

        const stateA = figma.createComponent();
        stateA.name = 'State=Start';
        stateA.resizeWithoutConstraints(Math.max(1, stateANode.width), Math.max(1, stateANode.height));
        stateANode.x = 0;
        stateANode.y = 0;
        stateA.appendChild(stateANode);

        const stateB = figma.createComponent();
        stateB.name = 'State=End';
        stateB.resizeWithoutConstraints(Math.max(1, stateBNode.width), Math.max(1, stateBNode.height));
        stateBNode.x = 0;
        stateBNode.y = 0;
        stateB.appendChild(stateBNode);

        const variantSet = figma.combineAsVariants([stateA, stateB], figma.currentPage);
        variantSet.name = `Graph Animation / ${(animation.chartType || 'chart').toString()}`;
        variantSet.x = cx - variantSet.width / 2;
        variantSet.y = cy - variantSet.height / 2;
        variantSet.setPluginData('graphAnimationSettings', JSON.stringify(animation));
        figma.currentPage.selection = [variantSet];
        figma.viewport.scrollAndZoomIntoView([variantSet]);
        figma.notify('Graph and animation variants exported to canvas');
      } else {
        const node = figma.createNodeFromSvg(msg.svg);
        node.x = cx - node.width / 2;
        node.y = cy - node.height / 2;
        figma.currentPage.appendChild(node);
        figma.currentPage.selection = [node];
        figma.viewport.scrollAndZoomIntoView([node]);
        figma.notify('Graph exported to canvas');
      }
    } catch (e) {
      console.error(e);
      figma.notify('Failed to export SVG. See console for details.');
    }
  }

  if (msg.type === 'CLOSE') {
    figma.closePlugin();
  }

  if (msg.type === 'GET_USER_DATA') {
    postCurrentUserData();
  }
};
