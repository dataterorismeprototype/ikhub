const themes = [
  { id: "theme1", number: 1, title: "Kesiapsiagaan nasional", activities: 69, summary: "Deteksi dini, kesiapan operasional, penguatan kapasitas, dan sistem informasi.", keywords: "kesiapsiagaan deteksi dini kapasitas sistem informasi" },
  { id: "theme2", number: 2, title: "Ketahanan komunitas dan keluarga", activities: 36, summary: "Penguatan keluarga dan komunitas sebagai benteng pertama pencegahan.", keywords: "ketahanan komunitas keluarga desa damai kohesi sosial" },
  { id: "theme3", number: 3, title: "Pendidikan, keterampilan, dan lapangan kerja", activities: 69, summary: "Edukasi kelompok rentan, keterampilan masyarakat, dan fasilitasi lapangan kerja.", keywords: "pendidikan keterampilan vokasi lapangan kerja kelompok rentan" },
  { id: "theme4", number: 4, title: "Pelindungan dan pemberdayaan perempuan, pemuda, dan anak", activities: 20, summary: "Pelindungan kelompok rentan dan penguatan peran agen perdamaian.", keywords: "perempuan pemuda anak pemberdayaan pelindungan" },
  { id: "theme5", number: 5, title: "Komunikasi strategis, media, dan sistem elektronik", activities: 54, summary: "Literasi digital, kontra-narasi, moderasi konten, dan komunikasi publik.", keywords: "komunikasi media sistem elektronik digital kontra narasi" },
  { id: "theme6", number: 6, title: "Deradikalisasi", activities: 32, summary: "Pembinaan, pemulihan, reintegrasi sosial, dan pencegahan residivisme.", keywords: "deradikalisasi reintegrasi pembinaan lapas narapidana" },
  { id: "theme7", number: 7, title: "HAM, tata kelola pemerintahan yang baik, dan keadilan", activities: 68, summary: "Supremasi hukum, norma HAM, akuntabilitas, dan tata kelola pemerintahan.", keywords: "ham tata kelola keadilan hukum akuntabilitas" },
  { id: "theme8", number: 8, title: "Pelindungan saksi dan pemenuhan hak korban", activities: 40, summary: "Pelindungan saksi, pemulihan korban, kompensasi, dan dukungan psikososial.", keywords: "saksi korban kompensasi pemulihan psikososial" },
  { id: "theme9", number: 9, title: "Kemitraan dan kerja sama internasional", activities: 67, summary: "Kolaborasi multipihak, diplomasi, dan pencegahan terorisme lintas batas.", keywords: "kemitraan internasional kerja sama diplomasi multipihak" }
];

const outputs = [
  { label: "Regulasi/kebijakan", value: 44 },
  { label: "Instrumen, tools, dan modul", value: 91 },
  { label: "Kapasitas kelembagaan pemerintah", value: 292 },
  { label: "Kapasitas aparatur", value: 67 },
  { label: "Kapasitas masyarakat", value: 60 },
  { label: "Kemitraan dan kerja sama", value: 87 }
];

const datasets = [
  {
    id: "wbp",
    index: "01",
    type: "ditjenpas",
    label: "Ditjenpas",
    title: "WBP kasus terorisme",
    owner: "Direktorat Jenderal Pemasyarakatan",
    summary: "Posisi agregat bulanan, komposisi gender, serta sebaran provinsi dan lapas.",
    period: "Januari-Desember 2025",
    coverage: "Nasional · 9 provinsi · 40 lapas",
    status: "Data aktif",
    keywords: "pemasyarakatan ditjenpas wbp narapidana lapas gender wilayah",
    href: "#pemasyarakatan",
    linkLabel: "Buka data WBP"
  },
  ...themes.map((item, index) => ({
    ...item,
    index: String(index + 2).padStart(2, "0"),
    type: "ranpe",
    label: "Tema " + item.number,
    owner: "Sekretariat Bersama RAN PE",
    period: "Tahun 2025",
    coverage: "Lintas Kementerian/Lembaga",
    status: "Data terverifikasi",
    href: "#ranpe",
    linkLabel: "Buka visualisasi RAN PE"
  }))
];

