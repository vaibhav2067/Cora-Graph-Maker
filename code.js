figma.showUI(`
<style>${__uiFiles__.styles}</style>
${__uiFiles__.main}
<script>${__uiFiles__.utils}</script>
<script>${__uiFiles__.data}</script>
<script>${__uiFiles__.exports}</script>
<script>${__uiFiles__.animation}</script>
<script>${__uiFiles__.uihelpers}</script>
<script>${__uiFiles__.renderers}</script>
<script>${__uiFiles__.script}</script>`, { width: 980, height: 640 })

function normalizeAnimationSettings(animation, chartType) {
  const preset = (animation && animation.preset) || 'load-in';
  const stateMap = {
    'load-in': ['Start', 'Loaded'],
    'hover-value': ['Default', 'Hover'],
    'drill-down': ['Overview', 'Detail'],
    compare: ['Before', 'After'],
  };

  return {
    chartType: (animation && animation.chartType) || chartType || 'chart',
    preset,
    trigger: (animation && animation.trigger) || (preset === 'load-in' ? 'after-delay' : preset === 'hover-value' ? 'on-hover' : 'on-click'),
    transition: 'smart-animate',
    durationMs: Math.max(100, Math.min(1400, Number(animation && animation.durationMs) || 450)),
    easing: (animation && animation.easing) || 'ease-out',
    direction: (animation && animation.direction) || 'smart',
    states: Array.isArray(animation && animation.states) && animation.states.length >= 2 ? animation.states.slice(0, 2) : stateMap[preset] || ['Start', 'Loaded'],
    source: (animation && animation.source) || 'animation-studio',
    version: (animation && animation.version) || 1,
    savedAt: animation && animation.savedAt ? animation.savedAt : new Date().toISOString(),
  };
}

function createTrigger(triggerType) {
  switch (triggerType) {
    case 'after-delay':
      return { type: 'AFTER_TIMEOUT', timeout: 10 };
    case 'on-hover':
      return { type: 'ON_HOVER' };
    case 'on-press':
      return { type: 'ON_PRESS' };
    case 'on-click':
    default:
      return { type: 'ON_CLICK' };
  }
}

function createTransition(animation) {
  const easingMap = {
    linear: { type: 'LINEAR' },
    'ease-in': { type: 'EASE_IN' },
    'ease-out': { type: 'EASE_OUT' },
    'ease-in-out': { type: 'EASE_IN_AND_OUT' },
    gentle: { type: 'GENTLE' },
    quick: { type: 'QUICK' },
  };

  return {
    type: 'SMART_ANIMATE',
    easing: easingMap[animation.easing] || easingMap['ease-out'],
    duration: animation.durationMs / 1000,
  };
}

function getDirectionalOffset(direction) {
  switch (direction) {
    case 'up':
      return { x: 0, y: 28 };
    case 'right':
      return { x: -28, y: 0 };
    case 'down':
      return { x: 0, y: -28 };
    case 'left':
      return { x: 28, y: 0 };
    default:
      return { x: 0, y: 18 };
  }
}

function createTransparentHotspot(width, height) {
  const hotspot = figma.createRectangle();
  hotspot.name = 'Prototype Hotspot';
  hotspot.resize(Math.max(1, width), Math.max(1, height));
  hotspot.x = 0;
  hotspot.y = 0;
  hotspot.opacity = 0.001;
  hotspot.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  hotspot.strokes = [];
  hotspot.cornerRadius = 0;
  return hotspot;
}

function createOverlayNode(name, width, height) {
  const overlay = figma.createRectangle();
  overlay.name = name;
  overlay.resize(width, height);
  overlay.cornerRadius = Math.min(12, height / 2);
  overlay.fills = [{ type: 'SOLID', color: { r: 0.173, g: 0.365, b: 0.867 } }];
  overlay.strokes = [];
  overlay.opacity = 0;
  return overlay;
}

