import hmps from "./hmps.json";
import ukmAgama from "./ukm_agama.json";
import ukmKajian from "./ukm_kajian.json";
import ukmMedia from "./ukm_media.json";
import ukmOlahragaKesehatan from "./ukm_orkes.json";
import ukmPendidikan from "./ukm_pendidikan.json";
import ukmSeniBudaya from "./ukm_budaya.json";

type HimpunanBSO = {
  nama_lembaga: string;
  deskripsi: string;
  hari_jadi: string;
  visi: string;
  alamat_sekretariat: string;
  media_sosial: string;
  foto_kegiatan: string[];
  logo_lembaga: string;
  fakultas: string;
};

type UKM = {
  nama_lembaga: string;
  deskripsi: string;
  hari_jadi: string;
  visi: string;
  alamat_sekretariat: string;
  media_sosial: string;
  foto_kegiatan: string[];
  logo_lembaga: string;
};

export {
  hmps,
  ukmAgama,
  ukmKajian,
  ukmMedia,
  ukmOlahragaKesehatan,
  ukmPendidikan,
  ukmSeniBudaya,
};
export type { HimpunanBSO, UKM };
