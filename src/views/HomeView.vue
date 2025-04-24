<script setup>
</script>

<template>
  <main>
    <div>
      <!-- HEADER -->
      <div class="header" id="header">
        <div class="headback mx-auto"></div>
        <div class="headbg mx-auto"></div>
      </div>

      <!-- BAR -->
      <div class="bar text-center">
        <!-- <div class="mainphoto">
          <div class="mainphoto-box">
            <v-img
              :aspect-ratio="1"
              lazy-src="https://pbs.twimg.com/media/FDx_j3wVUAQzKkb?format=jpg&name=medium"
              src="https://pbs.twimg.com/media/FDx_j3wVUAQzKkb?format=jpg&name=medium"
            ></v-img>
          </div>
        </div> -->
      </div>

      <!-- CONTENT -->
      <div class="content">
        <v-container class="content-grid pt-8">
          <div class="ribbon ribbon-left"></div>
          <div class="ribbon ribbon-right"></div>
          <p class="text-center text-h6 mb-2">
            Congratulations to
            <a href="https://www.youtube.com/channel/UC3n5uGu18FoCy23ggWWp8tA"
              target="_blank" class="blue--text text-decoration-none">
              Nanashi Mumei
            </a>
            for reaching 500,000 subscribers on YouTube!
          </p>

          <!-- NAVIGATION -->
          <v-row no-gutters class="cards px-4 mb-8">
            <v-col class="text-center">
              <v-btn text class="brown--text darken-3" @click="scrollTo('#canvas')">
                <v-avatar left size="34"><img src="../assets/rune2.png" class="navimg"></v-avatar>
                <span class="pl-2 text-h6">Mural</span>
              </v-btn>
              <v-btn text class="brown--text darken-3" @click="scrollTo('#collage')">
                <v-avatar left size="34"><img src="../assets/rune2.png" class="navimg"></v-avatar>
                <span class="pl-2 text-h6">Collage</span>
              </v-btn>
              <v-btn text class="brown--text darken-3" @click="scrollTo('#messages')">
                <v-avatar left size="34"><img src="../assets/rune2.png" class="navimg"></v-avatar>
                <span class="pl-2 text-h6">Messages</span>
              </v-btn>
              <v-btn text class="brown--text darken-3" @click="scrollTo('#artworks')">
                <v-avatar left size="34"><img src="../assets/rune2.png" class="navimg"></v-avatar>
                <span class="pl-2 text-h6">Artworks</span>
              </v-btn>
            </v-col>
          </v-row>

          <!-- CANVAS -->
          <v-row no-gutters class="mb-2" id="canvas">
            <v-col class="text-h6 text-center px-2 brown lighten-3 mx-8 rounded-xl">
              COMMUNITY MURAL
              <v-btn text class="float-right brown--text darken-3" @click="scrollTo('#header')">
                TOP
              </v-btn>
            </v-col>
          </v-row>
          <v-row no-gutters class="mb-8">
            <v-col class="mural" sm="10" offset-sm="1">
              <div class="mural-container mx-auto">
                <img :src="CanvasImg" />
              </div>
            </v-col>
          </v-row>

          <!-- COLLAGE -->
          <v-row no-gutters class="mt-8 mb-2" id="collage">
            <v-col class="text-h6 text-center px-2 brown lighten-3 mx-8 rounded-xl">
              ART COLLAGE
              <v-btn text class="float-right brown--text darken-3" @click="scrollTo('#header')">
                TOP
              </v-btn>
            </v-col>
          </v-row>
          <v-row no-gutters class="mb-8">
            <v-col class="collage" sm="10" offset-sm="1">
              <div class="collage-container mx-auto">
                <img :src="CollageImg" />
              </div>
            </v-col>
          </v-row>

          <!-- MESSAGES -->
          <v-row no-gutters class="mt-8 mb-4" id="messages">
            <v-col class="text-h6 text-center px-2 brown lighten-3 mx-8 rounded-xl">
              MESSAGES
              <v-btn text class="float-right brown--text darken-3" @click="scrollTo('#header')">
                TOP
              </v-btn>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col class="cards px-4">
              <div v-masonry transition-duration="0.3s" item-selector=".card">
                <div class="card card-dark pt-8">
                  <div class="binder"></div>
                  <div class="card-name text-h4 blue--text text-center mb-4">Yosetti Board</div>
                  <div class="card-text text-h6 px-8 black--text pb-4 text-center">
                    More messages from the members of the community were collected,
                    and can be found over at the Yosetti message board:
                    <div class="text--center mt-4 mb-4">
                      <a class="card-name blue--text text-decoration-none text-h5"
                        href="https://yosetti.com/mainyosegakis/gift_send_web?id=1989690&sc=VEhZ4"
                        target="_blank">
                        OPEN LINK
                      </a>
                    </div>
                  </div>
                </div>
                <div v-masonry-tile class="card pt-6" v-for="(item, ix) in cards" :key="`card-${ix}`">
                  <div class="binder"></div>
                  <div class="wings"><img src="../assets/feather.png" /></div>
                  <div class="card-name text-h6 pr-12">{{item.name}}</div>
                  <div class="card-text text-h6 pr-4 pb-4">{{item.message}}</div>
                </div>
              </div>
            </v-col>
          </v-row>

          <!-- ARTWORKS -->
          <v-row no-gutters class="mt-8 mb-8" id="artworks">
            <v-col class="text-h6 text-center px-2 brown lighten-3 mx-8 rounded-xl">
              ARTWORKS
              <v-btn text class="float-right brown--text darken-3" @click="scrollTo('#header')">
                TOP
              </v-btn>
            </v-col>
          </v-row>
          <v-row class="px-8">
            <v-col
              cols="12" sm="6" lg="4" xl="3"
              v-for="(item, ix) in tweets" :key="`tweet-${ix}`">
              <v-card  elevation="1" shaped>
                1
              </v-card>
            </v-col>
          </v-row>

          <!-- CREDITS -->
          <v-row no-gutters class="mt-8 mb-8">
            <v-col class="text-h6 text-center px-2 brown lighten-3 mx-8 rounded-xl">
              CREDITS
              <v-btn text class="float-right brown--text darken-3" @click="scrollTo('#header')">
                TOP
              </v-btn>
            </v-col>
          </v-row>
          <v-row class="mb-8 px-16">
            <v-col cols="12" sm="6" lg="4">
              <ul>
                <li class="pb-4">
                  <strong class="mr-2">jetrico</strong>
                  <v-icon>mdi-twitter</v-icon>
                  <a target="_blank" href="https://twitter.com/jetri_co">@jetri_co</a>
                  <ul>
                    <li>Website development, graphics</li>
                    <li>Header Artwork</li>
                    <li>Backend automations</li>
                  </ul>
                </li>
                <li class="pb-4">
                  <strong class="mr-2">Mumei Civilization Discord</strong>
                  <ul>
                    <li>
                      <v-icon class="mr-2">mdi-discord</v-icon>
                      <a href="https://discord.gg/mumei-civilization" target="_blank">Server Invite</a>
                    </li>
                    <li>Event organization</li>
                    <li>Mural, the community drawing</li>
                    <li>Message collection / Tweet hashtag</li>
                    <li>Community announcements, etc</li>
                  </ul>
                </li>
                <li class="pb-4">
                  <strong class="mr-2">Mumei Sanctuary Discord</strong>
                  <ul>
                    <li>
                      <v-icon class="mr-2">mdi-discord</v-icon>
                      <a href="https://discord.gg/hoomanity" target="_blank">Server Invite</a>
                    </li>
                    <li>Art collage</li>
                    <li>Yosetti message board</li>
                    <li>Community announcements, etc</li>
                  </ul>
                </li>
                <!-- <li class="pb-4">
                  <strong class="mr-2">水卯</strong>
                  <v-icon>mdi-twitter</v-icon>
                  <a target="_blank" href="https://twitter.com/Minau_">@Minau_</a>
                  <ul>
                    <li>Mumei Sanctuary Discord logo</li>
                  </ul>
                </li> -->
                <li class="pb-4">
                  <strong class="mr-2">galex</strong>
                  <!-- <v-icon>mdi-twitter</v-icon>
                  <a target="_blank" href="https://twitter.com/Minau_">@Minau_</a> -->
                  <ul>
                    <li>Message card graphic</li>
                  </ul>
                </li>
              </ul>
            </v-col>
            <v-col cols="12" sm="6" lg="8">
              <v-container>
                <v-row>
                  <v-col cols="12" lg="6" class="text-center">
                    <a href="https://twitter.com/MumeiCiv/status/1477299356986494979" target="_blank">
                      <v-img
                        lazy-src="../assets/credits-civ.png"
                        src="../assets/credits-civ.png"
                      ></v-img>
                    </a>
                    <h4 class="text-center ma-0 pa-0">Mumei Civilization Discord</h4>
                  </v-col>
                  <v-col cols="12" lg="6" class="text-center pt-4">
                    <a href="https://twitter.com/MumeiSanctuary/status/1477349346219905026" target="_blank">
                      <img :src="CollageImg"
                        style="max-height:200px;" class="mb-4" />
                    </a>
                    <h4 class="text-center">Mumei Sanctuary Discord Collage Artists</h4>
                    <p>
                      Tex, kimfully, @alnomnomnom, HoloArtemis, Erich, Xander, fireofhell06,
                      @Sayo0692, WildestDuck, DedeHeav, Elious, Lingyi2400, Nanashi_Panda,
                      @outhaleart, Sock, PotatoIsNotCute, rafidfire, @rem26_art,
                      @HoneyStarDraws, @TheAmazingPoyo
                    </p>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import twemoji from 'twemoji';
