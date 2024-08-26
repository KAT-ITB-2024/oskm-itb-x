import himpunan from "./data_himpunan.json";

type HimpunanBSO = {
  id: number;
  type: string;
  fakultas: string;
  program_studi: string;
  nama: string;
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

const daftar_nama_hmps = filterSameName(himpunan);
export { data_himpunan, daftar_nama_hmps, type HimpunanBSO };
