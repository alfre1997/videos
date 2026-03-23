const listaReproductor = [
  "190.108.89.228",
  "37.230.57.142",
  "45.170.130.224",
  "181.13.252.102",
  ".agrega",
  ".mp4",
  "agrega",
  ".m3u8",
];

const channels = [
  {
    name: "TIGO SPORT",
    cat: "DEPORTES",
    url: "https://futbolparaguayotv.github.io/futbolparaguayotv/3ventos.html",
    logo: "https://discovery-content-py.tigocloud.net/uploads/Frame_49_84a38f7e5e.png",
  },
  {
    name: "TIGO SPORT 2",
    cat: "DEPORTES",
    url: "https://futbolparaguayotv.github.io/futbolparaguayotv/3ventos2.html",
    logo: "https://discovery-content-py.tigocloud.net/uploads/Frame_49_84a38f7e5e.png",
  },
  {
    name: "TELEFUTURO",
    cat: "NACIONALES",
    url: "https://www.desdepylabs.com/External/tvaccion/telefuturo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/TelefuturoLogo2022.png",
  },
  {
    name: "GEN",
    cat: "NACIONALES",
    url: "https://gentv.desdepylabs.com/External/tvaccion/gentv",
    logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjV3EkyMzkDOEzag41tRjz59O3pC0Nar7SabfXNxeXLRT_2OrtH8znisKfmH_aGwtfQKd-HdK_F8o6ZuDMQIC32KDwvI1xLg_ruUElRzQn5_-3rtKbjPgZJCYnurz8_22yWcKmkGctfQCCn/s513/GEN+en+vivo.jpg",
  },
  {
    name: "TRECE",
    cat: "NACIONALES",
    url: "https://geo.dailymotion.com/player/x1at3a.html?video=k4nLYiNrBX8W5jDbSlM",
    logo: "https://tvinsur.com/wp-content/uploads/2023/12/Canal-Trece-Paraguay-en-vivo-Online.webp",
  },
  {
    name: "PARAGUAY TV",
    cat: "NACIONALES",
    url: "https://stream.paraguaytv.gov.py/memfs/bbe36fed-9b49-4d1d-adaa-4bd6d1b2e386_output_0.m3u8",
    logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQXi245YVRoKkW0BsRYVYHhaYq81bW4Qo4U5MT5sG9LxjZH3HOdb-e32Rnfq4Y6McRYnHGDVPPQ9M0_WzzGk2eWSpFCh3p3Lt_tHOqJbeyF85b61x_bxQK0KfGL_nOJPhbTgCoDKJkTmnJ/w700-h400-p-k-no-nu/Paraguay+TV+en+vivo.png",
  },
  {
    name: "SNT",
    cat: "NACIONALES",
    url: "https://d2qsan2ut81n2k.cloudfront.net/live/2e1f1b6a-9d03-4194-8559-2eabe61a1555/ts:abr.m3u8",
    logo: "https://tvinsur.com/wp-content/uploads/2023/12/SNT-Paraguay-en-vivo-Online.webp",
  },
  {
    name: "NPY NOTICIAS",
    cat: "NOTICIAS",
    url: "https://www.desdepylabs.com/External/tvaccion/npy",
    logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgHqF5ttfQ-As7BtoTYABhGWWVGnZrYPz5_L5Ab-KJKkosd-os3v6qLE-5mCaC9pEJRMc7ZfzW_j0BcA45n2KGWH5D1ZinKpEPkrAIs1zrvwSJYzfmo0UihZsq0LAs0aUd3sMSGxNqoyWco/s1366/NPY+en+vivo.png",
  },
  {
    name: "UNICANAL",
    cat: "NACIONALES",
    url: "https://geo.dailymotion.com/player/x1apn6.html?video=k1mHLKycOlKgo3Db5GI",
    logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfW3J9GRYfLNJmRY8xba_veN14bEXrBsX7FN8Yu1VAT-G1mW8c4KjesXoQe540738X4jlk07z7W3MeDw2TjvEjQrpGYrPX-wLmyU0Ogbwc0X1BXRBTd_4Q5PfMHC9UjVXsEvIWCpUgMMZo/s440/Unicanal+en+vivo.jpg",
  },
  {
    name: "LA TELE",
    cat: "NACIONALES",
    url: "https://www.desdepylabs.com/External/tvaccion/latele",
    logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi64FmGWdI8ttE3TUfDlvlnLZlVRlKlfb-tUTO8Idqn4fLEqY_t_Vy3MTFZhWJdI6ENBysxzRYlZeXoANHoZpMe1Q-G8LIYsivIh9PupdN61W6U-weSmPmMM2Y2a36P5sNPm8vnCSgdPLnL/s250/La+Tele+en+vivo.jpg",
  },
  {
    name: "MAS TV",
    cat: "NACIONALES",
    url: "https://player.twitch.tv/?channel=mastvonline&parent=cableparatodos-nacionalespy-player.blogspot.com",
    logo: "https://masencarnacion.opentechla.com/themes/mas-encarnacion/assets/tv/images/favicon.png",
  },
  {
    name: "C9N",
    cat: "NOTICIAS",
    url: "https://d2qsan2ut81n2k.cloudfront.net/live/48f53430-9014-4459-a048-6169dac14140/ts:abr.m3u8",
    logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6lnz2CDRLLnpQuDEIbbdewTqtDKk9hzCf25mF-4aIqWTS1JksMcSA-C5j3LRkA1_GYXYNHgSGpxno4C62tgD57UmYQaWWdswOgu9qIMQjFBWwUjvsfIFgSb74f4JxOtTBqIFqFKvFtC-9/s1042/C9N+en+vivo.jpg",
  },
  {
    name: "FARRA PLAY",
    cat: "ENTRETENIMIENTO",
    url: "http://159.203.148.226/live/farra.m3u8",
    logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgN7FqqPypJG1v2g7PRKV7m8sNlDlN5MAlMId6cYhnN0ebP7eq9K16zWBm07OVh84XjvRE6-_JOZfhdWXLRIokKPqYYyIk5QgDjgX9XQxfjyjMWS60BF2PSZiZdl0vKt_8IP3V2xgCLQ8d/s900/Farra+Play+TV+en+vivo.jpg",
  },
  {
    name: "HEI",
    cat: "ENTRETENIMIENTO",
    url: "https://gentv.desdepylabs.com/External/heinetwork/heitv",
    logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_dN6ekk_faiIXpO1Y2uQgf6Wzc5fJpwf36BCup66P96MG0A6d_vV4ILpaqg-L3U5vaetHrNAKSRnueQiPdGy2BxCuZzAw_9hKrzsQqhzW64B4CFyOgmOY2dVof_Z3uB5epj8-s2iPPzdr/w700-h400-p-k-no-nu/Hei+en+vivo.jpg",
  },
];

