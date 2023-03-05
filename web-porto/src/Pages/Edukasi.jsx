import wisuda from "../Asset/wisuda.jpeg";
import curve from "../Asset/curve.svg";

export default function Edukasi() {
  return (
    <>
      <div className="w-full">
        <img src={curve} alt="" className="w-full" />
      </div>
      <div className="flex justify-center my-10">
        <div className="flex-col mx-5">
          <p className="font-bold text-[50px] text-[#BE9E44] text-center">
            Riwayat Pendidikan
          </p>
          <div className="border-4 border-solid p-4 mx-5 mt-5">
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="text-xl">Pendidikan Terakhir</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>S1</td>
                  <td>: Universitas Padjadjaran</td>
                </tr>
                <tr>
                  <td>Prodi/Fakultas</td>
                  <td>: Fisika/MIPA</td>
                </tr>
                <tr>
                  <td>IPK</td>
                  <td>: 3.43</td>
                </tr>
                <tr>
                  <td>Beasiswa</td>
                  <td>: Bidikmisi</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="border-4 border-solid p-4 mx-5 mt-5">
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="text-xl">Pengalaman Organisasi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>HIFI (2018-2022)</td>
                  <td>: Anggota Penuh </td>
                </tr>
                <tr>
                  <td>Kakak Pendamping (2019)</td>
                  <td>: Anggota</td>
                </tr>
                <tr>
                  <td>BSO PECC HIFI (2020)</td>
                  <td>: Kepala BSO </td>
                </tr>
                <tr>
                  <td>BSO Robocop HIFI (2020)</td>
                  <td>: Anggota </td>
                </tr>
                <tr>
                  <td>Physics Fair (2020)</td>
                  <td>: Staff PDD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-center items-center ml-10">
          <img src={wisuda} alt="" className="h-[500px] rounded-xl" />
        </div>
      </div>
    </>
  );
}