const snapshots = [
  { month: "Januari 2025", short: "Jan", male: 121, female: 1, value: 122 },
  { month: "Februari 2025", short: "Feb", male: 47, female: 0, value: 47 },
  { month: "Maret 2025", short: "Mar", male: 80, female: 1, value: 81 },
  { month: "April 2025", short: "Apr", male: 123, female: 3, value: 126 },
  { month: "Mei 2025", short: "Mei", male: 137, female: 7, value: 144 },
  { month: "Juni 2025", short: "Jun", male: 141, female: 7, value: 148 },
  { month: "Juli 2025", short: "Jul", male: 83, female: 0, value: 83 },
  { month: "Agustus 2025", short: "Agu", male: 134, female: 3, value: 137 },
  { month: "September 2025", short: "Sep", male: 153, female: 3, value: 156 },
  { month: "Oktober 2025", short: "Okt", male: 174, female: 3, value: 177 },
  { month: "November 2025", short: "Nov", male: 183, female: 3, value: 186 },
  { month: "Desember 2025", short: "Des", male: 187, female: 3, value: 190 }
].map((item, index, all) => ({
  ...item,
  delta: index === 0 ? null : item.value - all[index - 1].value
}));

const facilities = [
  { province: "Jawa Tengah", facility: "Lapas Kelas IIA Pasir Putih Nusakambangan", male: 45, female: 0, total: 45 },
  { province: "Jawa Barat", facility: "Lapas Khusus Kelas IIA Gunung Sindur", male: 27, female: 0, total: 27 },
  { province: "Jawa Barat", facility: "Lapas Khusus Kelas IIB Sentul", male: 16, female: 0, total: 16 },
  { province: "DKI Jakarta", facility: "Lapas Kelas I Cipinang", male: 11, female: 0, total: 11 },
  { province: "Jawa Tengah", facility: "Lapas Kelas IIA Besi Nusakambangan", male: 9, female: 0, total: 9 },
  { province: "Jawa Tengah", facility: "Lapas Kelas I Semarang", male: 6, female: 0, total: 6 },
  { province: "Jawa Timur", facility: "Lapas Kelas I Surabaya", male: 6, female: 0, total: 6 },
  { province: "Jawa Tengah", facility: "Lapas Khusus Kelas IIA Karanganyar", male: 6, female: 0, total: 6 },
  { province: "Jawa Tengah", facility: "Lapas Kelas IIA Ngaseman Nusakambangan", male: 5, female: 0, total: 5 },
  { province: "Lampung", facility: "Lapas Kelas I Bandar Lampung", male: 4, female: 0, total: 4 },
  { province: "Banten", facility: "Lapas Kelas I Tangerang", male: 4, female: 0, total: 4 },
  { province: "Lampung", facility: "Lapas Kelas IIA Metro", male: 4, female: 0, total: 4 },
  { province: "Lampung", facility: "Lapas Kelas IIA Kalianda", male: 3, female: 0, total: 3 },
  { province: "Jawa Tengah", facility: "Lapas Kelas IIA Magelang", male: 3, female: 0, total: 3 },
  { province: "DKI Jakarta", facility: "Lapas Kelas IIA Salemba", male: 3, female: 0, total: 3 },
  { province: "Lampung", facility: "Lapas Kelas IIB Gunung Sugih", male: 3, female: 0, total: 3 },
  { province: "Jawa Barat", facility: "Lapas Kelas IIA Banceuy Bandung", male: 2, female: 0, total: 2 },
  { province: "Banten", facility: "Lapas Kelas IIA Cilegon", male: 2, female: 0, total: 2 },
  { province: "Jawa Tengah", facility: "Lapas Kelas IIA Kembang Kuning Nusakambangan", male: 2, female: 0, total: 2 },
  { province: "Jawa Barat", facility: "Lapas Kelas IIA Kuningan", male: 2, female: 0, total: 2 },
  { province: "Jawa Barat", facility: "Lapas Kelas IIA Subang", male: 2, female: 0, total: 2 },
  { province: "Jawa Barat", facility: "Lapas Kelas IIA Warung Kiara", male: 2, female: 0, total: 2 },
  { province: "Jawa Barat", facility: "Lapas Kelas IIB Indramayu", male: 2, female: 0, total: 2 },
  { province: "Jawa Tengah", facility: "Lapas Kelas IIB Klaten", male: 2, female: 0, total: 2 },
  { province: "Jawa Barat", facility: "Lapas Kelas IIB Majalengka", male: 2, female: 0, total: 2 },
  { province: "Jawa Barat", facility: "Lapas Kelas IIB Purwakarta", male: 2, female: 0, total: 2 },
  { province: "Jawa Tengah", facility: "Lapas Kelas IIB Slawi", male: 2, female: 0, total: 2 },
  { province: "Jawa Tengah", facility: "Lapas Kelas I Batu Nusakambangan", male: 1, female: 0, total: 1 },
  { province: "Jawa Timur", facility: "Lapas Kelas I Madiun", male: 1, female: 0, total: 1 },
  { province: "Jawa Barat", facility: "Lapas Kelas IIA Cibinong", male: 1, female: 0, total: 1 },
  { province: "Jawa Tengah", facility: "Lapas Kelas IIA Gladakan Nusakambangan", male: 1, female: 0, total: 1 },
  { province: "Sulawesi Tengah", facility: "Lapas Kelas IIA Palu", male: 1, female: 0, total: 1 },
  { province: "Jawa Tengah", facility: "Lapas Kelas IIA Perempuan Semarang", male: 0, female: 1, total: 1 },
  { province: "Banten", facility: "Lapas Kelas IIA Perempuan Tangerang", male: 0, female: 1, total: 1 },
  { province: "Jawa Tengah", facility: "Lapas Kelas IIA Permisan Nusakambangan", male: 1, female: 0, total: 1 },
  { province: "Jawa Tengah", facility: "Lapas Kelas IIA Sragen", male: 1, female: 0, total: 1 },
  { province: "Kalimantan Timur", facility: "Lapas Kelas IIA Tarakan", male: 1, female: 0, total: 1 },
  { province: "Jawa Tengah", facility: "Lapas Kelas IIB Brebes", male: 1, female: 0, total: 1 },
  { province: "Jawa Barat", facility: "Lapas Kelas IIB Sumedang", male: 1, female: 0, total: 1 },
  { province: "Sumatera Barat", facility: "Lapas Perempuan Kelas IIB Padang", male: 0, female: 1, total: 1 }
];