const searchInput = document.getElementById("searchInput");
const categoryBar = document.getElementById("categoryBar");
const sectionTitle = document.getElementById("sectionTitle");
const resultCount = document.getElementById("resultCount");
const channelGrid = document.getElementById("channelGrid");
const clock = document.getElementById("clock");

const playerOverlay = document.getElementById("playerOverlay");
const closePlayerBtn = document.getElementById("closePlayerBtn");
const playingName = document.getElementById("playingName");
const player = document.getElementById("player");
const playerFrame = document.getElementById("playerFrame");

let currentCategory = "TODOS";

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString("es-PY", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = now.toLocaleDateString("es-PY", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });
  clock.textContent = `${time} - ${date}`;
}

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function useInternalPlayer(url) {
  return listaReproductor.some((item) => url.includes(item));
}

function closePlayer() {
  if (window.Hls && window.__hlsInstance) {
    window.__hlsInstance.destroy();
    window.__hlsInstance = null;
  }

  player.pause();
  player.removeAttribute("src");
  player.load();
  playerFrame.src = "";
  player.style.display = "none";
  playerFrame.style.display = "none";
  playerOverlay.classList.remove("open");
  playerOverlay.setAttribute("aria-hidden", "true");

  if (window.location.hash === "#player") {
    history.back();
  }
}

