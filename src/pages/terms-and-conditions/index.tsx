import React from "react";
import Head from "next/head";

const TermsAndConditions = () => {
  return (
    <div className="max-w-[1280px] p-8">
      <Head>
        <title>Terms & Conditions</title>
      </Head>
      <h1 className="font-bold text-[32px] my-4">Syarat dan Ketentuan</h1>
      <p className="mb-4">
        Syarat dan ketentuan (&quot;S&amp;K&quot;) dari situs{" "}
        <a href="http://www.loocale.id/">www.loocale.id</a> (&quot;Situs&quot;) ini merupakan
        perjanjian yang mengikat antara pengguna situs (&quot;Anda&quot;) dan PT Karya Warga Lokal
        (&quot;Kami&quot;). Harap baca terlebih dahulu syarat dan ketentuan yang berlaku sebelum
        menggunakan layanan di situs kami.
      </p>
      <h3 className="font-bold mt-6 text-[24px]">A. PELAYANAN KAMI</h3>
      <ol>
        <li>
          Anda dapat menuliskan pengalaman dan cerita terkait kegiatan berwisata di situs kami dalam
          bentuk cerita dengan disertakan foto dan video.
        </li>
        <li>
          Pengguna lain akan melihat cerita Anda dan dapat berinteraksi dalam bentuk <em>like</em>{" "}
          dan <em>comment.</em>
        </li>
        <li>
          Anda dapat melihat cerita pengguna lain dan dapat berinteraksi dalam bentuk <em>like</em>{" "}
          dan <em>comment.</em>
        </li>
        <li>Anda dapat melihat aktivitas atau kegiatan populer di tempat pilihan.</li>
      </ol>
      <h3 className="font-bold mt-6 text-[24px]">B. KONTEN YANG DAPAT DIBAGIKAN</h3>
      <ol>
        <li>Anda dapat membagikan cerita yang berkaitan dengan pariwisata.</li>
        <li>
          Anda dilarang keras membagikan cerita ataupun foto dan video yang mengandung unsur SARA,
          ujaran kebencian, pornografi/pornoaksi, dan <em>hoax.</em>
        </li>
      </ol>
      <h3 className="font-bold mt-6 text-[24px]">C. BATASAN TANGGUNGJAWAB</h3>
      <ol>
        <li>
          Kami tidak dapat menjamin kepastian informasi yang Anda baca pada cerita pengguna lain
          terkait akurasi informasi yang disampaikan.
        </li>
        <li>
          Kami tidak menjamin:
          <ul>
            <li>Fungsi, layanan, dan fitur keamanan yang tersedia di Situs bebas dari error;</li>
            <li>Situs dan server terbebas dari virus ataupun malware.</li>
          </ul>
        </li>
      </ol>
      <h3 className="font-bold mt-6 text-[24px]">E. KOMPLAIN</h3>
      <ol>
        <li>
          Anda dapat mengajukan komplain dengan menuliskan keluhan Anda kepada Kami melalui WhatsApp
          ke nomor 08111722233
        </li>
        <li>
          Komplain Anda akan Kami tanggapi selambat-lambatnya 3x24 jam setelah komplain Anda Kami
          terima.
        </li>
      </ol>
      <h3 className="font-bold mt-6 text-[24px]">F. PENYELESAIAN PERSELISIHAN</h3>
      <ol>
        <li>S&amp;K ini tunduk pada hukum yang berlaku di negara Republik Indonesia.</li>
        <li>
          Apabila timbul perselisihan di antara para pihak (yang dalam hal ini terlibat atau
          tercatut di dalam S&amp;K ini) sebagai akibat dari pelaksanaan S&amp;K ini, maka para
          pihak sepakat untuk menyelesaikannya secara musyawarah dan kekeluargaan.
        </li>
        <li>
          Dalam hal penyelesaian secara musyawarah dan kekeluargaan tersebut tidak mencapai
          kesepakatan, maka para pihak sepakat untuk menyelesaikannya secara hukum di kantor
          Pengadilan Negeri Jakarta Selatan.
        </li>
      </ol>
      <h3 className="font-bold mt-6 text-[24px]">G. KEADAAN KHUSUS</h3>
      <ol>
        <li>
          Kami tidak bertanggungjawab terhadap segala jenis aktivitas termasuk transaksi, pembatasan
          akses ke Situs, yang mengakibatkan kerugian kepada Anda yang disebabkan keadaan kahar.
        </li>
        <li>
          Keadaan kahar yang dimaksud termasuk namun tidak terbatas pada bencana alam (banjir, gempa
          bumi, tsunami, angin topan, gunung meletus), kerusuhan, epidemi, peperangan, kegiatan
          militer, aksi terorisme, petir, demonstrasi, dan ataupun kebangkrutan Pelaku Usaha.
        </li>
        <li>
          Kami tidak bertanggungjawab terhadap segala kerugian yang disebabkan oleh keadaan kahar
          yang disebutkan di S&amp;K nomor 6 poin b.
        </li>
      </ol>
    </div>
  );
};

export default TermsAndConditions;