const nf = new Intl.NumberFormat("id-ID");
const byId = (id) => document.getElementById(id);
let toastTimer;
let selectedDatasetId = "theme1";

const provinceSummary = Object.entries(facilities.reduce((acc, item) => {
  if (!acc[item.province]) acc[item.province] = { total: 0, facilities: 0 };
  acc[item.province].total += item.total;
  acc[item.province].facilities += 1;
  return acc;
}, {}))
  .map(([province, values]) => ({ province, ...values }))
  .sort((a, b) => b.total - a.total || a.province.localeCompare(b.province, "id"));

function availabilityClass(item) {
  return item.type === "ditjenpas" ? "ready" : "report";
}

function renderDatasets() {
  const query = byId("datasetSearch").value.trim().toLocaleLowerCase("id");
  const type = byId("datasetFilter").value;
  const visible = datasets.filter((item) => {
    const matchesType = type === "all" || item.type === type;
    const haystack = `${item.title} ${item.owner} ${item.summary} ${item.keywords}`.toLocaleLowerCase("id");
    return matchesType && haystack.includes(query);
  });

  byId("datasetGrid").innerHTML = visible.length ? visible.map((item) => `
    <button class="dataset-card ${item.id === selectedDatasetId ? "selected" : ""}" type="button" data-dataset="${item.id}">
      <div class="dataset-card-top">
        <span class="dataset-index">${item.index}</span>
        <span class="availability ${availabilityClass(item)}">${item.status}</span>
      </div>
      <p>${item.label}</p>
      <h3>${item.title}</h3>
      <small>${item.owner}</small>
      <span class="card-arrow" aria-hidden="true">↗</span>
    </button>
  `).join("") : '<div class="empty-state"><strong>Layanan tidak ditemukan</strong><span>Coba kata kunci atau filter lain.</span></div>';

  byId("datasetCount").textContent = `${visible.length} layanan`;
  if (visible.length && !visible.some((item) => item.id === selectedDatasetId)) {
    showDataset(visible[0].id);
  }
}