import backupData from '@/data/data.json';
import CanvasImg from '@/assets/mural1.png';
import CollageImg from '@/assets/mural2.png';

export default {
  data: () => ({
    source: 'https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumei500k.json',
    cards: [],
    tweets: [],
    CanvasImg,
    CollageImg,
  }),
  methods: {
    scrollTo(target) {
      this.$vuetify.goTo(target, {
        duration: 1000,
        offset: 20,
        easing: 'easeInOutCubic',
      });
    },
  },
  mounted() {
    // Load data
    (async () => {
      const fetchSource = await axios.get(this.source).catch(() => null);
      const data = fetchSource && fetchSource.data ? fetchSource.data : backupData;
      this.cards = Object.values(data.messages).sort((a, b) => a.time - b.time);
      this.tweets = Object.values(data.tweets).map((tweet) => String(tweet.id));
      this.$nextTick(() => {
        twemoji.parse(document.body);
      });
    })();
  },
};
</script>

<style lang="scss" scoped>
.header {
  width:100%;
  height:200px;
  background:linear-gradient(to right, #907D6F 10%, #E9DCCD 40%, #E9DCCD 60%, #907D6F 90%);
  position:relative;
  .headback {
    width:100%;
    height:200px;
    position:absolute;
    z-index:1;
    background-image:url("../assets/header.png");
    background-position: center center;
    background-size:140%;
    filter:blur(10px);
  }
  .headbg {
    width:100%;
    height:200px;
    position:absolute;
    z-index:2;
    background-image:url("../assets/header.png");
    background-position: center 0px;
    background-repeat: repeat-y;
    background-size:1200px;
  }
}
.bar {
  width:100%;
  height:40px;
  position:relative;
  z-index:3;
  background-color:#907D6F;
  background-image:url("../assets/glyph.png");
  background-position: center left;
  background-repeat: repeat-x;
  .mainphoto {
    width:1px;
    height:1px;
    display:inline-block;
    position:absolute;
    margin:0px auto;
    .mainphoto-box {
      width:160px;
      height:160px;
      margin-top:-80px;
      margin-left:-80px;
      position:relative;
      border-radius:50%;
      overflow:hidden;
      border:3px solid #564442;
    }
  }

}
.content {
  min-height:calc(100vh - 290px);
  background-color:#BFAC9D;
  .content-grid {
    min-height:calc(100vh - 290px);
    background-color:#E9DCCD;
    position:relative;
    .ribbon {
      position:absolute;
      top:0px;
      width:20px;
      height:100%;
      background-image: url('../assets/pattern.png');
      background-repeat: repeat-y;
      &.ribbon-left {
        left:-10px;
      }
      &.ribbon-right {
        right:-10px;
      }
    }
    .mural {
      .mural-container {
        // max-width:calc(100vh - 80px);
      }
    }
    .cards {
      .card {
        position:relative;
        padding:0px 40px;
        min-height:100px;
        margin-bottom:10px;
        background-image: url('../assets/scroll-light-1.png'), url('../assets/scroll-light-2.png');
        background-repeat: no-repeat;
        background-position: top center, bottom center;
        background-size: 100% 24px, 100% calc(100% - 24px);
        &.card-dark {
          background-image: url('../assets/scroll-1.png'), url('../assets/scroll-2.png');
        }
        .wings {
          position:absolute;
          top:-30px; right:-20px;
          img {
            width:70px;
            height:70px;
          }
        }
        .card-name {
          color:#000000;
          // color:#984B4A;
          font-weight:bold;
          text-shadow:
            -2px -2px 0 #ffffff,
            0   -2px 0 #ffffff,
            2px -2px 0 #ffffff,
            2px  0   0 #ffffff,
            2px  2px 0 #ffffff,
            0    2px 0 #ffffff,
            -2px  2px 0 #ffffff,
            -2px  0   0 #ffffff;
        }
        .card-text {
          color: #262626;
          font-weight:bold;
        }
      }
    }
    .collage {
      .collage-container {
        // max-width:calc(100vh - 80px);
      }
    }
  }
}

.card {
  width:32%;
  margin:10px 0.5%;
}

@media only screen and (max-width: 1264px) {
  .card {
    width:32%;
    margin:10px 0.5%;
  }
}
@media only screen and (max-width: 900px) {
  .card {
    width:48%;
    margin:10px 1%;
  }
}
@media only screen and (max-width: 700px) {
  .card {
    width:96%;
    margin:10px 2%;
  }
}
</style>

<style lang="scss">
.card-text {
  img {
    height:1.4rem;
  }
}
</style>