function openPlayer(url, name) {
  playingName.textContent = name;
  playerOverlay.classList.add("open");
  playerOverlay.setAttribute("aria-hidden", "false");
  history.pushState({ playing: true }, "Reproduciendo", "#player");

  if (/\.m3u8($|\?)/i.test(url)) {
    player.style.display = "block";
    playerFrame.style.display = "none";

    if (player.canPlayType("application/vnd.apple.mpegurl")) {
      player.src = url;
      player.play().catch(() => {});
      return;
    }

    if (window.Hls && window.Hls.isSupported()) {
      const hls = new window.Hls();
      window.__hlsInstance = hls;
      hls.loadSource(url);
      hls.attachMedia(player);
      hls.on(window.Hls.Events.MANIFEST_PARSED, () => {
        player.play().catch(() => {});
      });
      return;
    }
  }

  if (/\.(mp4|webm)($|\?)/i.test(url)) {
    player.style.display = "block";
    playerFrame.style.display = "none";
    player.src = url;
    player.play().catch(() => {});
    return;
  }

  player.style.display = "none";
  playerFrame.style.display = "block";
  playerFrame.src = url;
}

function openChannel(channel) {
  if (useInternalPlayer(channel.url)) {
    openPlayer(channel.url, channel.name);
  } else {
    window.location.href = channel.url;
  }
}

function renderCategories() {
  const categories = ["TODOS", ...new Set(channels.map((c) => c.cat))];
  categoryBar.innerHTML = "";

  categories.forEach((cat) => {
    const count = cat === "TODOS" ? channels.length : channels.filter((c) => c.cat === cat).length;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip ${cat === currentCategory ? "active" : ""}`;
    button.textContent = `${cat} (${count})`;
    button.addEventListener("click", () => {
      currentCategory = cat;
      renderCategories();
      renderChannels();
    });
    categoryBar.appendChild(button);
  });
}

function renderChannels() {
  const search = searchInput.value.trim().toLowerCase();
  const filtered = channels.filter((channel) => {
    const nameMatch = channel.name.toLowerCase().includes(search);
    const categoryMatch = currentCategory === "TODOS" || channel.cat === currentCategory;
    return nameMatch && categoryMatch;
  });

  sectionTitle.textContent = currentCategory === "TODOS" ? "Todos los canales" : currentCategory;
  resultCount.textContent = `${filtered.length} canales`;
  channelGrid.innerHTML = "";

  if (!filtered.length) {
    channelGrid.innerHTML = '<div class="empty">No se encontraron canales con ese criterio.</div>';
    return;
  }

  filtered.forEach((channel) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "channel-item";
    item.setAttribute("role", "listitem");
    item.innerHTML = `
      <div class="logo-box"></div>
      <h3>${channel.name}</h3>
      <p>${channel.cat}</p>
    `;

    const logoBox = item.querySelector(".logo-box");
    if (channel.logo) {
      const img = document.createElement("img");
      img.src = channel.logo;
      img.alt = channel.name;
      img.referrerPolicy = "no-referrer";
      img.onerror = () => {
        logoBox.innerHTML = `<div class="fallback">${getInitials(channel.name)}</div>`;
      };
      logoBox.appendChild(img);
    } else {
      logoBox.innerHTML = `<div class="fallback">${getInitials(channel.name)}</div>`;
    }

    item.addEventListener("click", () => openChannel(channel));
    channelGrid.appendChild(item);
  });
}

window.addEventListener("popstate", () => {
  if (playerOverlay.classList.contains("open")) {
    closePlayer();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && playerOverlay.classList.contains("open")) {
    closePlayer();
  }
});

closePlayerBtn.addEventListener("click", closePlayer);
searchInput.addEventListener("input", renderChannels);

updateClock();
setInterval(updateClock, 1000);
renderCategories();
renderChannels();