function showDataset(id) {
  const item = datasets.find((entry) => entry.id === id);
  if (!item) return;
  selectedDatasetId = item.id;

  document.querySelectorAll(".dataset-card").forEach((card) => {
    card.classList.toggle("selected", card.dataset.dataset === item.id);
  });

  const metrics = item.type === "ranpe"
    ? `
      <div><dt>Kegiatan</dt><dd>${nf.format(item.activities)}</dd></div>
      <div><dt>Periode</dt><dd>${item.period}</dd></div>
      <div><dt>Status</dt><dd><span class="availability report">${item.status}</span></dd></div>
    `
    : `
      <div><dt>Periode</dt><dd>${item.period}</dd></div>
      <div><dt>Cakupan</dt><dd>190 WBP</dd></div>
      <div><dt>Status</dt><dd><span class="availability ready">${item.status}</span></dd></div>
    `;

  byId("datasetDetail").innerHTML = `
    <span class="detail-index">DATASET ${item.index}</span>
    <p class="detail-kicker">${item.owner.toUpperCase()}</p>
    <h3>${item.title}</h3>
    <p>${item.summary}</p>
    <dl>${metrics}</dl>
    <a class="text-link" href="${item.href}">${item.linkLabel} <span>→</span></a>
  `;
}

function renderThemeChart() {
  const max = Math.max(...themes.map((item) => item.activities));
  byId("themeChart").innerHTML = themes.map((item) => `
    <div class="theme-row" aria-label="Tema ${item.number}, ${item.title}: ${nf.format(item.activities)} kegiatan">
      <span class="theme-number">T${item.number}</span>
      <div class="theme-name">${item.title}</div>
      <div class="theme-track"><i style="width:${(item.activities / max) * 100}%"></i></div>
      <strong>${nf.format(item.activities)}</strong>
    </div>
  `).join("");
  byId("themeChartUnit").textContent = "Satuan: kegiatan";
}

function renderOutputBars() {
  const max = Math.max(...outputs.map((item) => item.value));
  byId("outputBars").innerHTML = outputs.map((item) => `
    <div class="output-row">
      <span>${item.label}</span>
      <div><i style="width:${(item.value / max) * 100}%"></i></div>
      <strong>${nf.format(item.value)}</strong>
    </div>
  `).join("");
}

function renderGenderChart() {
  const latest = snapshots.at(-1);
  const maleShare = (latest.male / latest.value) * 100;
  const femaleShare = (latest.female / latest.value) * 100;

  byId("genderDonut").innerHTML = `
    <svg viewBox="0 0 104 104" aria-hidden="true">
      <circle class="gender-track" cx="52" cy="52" r="42"></circle>
      <circle class="gender-segment gender-male" cx="52" cy="52" r="42" pathLength="100" stroke-dasharray="${maleShare} ${femaleShare}"></circle>
      <circle class="gender-segment gender-female" cx="52" cy="52" r="42" pathLength="100" stroke-dasharray="${femaleShare} ${maleShare}" stroke-dashoffset="${-maleShare}"></circle>
    </svg>
    <div class="gender-center"><strong>${nf.format(latest.value)}</strong><small>WBP</small></div>
  `;

  byId("genderLegend").innerHTML = `
    <div class="gender-legend-item"><i class="male"></i><span>Laki-laki</span><strong>${nf.format(latest.male)}</strong><small>${maleShare.toLocaleString("id-ID", { maximumFractionDigits: 1 })}%</small></div>
    <div class="gender-legend-item"><i class="female"></i><span>Perempuan</span><strong>${nf.format(latest.female)}</strong><small>${femaleShare.toLocaleString("id-ID", { maximumFractionDigits: 1 })}%</small></div>
  `;
}

function renderChart() {
  const max = 200;
  byId("wbpSnapshotChart").innerHTML = snapshots.map((item) => `
    <div class="chart-column" aria-label="${item.month}: ${nf.format(item.value)} WBP">
      <span class="chart-value">${nf.format(item.value)}</span>
      <div class="bar-slot" aria-hidden="true"><i style="height:${(item.value / max) * 100}%"></i></div>
      <strong>${item.short}</strong>
    </div>
  `).join("");
}

function deltaMarkup(delta) {
  if (delta === null) return '<span class="delta neutral">—</span>';
  const sign = delta > 0 ? "+" : "−";
  const value = Math.abs(delta);
  return `<span class="delta ${delta > 0 ? "up" : "down"}">${sign}${nf.format(value)}</span>`;
}

function renderTable() {
  byId("snapshotTable").innerHTML = snapshots.map((item) => `
    <tr>
      <td><strong>${item.month}</strong></td>
      <td class="number">${nf.format(item.male)}</td>
      <td class="number">${nf.format(item.female)}</td>
      <td class="number"><b>${nf.format(item.value)}</b></td>
      <td class="number">${deltaMarkup(item.delta)}</td>
    </tr>
  `).join("");
}

