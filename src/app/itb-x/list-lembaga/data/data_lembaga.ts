import himpunan from "./data_himpunan.json";

type HimpunanBSO = {
  id: number;
  type: string;
  fakultas: string;
  program_studi: string;
  nama: string;
  logoPath?: string;
};
const data_himpunan = himpunan;
const filterSameName = (dftr_lembaga: HimpunanBSO[]) => {
  const seen = new Set();
  return dftr_lembaga.filter((himpunan) => {
    const nama = himpunan.nama;
    if (seen.has(nama)) {
      return false;
    }
    seen.add(nama);
    return true;
  });
};

const daftar_nama_hmps = filterSameName(himpunan).sort((a, b) => {
  return a.fakultas < b.fakultas ? -1 : 1;
});
export { data_himpunan, daftar_nama_hmps, type HimpunanBSO };
