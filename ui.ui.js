(function () {
  function showUserInitials(userName, avatarElement) {
    avatarElement.innerHTML = "";
    if (userName) {
      const initials = getUserInitials(userName);
      const initialsSpan = document.createElement("span");
      initialsSpan.textContent = initials;
      avatarElement.appendChild(initialsSpan);
      return;
    }

    avatarElement.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
      </svg>
    `;
  }

  function getUserInitials(name) {
    return name
      .split(" ")
      .map((part) => part.charAt(0).toUpperCase())
      .slice(0, 2)
      .join("");
  }

  function addUserStatus(profileElement) {
    if (!profileElement) return;
    let statusElement = profileElement.querySelector("[data-user-status]");
    const userAvatarElement = profileElement.querySelector("[data-user-avatar]");
    if (!statusElement && userAvatarElement) {
      statusElement = document.createElement("div");
      statusElement.className = "user-status";
      statusElement.setAttribute("data-user-status", "");
      profileElement.insertBefore(statusElement, profileElement.firstChild);
    }
    if (statusElement) {
      statusElement.className = "user-status";
    }
  }

  function updateUserProfile(userData) {
    const profileElements = document.querySelectorAll("[data-user-profile]");
    profileElements.forEach((userProfileElement) => {
      const userNameElement = userProfileElement.querySelector("[data-user-name]");
      const userAvatarElement = userProfileElement.querySelector("[data-user-avatar]");
      if (!userNameElement || !userAvatarElement) return;

      userProfileElement.classList.remove("loading");

      if (userData.name) {
        const firstName = userData.name.split(" ")[0];
        userNameElement.textContent = firstName;
      }

      if (userData.photoUrl) {
        const img = document.createElement("img");
        img.src = userData.photoUrl;
        img.alt = userData.name || "User";
        img.onload = () => {
          userAvatarElement.innerHTML = "";
          userAvatarElement.appendChild(img);
          userAvatarElement.classList.add("has-photo");
          userProfileElement.classList.add("data-loaded");
          addUserStatus(userProfileElement);
        };
        img.onerror = () => {
          showUserInitials(userData.name, userAvatarElement);
          userProfileElement.classList.add("data-loaded");
          addUserStatus(userProfileElement);
        };
        return;
      }

      showUserInitials(userData.name, userAvatarElement);
      userProfileElement.classList.add("data-loaded");
      addUserStatus(userProfileElement);
    });
  }

  function showCustomAlert(message, type = "info", title = null) {
    const overlay = document.getElementById("custom-alert-overlay");
    const alertElement = document.getElementById("custom-alert");
    const alertIcon = document.getElementById("alert-icon");
    const alertTitle = document.getElementById("alert-title");
    const alertMessage = document.getElementById("alert-message");
    const alertConfirm = document.getElementById("alert-confirm");

    alertElement.className = "custom-alert";
    alertIcon.className = "custom-alert-icon";

    switch (type) {
      case "warning":
        alertIcon.classList.add("warning");
        alertTitle.textContent = title || "Warning";
        alertElement.classList.add("limit-warning");
        break;
      case "error":
        alertIcon.classList.add("error");
        alertTitle.textContent = title || "Error";
        alertElement.classList.add("error-alert");
        break;
      case "success":
        alertIcon.classList.add("success");
        alertTitle.textContent = title || "Success";
        alertElement.classList.add("success-alert");
        break;
      default:
        alertIcon.classList.add("info");
        alertTitle.textContent = title || "Information";
        alertElement.classList.add("feature-coming");
    }

    alertMessage.textContent = message;
    overlay.classList.add("visible");

    return new Promise((resolve) => {
      const handleConfirm = () => {
        overlay.classList.remove("visible");
        alertConfirm.removeEventListener("click", handleConfirm);
        resolve(true);
      };

      alertConfirm.addEventListener("click", handleConfirm);
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          handleConfirm();
        }
      });
    });
  }

  const THEMES = {
    light: {
      "--bg": "#f4f4f4",
      "--panel": "#ffffff",
      "--panel-2": "#f0f0f0",
      "--ink": "#111111",
      "--ink-2": "#404040",
      "--muted": "#707070",
      "--line": "#d4d4d4",
      "--brand": "#111111",
      "--brand-2": "#4d4d4d",
      "--primary-ink": "#ffffff",
      "--accent": "#7a7a7a",
      "--shadow": "0 10px 30px rgba(0, 0, 0, 0.08)",
      "--shadow-soft": "0 2px 10px rgba(0, 0, 0, 0.06)",
      "--ring": "0 0 0 2px rgba(17, 17, 17, 0.24)",
    },
    dark: {
      "--bg": "#0b0c0f",
      "--panel": "#121212",
      "--panel-2": "#1b1b1b",
      "--ink": "#f5f5f5",
      "--ink-2": "#cfcfcf",
      "--muted": "#9a9a9a",
      "--line": "#303030",
      "--brand": "#f5f5f5",
      "--brand-2": "#d6d6d6",
      "--primary-ink": "#0b0c0f",
      "--accent": "#a6a6a6",
      "--shadow": "0 10px 30px rgba(0, 0, 0, 0.35)",
      "--shadow-soft": "0 2px 10px rgba(0, 0, 0, 0.25)",
      "--ring": "0 0 0 2px rgba(255, 255, 255, 0.32)",
    },
  };

  function applyThemeVars(themeName) {
    const theme = THEMES[themeName];
    Object.entries(theme).forEach(([name, value]) => {
      document.documentElement.style.setProperty(name, value);
    });
  }

  function applyLightTheme() {
    applyThemeVars("light");
  }

  function applyDarkTheme() {
    applyThemeVars("dark");
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-user-profile]").forEach((userProfileElement) => {
      userProfileElement.classList.add("loading");
    });
  });

  window.UiUi = {
    updateUserProfile,
    showCustomAlert,
    applyLightTheme,
    applyDarkTheme,
  };
})();
