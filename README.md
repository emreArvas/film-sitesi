# Film İzleme Listesi ve Takip Uygulaması

Bu proje, kullanıcıların filmleri arayıp bulabileceği, "İzlenecekler" listesine ekleyebileceği ve izledikten sonra "İzlenenler" listesine taşıyabileceği modern bir React uygulamasıdır. Kullanıcılar film verilerine **TMDB (The Movie Database)** API'si aracılığıyla erişir.

## Proje Hakkında

Uygulama, film tutkunlarının izlemek istedikleri filmleri organize etmelerini sağlar. Basit ve kullanıcı dostu arayüzü ile filmleri aratabilir, posterlerini ve bilgilerini görüntüleyebilir ve kişisel listelerinizi yönetebilirsiniz.

### Temel Özellikler

*   **Film Arama:** TMDB API entegrasyonu sayesinde güncel ve geniş bir film arşivinde arama yapabilirsiniz.
*   **İzlenecekler Listesi (Watchlist):** Merak ettiğiniz veya daha sonra izlemek istediğiniz filmleri bu listeye ekleyebilirsiniz.
*   **İzlenenler Listesi (Watched):** İzlediğiniz filmleri bu listeye taşıyarak izleme geçmişinizi tutabilirsiniz.
*   **Liste Yönetimi:**
    *   İzlenecekler listesinden İzlenenler listesine film taşıma.
    *   Filmleri herhangi bir listeden kalıcı olarak silme.
    *   Filmleri İzlenenler listesinden tekrar İzlenecekler listesine taşıma.

## Ekran Görüntüleri

Uygulamanın arayüzünden bazı kareler:

<div style="display: flex; flex-direction: column; gap: 10px;">
  <img src="https://res.cloudinary.com/dtmebvljq/image/upload/v1765553051/meyzs8bn3y0hcolin9km.png" alt="Arayüz 1">
  <img src="https://res.cloudinary.com/dtmebvljq/image/upload/v1765553053/q2jhdrqjqdbr52rtvm9b.png" alt="Arayüz 2">
  <img src="https://res.cloudinary.com/dtmebvljq/image/upload/v1765553054/eggx9up4hds6j5jmwprg.png" alt="Arayüz 3">
</div>

## Kullanılan Teknolojiler

Proje geliştirilirken güncel web teknolojileri ve kütüphaneler kullanılmıştır:

*   **[React](https://react.dev/)**: Kullanıcı arayüzünü oluşturmak için kullanılan ana JavaScript kütüphanesi. (Hooks yapısı aktif olarak kullanılmıştır: `useState`, `useEffect`, `useContext`, `useReducer`).
*   **[Vite](https://vitejs.dev/)**: Hızlı geliştirme ve build işlemleri için kullanılan modern frontend aracı.
*   **[React Router DOM](https://reactrouter.com/)**: Sayfalar arası geçiş ve yönlendirme işlemleri için (Single Page Application yapısı).
*   **[Context API](https://react.dev/reference/react/useContext)**: Uygulama genelinde veri yönetimi (Global State Management) için kullanıldı. Filmlerin listeler arasındaki durumu burada yönetilir.
*   **[Axios](https://axios-http.com/)**: TMDB API'sine HTTP istekleri atmak ve veri çekmek için kullanıldı.
*   **[The Movie Database (TMDB) API](https://www.themoviedb.org/)**: Film verileri, posterler ve detaylar bu API üzerinden sağlanmaktadır.
*   **[FontAwesome](https://fontawesome.com/)**: Kullanıcı arayüzündeki ikonlar için kullanıldı.
*   **CSS3**: Özelleştirilmiş stiller ve responsive tasarım için.

## Kurulum ve Çalıştırma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1.  **Projeyi Klonlayın:**
    ```bash
    git clone <repo-url>
    cd film
    ```

2.  **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    ```

3.  **Uygulamayı Başlatın:**
    ```bash
    npm run dev
    ```

4.  Tarayıcınızda verilen localhost adresine giderek uygulamayı kullanmaya başlayabilirsiniz.
