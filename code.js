figma.showUI(`
<style>${__uiFiles__.styles}</style>
${__uiFiles__.main}
<script>${__uiFiles__.utils}</script>
<script>${__uiFiles__.data}</script>
<script>${__uiFiles__.exports}</script>
<script>${__uiFiles__.animation}</script>
<script>${__uiFiles__.uihelpers}</script>
<script>${__uiFiles__.renderers}</script>
<script>${__uiFiles__.script}</script>`, { width: 860, height: 560 })

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

  if (msg.type === 'CLOSE') {
    figma.closePlugin();
  }

  if (msg.type === 'GET_USER_DATA') {
    postCurrentUserData();
  }
};