function renderRegions() {
  byId("regionCards").innerHTML = provinceSummary.map((item, index) => `
    <button class="region-card" type="button" data-province="${item.province}" aria-label="Tampilkan ${item.facilities} lapas dan ${item.total} WBP di ${item.province}">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <div><strong>${item.province}</strong><small>${item.facilities} lapas</small></div>
      <b>${nf.format(item.total)}</b>
    </button>
  `).join("");
}

function renderProvinceOptions() {
  byId("provinceFilter").innerHTML += provinceSummary
    .map((item) => `<option value="${item.province}">${item.province}</option>`)
    .join("");
}

function renderFacilities(province = "all") {
  const filtered = province === "all" ? facilities : facilities.filter((item) => item.province === province);
  byId("facilityTable").innerHTML = filtered.map((item) => `
    <tr>
      <td><strong>${item.province}</strong></td>
      <td>${item.facility}</td>
      <td class="number">${nf.format(item.male)}</td>
      <td class="number">${item.female ? nf.format(item.female) : "—"}</td>
      <td class="number"><b>${nf.format(item.total)}</b></td>
    </tr>
  `).join("");

  const total = filtered.reduce((sum, item) => sum + item.total, 0);
  byId("facilityCount").textContent = `${filtered.length} lapas · ${nf.format(total)} WBP`;
  document.querySelectorAll(".region-card").forEach((card) => {
    card.classList.toggle("active", province !== "all" && card.dataset.province === province);
  });
}

function showToast(message) {
  clearTimeout(toastTimer);
  const toast = byId("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 2200);
}

function csvEscape(value) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

function downloadCsv() {
  const monthlyRows = snapshots.map((item) => [
    "Posisi nasional bulanan", item.month, "Nasional", "", item.male, item.female, item.value, item.delta ?? ""
  ]);
  const facilityRows = facilities.map((item) => [
    "Sebaran lapas", "Desember 2025", item.province, item.facility, item.male, item.female, item.total, ""
  ]);
  const rows = [
    ["Jenis data", "Periode", "Provinsi", "Lapas", "Laki-laki", "Perempuan", "Total WBP", "Perubahan"],
    ...monthlyRows,
    ...facilityRows
  ];
  const csv = "\ufeff" + rows.map((row) => row.map(csvEscape).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "satu-data-wbp-terorisme-ditjenpas-2025.csv";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
  showToast("Data WBP Ditjenpas 2025 diunduh");
}

async function copySummary() {
  const text = [
    "Satu Data Terorisme_prototype · RAN PE 2025",
    "Konteks: tahun transisi menuju RAN PE fase kedua.",
    "Pelaksanaan RAN PE 2025: 455 kegiatan, 104 Aksi PE, 48 Kementerian/Lembaga, dan 9 tema.",
    "Output paling dominan: peningkatan kapasitas kelembagaan pemerintah, sebanyak 292 output.",
    "Monitoring RAD PE dilakukan di Kalimantan Selatan, Nusa Tenggara Barat, Maluku Utara, dan DI Yogyakarta.",
    "Data WBP kasus terorisme: posisi Desember 2025 sebanyak 190 WBP pada 40 lapas di 9 provinsi.",
    "Komposisi Desember: 187 laki-laki dan 3 perempuan.",
    "Data tidak memuat identitas individu."
  ].join("\n");

  try {
    await navigator.clipboard.writeText(text);
    showToast("Ringkasan berhasil disalin");
  } catch {
    showToast("Ringkasan belum dapat disalin");
  }
}

byId("datasetSearch").addEventListener("input", renderDatasets);
byId("datasetFilter").addEventListener("change", renderDatasets);
byId("datasetGrid").addEventListener("click", (event) => {
  const card = event.target.closest(".dataset-card");
  if (card) showDataset(card.dataset.dataset);
});
byId("downloadCsv").addEventListener("click", downloadCsv);
byId("downloadTable").addEventListener("click", downloadCsv);
byId("copySummary").addEventListener("click", copySummary);
byId("provinceFilter").addEventListener("change", (event) => renderFacilities(event.target.value));
byId("regionCards").addEventListener("click", (event) => {
  const card = event.target.closest(".region-card");
  if (!card) return;
  const province = card.classList.contains("active") ? "all" : card.dataset.province;
  byId("provinceFilter").value = province;
  renderFacilities(province);
});

renderThemeChart();
renderOutputBars();
renderDatasets();
showDataset("theme1");
renderGenderChart();
renderChart();
renderTable();
renderRegions();
renderProvinceOptions();
renderFacilities();
