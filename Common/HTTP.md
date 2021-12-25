# HTTP Documentation
Hypertext Transfer Protocol (HTTP) adalah protokol lapisan aplikasi untuk mengirimkan dokumen hypermedia, seperti HTML. Itu dirancang untuk komunikasi antara browser web dan server web, tetapi juga dapat digunakan untuk tujuan lain. HTTP mengikuti model client-server klasik, dengan klien membuka koneksi untuk membuat permintaan, lalu menunggu hingga menerima respons. HTTP adalah protokol stateless, artinya server tidak menyimpan data (status) apa pun di antara dua permintaan.

#### HTTP Headers
Header HTTP memungkinkan klien dan server menyampaikan informasi tambahan dengan permintaan atau respons HTTP. Header HTTP terdiri dari nama case-insensitive diikuti oleh titik dua (:), kemudian dengan nilainya. 
[source](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

#### HTTP Request Methods
HTTP mendefinisikan satu set metode permintaan untuk menunjukkan tindakan yang diinginkan untuk dilakukan untuk sumber daya yang diberikan.

- [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) - Untuk mendapatkan data dari server.
- [POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST) - Untuk mengirimkan data ke server.
- [PUT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT) - Untuk meng-update satu data object ke server.
- [PATCH](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH) - Untuk meng-update sebagian data ke server.
- [DELETE](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE) - Untuk menghapus data.
- [OPTIONS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS) - Untuk memberikan options method (GET, POST, PUT, PATCH, etc).
- [Etc](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).

#### HTTP Response Status Codes
Kode status respons HTTP menunjukkan apakah permintaan HTTP tertentu telah berhasil diselesaikan. Tanggapan dikelompokkan dalam lima kelas:
- [Informational Responses 100 - 199](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses)
- [Successfull Responses 200 - 299](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses)
- [Redirection Messages 300 - 399](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages)
- [Client Error Responses 400 - 499](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses)
- [Server Error Responses 500 - 599](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses)


#### References:
- [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)