function decorateVariant(component, graphNode, animation, stateName, stateIndex) {
  const bounds = {
    width: Math.max(1, graphNode.width),
    height: Math.max(1, graphNode.height),
  };
  const directionOffset = getDirectionalOffset(animation.direction);
  const tooltip = createOverlayNode('Value Tooltip', Math.min(140, Math.max(88, bounds.width * 0.24)), 32);
  tooltip.x = Math.max(12, bounds.width - tooltip.width - 16);
  tooltip.y = 12;

  const focusPanel = createOverlayNode('Detail Panel', Math.min(150, Math.max(96, bounds.width * 0.2)), Math.max(56, bounds.height * 0.34));
  focusPanel.x = Math.max(12, bounds.width - focusPanel.width - 16);
  focusPanel.y = Math.max(18, bounds.height * 0.18);

  const compareBar = createOverlayNode('Compare Banner', Math.max(120, bounds.width * 0.4), 18);
  compareBar.x = 16;
  compareBar.y = Math.max(10, bounds.height - compareBar.height - 16);

  if (animation.preset === 'load-in') {
    graphNode.opacity = stateIndex === 0 ? 0.06 : 1;
    graphNode.x = stateIndex === 0 ? directionOffset.x : 0;
    graphNode.y = stateIndex === 0 ? directionOffset.y : 0;
  }

  if (animation.preset === 'hover-value') {
    tooltip.opacity = stateIndex === 0 ? 0 : 1;
    graphNode.opacity = stateIndex === 0 ? 0.98 : 1;
  }

  if (animation.preset === 'drill-down') {
    focusPanel.opacity = stateIndex === 0 ? 0 : 0.92;
    graphNode.x = stateIndex === 0 ? 0 : -18;
    graphNode.y = stateIndex === 0 ? 0 : -10;
  }

  if (animation.preset === 'compare') {
    compareBar.opacity = stateIndex === 0 ? 0.16 : 0.96;
    compareBar.resize(stateIndex === 0 ? Math.max(90, bounds.width * 0.24) : Math.max(120, bounds.width * 0.52), compareBar.height);
  }

  component.appendChild(tooltip);
  component.appendChild(focusPanel);
  component.appendChild(compareBar);

  if (animation.preset !== 'hover-value') {
    tooltip.opacity = 0;
  }
  if (animation.preset !== 'drill-down') {
    focusPanel.opacity = 0;
  }
  if (animation.preset !== 'compare') {
    compareBar.opacity = 0;
  }

  const hotspot = createTransparentHotspot(component.width, component.height);
  component.appendChild(hotspot);
  return hotspot;
}

function createAnimationVariant(svg, stateName, stateIndex, animation) {
  const graphNode = figma.createNodeFromSvg(svg);
  graphNode.name = 'Graph Artwork';
  graphNode.x = 0;
  graphNode.y = 0;

  const component = figma.createComponent();
  component.name = `State=${stateName}`;
  component.clipsContent = false;
  component.resizeWithoutConstraints(Math.max(1, graphNode.width), Math.max(1, graphNode.height));
  component.appendChild(graphNode);

  const hotspot = decorateVariant(component, graphNode, animation, stateName, stateIndex);
  return { component, hotspot };
}

async function wirePrototypeLinks(variants, animation) {
  if (!variants[0] || !variants[1]) return;

  const transition = createTransition(animation);
  const primaryTrigger = createTrigger(animation.trigger);
  const changeToSecond = {
    type: 'NODE',
    destinationId: variants[1].component.id,
    navigation: 'CHANGE_TO',
    transition,
  };
  const changeToFirst = {
    type: 'NODE',
    destinationId: variants[0].component.id,
    navigation: 'CHANGE_TO',
    transition,
  };

  await variants[0].hotspot.setReactionsAsync([{ trigger: primaryTrigger, actions: [changeToSecond] }]);

  if (animation.preset === 'drill-down' || animation.preset === 'compare') {
    await variants[1].hotspot.setReactionsAsync([{ trigger: createTrigger('on-click'), actions: [changeToFirst] }]);
  }
}

async function exportAnimatedGraph(svg, animation) {
  const { x: cx, y: cy } = figma.viewport.center;
  const variants = animation.states.map((stateName, index) => createAnimationVariant(svg, stateName, index, animation));
  const variantSet = figma.combineAsVariants(variants.map((entry) => entry.component), figma.currentPage);

  variantSet.name = `Graph Animation / ${String(animation.chartType)} / ${String(animation.preset)}`;
  variantSet.x = cx - variantSet.width / 2;
  variantSet.y = cy - variantSet.height / 2;
  variantSet.setPluginData('graphAnimationSettings', JSON.stringify(animation));

  await wirePrototypeLinks(variants, animation);

  figma.currentPage.selection = [variantSet];
  figma.viewport.scrollAndZoomIntoView([variantSet]);
  figma.notify('Graph animation component set exported to canvas');
}

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
  if (msg.type === 'GET_GLOBAL_SETTINGS') {
    try {
      const settings = await figma.clientStorage.getAsync('globalSettings');
      figma.ui.postMessage({
        type: 'GLOBAL_SETTINGS_RESULT',
        requestId: msg.requestId,
        settings: settings || null,
      });
    } catch (error) {
      figma.ui.postMessage({
        type: 'GLOBAL_SETTINGS_RESULT',
        requestId: msg.requestId,
        settings: null,
      });
    }
    return;
  }

  if (msg.type === 'SAVE_GLOBAL_SETTINGS') {
    try {
      await figma.clientStorage.setAsync('globalSettings', msg.settings || null);
      figma.ui.postMessage({
        type: 'GLOBAL_SETTINGS_SAVED',
        requestId: msg.requestId,
        ok: true,
      });
    } catch (error) {
      figma.ui.postMessage({
        type: 'GLOBAL_SETTINGS_SAVED',
        requestId: msg.requestId,
        ok: false,
      });
    }
    return;
  }

  if (msg.type === 'EXPORT_SVG' && typeof msg.svg === 'string') {
    try {
      const { x: cx, y: cy } = figma.viewport.center;
      const animation = msg.animation && typeof msg.animation === 'object' ? msg.animation : null;

      if (animation && animation.enabled) {
        const normalizedAnimation = normalizeAnimationSettings(animation, 'chart');
        await exportAnimatedGraph(msg.svg, normalizedAnimation);
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
