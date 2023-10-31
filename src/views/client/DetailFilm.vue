<template>
  <div class="f_content">
    <div class="watch_film">
      <div class="g_heading">
        <div>
          <p class="m-0"><i class="ti-video-clapper me-2"></i>Heloo</p>
        </div>
      </div>

      <div class="chap_film">
        <div class="episode">
          <div class="episode_number">Tập</div>
        </div>
        <div class="info_error">
          <a href="#"><i class="ti-info-alt fs-18"></i></a>
          <a href="#" class="mg-r10"><i class="ti-alert fs-18"></i></a>
        </div>
      </div>

      <div class="content_film">
        <iframe
          src="https://scontent.cdninstagram.com/v/t39.25447-2/10000000_271857645247383_7170006865811145450_n.mp4?_nc_cat=105&vs=50364c098196e3c8&_nc_vs=HBksFQAYJEdJQ1dtQUNYMjEtS1FQY0FBT29DeVpGQl80QmpibWRqQUFBRhUAAsgBABUAGCRHSUNXbUFCY05iSk84OElHQUEwaVREdUxXQmM5YnY0R0FBQUYVAgLIAQBLB4gScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AHXVzZV9sYW5jem9zX2Zvcl92cW1fdXBzY2FsaW5nABFkaXNhYmxlX3Bvc3RfcHZxcwAVACUAHIwXQAAAAAAAAAAREQAAACbEpeyQ1bDHAxUCKAJDMxgLdnRzX3ByZXZpZXccF0CWqCHKwIMSGCFkYXNoX2dlbjJod2Jhc2ljX2hxMl9mcmFnXzJfdmlkZW8SABgYdmlkZW9zLnZ0cy5jYWxsYmFjay5wcm9kOBJWSURFT19WSUVXX1JFUVVFU1QbCogVb2VtX3RhcmdldF9lbmNvZGVfdGFnBm9lcF9oZBNvZW1fcmVxdWVzdF90aW1lX21zATAMb2VtX2NmZ19ydWxlB3VubXV0ZWQTb2VtX3JvaV9yZWFjaF9jb3VudAQ0OTk1EW9lbV9pc19leHBlcmltZW50AAxvZW1fdmlkZW9faWQQMTgxMDczNjcyOTM2MTk1OBJvZW1fdmlkZW9fYXNzZXRfaWQPODY0MzQ3NDExNzAxNzU5FW9lbV92aWRlb19yZXNvdXJjZV9pZBAxMDAxMzkxNjQxMTY4MjI2HG9lbV9zb3VyY2VfdmlkZW9fZW5jb2RpbmdfaWQPMzQ2OTc0Mjk3Nzk3NTg5DnZ0c19yZXF1ZXN0X2lkACUCHAAlxAEbB4gBcwQ4MTY1AmNkCjIwMjMtMTAtMjADcmNiBDQ5MDADYXBwCUluc3RhZ3JhbQJjdApHUk9VUF9QT1NUE29yaWdpbmFsX2R1cmF0aW9uX3MIMTQ1MC4wODUCdHMVcHJvZ3Jlc3NpdmVfZW5jb2RpbmdzAA%3D%3D&ccb=1-7&_nc_sid=5588c3&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=yEFctOOOZ9AAX_Nh-UK&_nc_ht=scontent-fra3-1.xx&oh=00_AfBuoJNDArnOV3lAGG6rBaUPZmmk-F5XXNogvkr4mWKGmw&oe=653FEC90&_nc_rid=429555059246397&_nc_store_type=0"
          style="width: 100%; height: 100%"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
      </div>

      <div class="settings_film">
        <div class="settings_episode pd-7 bd-r-5 mg-r10">
          <i class="ti-settings"></i>
        </div>
        <div class="next_film pd-7 bd-r-5">
          <a href="" class="pd-7">Tiếp<i class="ti-control-forward"></i></a>
        </div>
      </div>

      <div class="list_episode">
        <div class="heading">
          <span class="fw-700">Danh sách tập</span>
        </div>
        <div class="list_item_episode scroll-bar">
          <a href="" class="active"><span>1</span></a>

          <a href=""><span>1</span></a>
        </div>
      </div>

      <comment :parentComponent="'DETAIL'" />
    </div>
  </div>
</template>

<script>
import Comment from '@/components/clients/Comment.vue'

import '@/assets/client/css/infor/top-content/name-film.css'
import '@/assets/client/css/infor/top-content/main-film.css'
import '@/assets/client/css/infor/bottom-content/episode-film.css'
import '@/assets/client/css/infor/top-content/name-film.css'
import '@/assets/client/css/infor/bottom-content/comment-film.css'
import '@/assets/client/css/switalert.css'
import '@/assets/client/css/viewfilm.css'

export default {
  name: 'DetailFilm',
  components: { Comment },
  setup() {},
}
</script>

<style></style>
