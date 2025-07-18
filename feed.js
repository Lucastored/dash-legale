async function loadRSSFeeds() {
  const feeds = [
    {
      url: "https://www.garanteprivacy.it/web/guest/home/rss",
      title: "Garante Privacy"
    },
    {
      url: "https://edpb.europa.eu/edpb_en.xml",
      title: "EDPB"
    },
    {
      url: "https://www.gazzettaufficiale.it/rss/privacy",
      title: "Gazzetta Ufficiale – Privacy"
    },
    {
      url: "https://eur-lex.europa.eu/legal-content/IT/RSS/?uri=OJ:L:2023:000:TOC",
      title: "EUR-Lex – Normativa UE"
    }
  ];

  const feedContainer = document.getElementById("rss-feeds");

  feeds.forEach(feed => {
    const section = document.createElement("section");
    section.innerHTML = `<h3>${feed.title}</h3><p><a href="${feed.url}" target="_blank">${feed.url}</a></p>`;
    feedContainer.appendChild(section);
  });
}

document.addEventListener("DOMContentLoaded", loadRSSFeeds);

