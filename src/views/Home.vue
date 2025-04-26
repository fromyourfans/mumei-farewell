<template>
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
        <p class="text-center text-h4 mb-2">
          Farewell, Nanashi Mumei
        </p>

        <!-- NAVIGATION -->
        <v-row no-gutters class="cards px-4 mb-8">
          <v-col class="text-center">
            <v-btn text class="brown--text darken-3" @click="scrollTo('#covermv')">
              <v-avatar left size="34"><img src="../assets/rune2.png" class="navimg"></v-avatar>
              <span class="pl-2 text-h6">Cover MV</span>
            </v-btn>
            <v-btn text class="brown--text darken-3" @click="scrollTo('#clips')">
              <v-avatar left size="34"><img src="../assets/rune2.png" class="navimg"></v-avatar>
              <span class="pl-2 text-h6">Thank You</span>
            </v-btn>
            <v-btn text class="brown--text darken-3" @click="scrollTo('#canvas')">
              <v-avatar left size="34"><img src="../assets/rune2.png" class="navimg"></v-avatar>
              <span class="pl-2 text-h6">Mural</span>
            </v-btn>
            <v-btn text class="brown--text darken-3" @click="scrollTo('#flags')">
              <v-avatar left size="34"><img src="../assets/rune2.png" class="navimg"></v-avatar>
              <span class="pl-2 text-h6">Flags</span>
            </v-btn>
            <v-btn text class="brown--text darken-3" @click="scrollTo('#artworks')">
              <v-avatar left size="34"><img src="../assets/rune2.png" class="navimg"></v-avatar>
              <span class="pl-2 text-h6">Artworks</span>
            </v-btn>
            <v-btn text class="brown--text darken-3" @click="scrollTo('#messages')">
              <v-avatar left size="34"><img src="../assets/rune2.png" class="navimg"></v-avatar>
              <span class="pl-2 text-h6">Messages</span>
            </v-btn>
          </v-col>
        </v-row>

        <!-- COVER MV -->
        <v-row no-gutters class="mb-2" id="covermv">
          <v-col class="text-h6 text-center px-2 brown lighten-3 mx-8 rounded-xl">
            COVER MUSIC VIDEO
            <v-btn text class="float-right brown--text darken-3" @click="scrollTo('#header')">
              TOP
            </v-btn>
          </v-col>
        </v-row>
        <v-row no-gutters class="mb-8">
          <v-col class="text-center" sm="12">
            <iframe title="feature-video"
              width="854" height="480"
              src="https://www.youtube.com/embed/azay4mebvcs"
              frameborder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              allowfullscreen>
            </iframe>
          </v-col>
        </v-row>

        <!-- CLIPS -->
        <v-row no-gutters class="mt-8 mb-8" id="clips">
          <v-col class="text-h6 text-center px-2 brown lighten-3 mx-8 rounded-xl">
            CLIPS
            <v-btn text class="float-right brown--text darken-3" @click="scrollTo('#header')">
              TOP
            </v-btn>
          </v-col>
        </v-row>
        <v-row no-gutters class="mb-8">
          <v-col class="text-center" sm="12">
            <iframe title="feature-video"
              width="854" height="480"
              src="https://www.youtube.com/embed/azay4mebvcs"
              frameborder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              allowfullscreen>
            </iframe>
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
              <inner-image-zoom
                :src="CanvasImg"
                :zoomSrc="CanvasImg" />
            </div>
          </v-col>
        </v-row>

        <!-- FLAGS -->
        <v-row no-gutters class="mt-8 mb-8" id="flags">
          <v-col class="text-h6 text-center px-2 brown lighten-3 mx-8 rounded-xl">
            FLAGS
            <v-btn text class="float-right brown--text darken-3" @click="scrollTo('#header')">
              TOP
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="px-8">
          <v-col
            cols="12" sm="6" lg="4" xl="3"
            v-for="(item, ix) in flags" :key="`flag-${ix}`">
            <v-card  elevation="1" shaped class="text-center">
              <a :href="item.link" target="_blank"><img :src="item.thumb" style="width:100%"></a>
              <br />{{ item.name }}
            </v-card>
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
            v-for="(item, ix) in fanart" :key="`fanart-${ix}`">
            <v-card  elevation="1" shaped class="text-center">
              <a :href="item.link" target="_blank"><img :src="item.thumb" style="width:100%"></a>
              <br />{{ item.name }}
            </v-card>
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
              <div v-masonry-tile class="card pt-6" v-for="(item, ix) in cards" :key="`card-${ix}`">
                <div class="binder"></div>
                <div class="wings"><img src="../assets/feather.png" /></div>
                <div class="card-name text-h6 pr-12">{{item.name}}</div>
                <div class="card-text text-h6 pr-4 pb-4">{{item.message}}</div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
/* eslint-disable object-curly-newline */
import axios from 'axios';
import InnerImageZoom from 'vue-inner-image-zoom';
import twemoji from 'twemoji';
import backupData from '@/data/data.json';
import artistNames from '@/data/names.json';
import CanvasImg from '@/assets/mural1.png';

import flagThumb01 from '@/assets/flags/thumbs/01-asnu.png';
import flagThumb02 from '@/assets/flags/thumbs/02-asnu.png';
import flagThumb03 from '@/assets/flags/thumbs/03-8509.png';
import flagThumb04 from '@/assets/flags/thumbs/04-jesus.png';
import flagThumb05 from '@/assets/flags/thumbs/05-kanakonosuke.png';
import flagThumb06 from '@/assets/flags/thumbs/06-kanakonosuke.png';
import flagThumb07 from '@/assets/flags/thumbs/07-moomshine74.png';
import flagThumb08 from '@/assets/flags/thumbs/08-nintan.png';
import flagFull01 from '@/assets/flags/full/01-asnu.png';
import flagFull02 from '@/assets/flags/full/02-asnu.png';
import flagFull03 from '@/assets/flags/full/03-8509.png';
import flagFull04 from '@/assets/flags/full/04-jesus.png';
import flagFull05 from '@/assets/flags/full/05-kanakonosuke.png';
import flagFull06 from '@/assets/flags/full/06-kanakonosuke.png';
import flagFull07 from '@/assets/flags/full/07-moomshine74.png';
import flagFull08 from '@/assets/flags/full/08-nintan.png';

import fanartThumb01 from '@/assets/fanarts/thumbs/01-mathiaszacarias.jpg';
import fanartThumb02 from '@/assets/fanarts/thumbs/02-gorgelon.jpg';
import fanartThumb03 from '@/assets/fanarts/thumbs/03-mogumy.jpg';
import fanartThumb04 from '@/assets/fanarts/thumbs/04-juniper.jpg';
import fanartThumb05 from '@/assets/fanarts/thumbs/05-jar.jpg';
import fanartThumb06a from '@/assets/fanarts/thumbs/06a-namelessgator.jpg';
import fanartThumb06b from '@/assets/fanarts/thumbs/06b-namelessgator.jpg';
import fanartThumb07 from '@/assets/fanarts/thumbs/07-spook.jpg';
import fanartThumb08 from '@/assets/fanarts/thumbs/08-nintan.jpg';
import fanartThumb09 from '@/assets/fanarts/thumbs/09-yelingcolors.jpg';
import fanartThumb10 from '@/assets/fanarts/thumbs/10-theaddrumer.jpg';
import fanartThumb11 from '@/assets/fanarts/thumbs/11-athrx.jpg';
import fanartThumb12a from '@/assets/fanarts/thumbs/12a-ichiminh.jpg';
import fanartThumb12b from '@/assets/fanarts/thumbs/12b-ichiminh.jpg';
import fanartThumb13 from '@/assets/fanarts/thumbs/13-corvusfall.jpg';
import fanartThumb14 from '@/assets/fanarts/thumbs/14-xanrail.jpg';
import fanartThumb15a from '@/assets/fanarts/thumbs/15a-kirbios748orkirbiossensei.jpg';
import fanartThumb15b from '@/assets/fanarts/thumbs/15b-kirbios748orkirbiossensei.jpg';
import fanartThumb16 from '@/assets/fanarts/thumbs/16-mochaalpaca.jpg';
import fanartThumb17 from '@/assets/fanarts/thumbs/17-meguminsstaff.jpg';
import fanartThumb18 from '@/assets/fanarts/thumbs/18-noricchi.jpg';
import fanartThumb19 from '@/assets/fanarts/thumbs/19-4ply.jpg';
import fanartThumb20 from '@/assets/fanarts/thumbs/20-sock.jpg';
import fanartThumb21a from '@/assets/fanarts/thumbs/21a-davidesperluminavi.jpg';
import fanartThumb21b from '@/assets/fanarts/thumbs/21b-davidesperluminavi.jpg';
import fanartThumb22 from '@/assets/fanarts/thumbs/22-zoe.jpg';
import fanartThumb23 from '@/assets/fanarts/thumbs/23-serverblade.jpg';
import fanartThumb24a from '@/assets/fanarts/thumbs/24a-alphacas.jpg';
import fanartThumb24b from '@/assets/fanarts/thumbs/24b-alphacas.jpg';
import fanartThumb24c from '@/assets/fanarts/thumbs/24c-alphacas.jpg';
import fanartThumb25 from '@/assets/fanarts/thumbs/25-jesusalberto.jpg';
import fanartThumb26 from '@/assets/fanarts/thumbs/26-ryuu.jpg';
import fanartThumb27a from '@/assets/fanarts/thumbs/27a-higure.jpg';
import fanartThumb27b from '@/assets/fanarts/thumbs/27b-higure.jpg';
import fanartThumb28a from '@/assets/fanarts/thumbs/28a-sandvich.jpg';
import fanartThumb28b from '@/assets/fanarts/thumbs/28b-sandvich.jpg';
import fanartThumb29 from '@/assets/fanarts/thumbs/29-rangerradragon.jpg';
import fanartThumb30 from '@/assets/fanarts/thumbs/30-caveman2488.jpg';
import fanartThumb31 from '@/assets/fanarts/thumbs/31-moomshine74.jpg';
import fanartThumb32 from '@/assets/fanarts/thumbs/32-hooman.jpg';
import fanartThumb33 from '@/assets/fanarts/thumbs/33-ebiray.jpg';
import fanartThumb34 from '@/assets/fanarts/thumbs/34-alfrysbrown.jpg';
import fanartThumb35 from '@/assets/fanarts/thumbs/35-rot8.jpg';
import fanartThumb36 from '@/assets/fanarts/thumbs/36-echosjp.jpg';
import fanartThumb37 from '@/assets/fanarts/thumbs/37-eaglex197.jpg';
import fanartThumb38 from '@/assets/fanarts/thumbs/38-st3ll4.jpg';
import fanartThumb39 from '@/assets/fanarts/thumbs/39-yumih3re.jpg';
import fanartThumb40a from '@/assets/fanarts/thumbs/40a-woody.jpg';
import fanartThumb40b from '@/assets/fanarts/thumbs/40b-woody.jpg';
import fanartThumb40c from '@/assets/fanarts/thumbs/40c-woody.jpg';
import fanartThumb41 from '@/assets/fanarts/thumbs/41-sleepyfenix.jpg';
import fanartThumb42a from '@/assets/fanarts/thumbs/42a-umicross.jpg';
import fanartThumb42b from '@/assets/fanarts/thumbs/42b-umicross.jpg';
import fanartThumb43 from '@/assets/fanarts/thumbs/43-formerlycream.jpg';
import fanartThumb44 from '@/assets/fanarts/thumbs/44-rdg22.jpg';
import fanartThumb45 from '@/assets/fanarts/thumbs/45-lucaumbriel.jpg';
import fanartThumb46a from '@/assets/fanarts/thumbs/46a-sinefinebelli.jpg';
import fanartThumb46b from '@/assets/fanarts/thumbs/46b-sinefinebelli.jpg';
import fanartThumb47 from '@/assets/fanarts/thumbs/47-miyazusumire.jpg';

import fanartFull01 from '@/assets/fanarts/full/01-mathiaszacarias.png';
import fanartFull02 from '@/assets/fanarts/full/02-gorgelon.png';
import fanartFull03 from '@/assets/fanarts/full/03-mogumy.png';
import fanartFull04 from '@/assets/fanarts/full/04-juniper.png';
import fanartFull05 from '@/assets/fanarts/full/05-jar.png';
import fanartFull06a from '@/assets/fanarts/full/06a-namelessgator.png';
import fanartFull06b from '@/assets/fanarts/full/06b-namelessgator.png';
import fanartFull07 from '@/assets/fanarts/full/07-spook.png';
import fanartFull08 from '@/assets/fanarts/full/08-nintan.png';
import fanartFull09 from '@/assets/fanarts/full/09-yelingcolors.png';
import fanartFull10 from '@/assets/fanarts/full/10-theaddrumer.png';
import fanartFull11 from '@/assets/fanarts/full/11-athrx.png';
import fanartFull12a from '@/assets/fanarts/full/12a-ichiminh.png';
import fanartFull12b from '@/assets/fanarts/full/12b-ichiminh.png';
import fanartFull13 from '@/assets/fanarts/full/13-corvusfall.png';
import fanartFull14 from '@/assets/fanarts/full/14-xanrail.png';
import fanartFull15a from '@/assets/fanarts/full/15a-kirbios748orkirbiossensei.png';
import fanartFull15b from '@/assets/fanarts/full/15b-kirbios748orkirbiossensei.png';
import fanartFull16 from '@/assets/fanarts/full/16-mochaalpaca.png';
import fanartFull17 from '@/assets/fanarts/full/17-meguminsstaff.png';
import fanartFull18 from '@/assets/fanarts/full/18-noricchi.png';
import fanartFull19 from '@/assets/fanarts/full/19-4ply.png';
import fanartFull20 from '@/assets/fanarts/full/20-sock.png';
import fanartFull21a from '@/assets/fanarts/full/21a-davidesperluminavi.png';
import fanartFull21b from '@/assets/fanarts/full/21b-davidesperluminavi.png';
import fanartFull22 from '@/assets/fanarts/full/22-zoe.png';
import fanartFull23 from '@/assets/fanarts/full/23-serverblade.png';
import fanartFull24a from '@/assets/fanarts/full/24a-alphacas.png';
import fanartFull24b from '@/assets/fanarts/full/24b-alphacas.png';
import fanartFull24c from '@/assets/fanarts/full/24c-alphacas.png';
import fanartFull25 from '@/assets/fanarts/full/25-jesusalberto.png';
import fanartFull26 from '@/assets/fanarts/full/26-ryuu.png';
import fanartFull27a from '@/assets/fanarts/full/27a-higure.png';
import fanartFull27b from '@/assets/fanarts/full/27b-higure.png';
import fanartFull28a from '@/assets/fanarts/full/28a-sandvich.png';
import fanartFull28b from '@/assets/fanarts/full/28b-sandvich.png';
import fanartFull29 from '@/assets/fanarts/full/29-rangerradragon.png';
import fanartFull30 from '@/assets/fanarts/full/30-caveman2488.png';
import fanartFull31 from '@/assets/fanarts/full/31-moomshine74.png';
import fanartFull32 from '@/assets/fanarts/full/32-hooman.png';
import fanartFull33 from '@/assets/fanarts/full/33-ebiray.png';
import fanartFull34 from '@/assets/fanarts/full/34-alfrysbrown.png';
import fanartFull35 from '@/assets/fanarts/full/35-rot8.png';
import fanartFull36 from '@/assets/fanarts/full/36-echosjp.png';
import fanartFull37 from '@/assets/fanarts/full/37-eaglex197.png';
import fanartFull38 from '@/assets/fanarts/full/38-st3ll4.png';
import fanartFull39 from '@/assets/fanarts/full/39-yumih3re.png';
import fanartFull40a from '@/assets/fanarts/full/40a-woody.png';
import fanartFull40b from '@/assets/fanarts/full/40b-woody.png';
import fanartFull40c from '@/assets/fanarts/full/40c-woody.png';
import fanartFull41 from '@/assets/fanarts/full/41-sleepyfenix.png';
import fanartFull42a from '@/assets/fanarts/full/42a-umicross.png';
import fanartFull42b from '@/assets/fanarts/full/42b-umicross.png';
import fanartFull43 from '@/assets/fanarts/full/43-formerlycream.png';
import fanartFull44 from '@/assets/fanarts/full/44-rdg22.png';
import fanartFull45 from '@/assets/fanarts/full/45-lucaumbriel.png';
import fanartFull46a from '@/assets/fanarts/full/46a-sinefinebelli.png';
import fanartFull46b from '@/assets/fanarts/full/46b-sinefinebelli.png';
import fanartFull47 from '@/assets/fanarts/full/47-miyazusumire.png';

export default {
  data: () => ({
    source: 'https://vtubertools.sfo3.digitaloceanspaces.com/tribute/mumeifarewell.json',
    cards: [],
    flags: [
      { thumb: flagThumb01, link: flagFull01, name: 'Battle Armor TCM (AsNu)' },
      { thumb: flagThumb02, link: flagFull02, name: 'Battle Armor TCM (AsNu)' },
      { thumb: flagThumb03, link: flagFull03, name: 'Boring Name8509' },
      { thumb: flagThumb04, link: flagFull04, name: 'Jesus Gasper' },
      { thumb: flagThumb05, link: flagFull05, name: 'Kanakonosuke' },
      { thumb: flagThumb06, link: flagFull06, name: 'Kanakonosuke' },
      { thumb: flagThumb07, link: flagFull07, name: 'Moomshine74' },
      { thumb: flagThumb08, link: flagFull08, name: 'Nin-tan' },
    ],
    fanart: [
      { thumb: fanartThumb01, link: fanartFull01, file: '01-mathiaszacarias', name: '' },
      { thumb: fanartThumb02, link: fanartFull02, file: '02-gorgelon', name: '' },
      { thumb: fanartThumb03, link: fanartFull03, file: '03-mogumy', name: '' },
      { thumb: fanartThumb04, link: fanartFull04, file: '04-juniper', name: '' },
      { thumb: fanartThumb05, link: fanartFull05, file: '05-jar', name: '' },
      { thumb: fanartThumb06a, link: fanartFull06a, file: '06a-namelessgator', name: '' },
      { thumb: fanartThumb06b, link: fanartFull06b, file: '06b-namelessgator', name: '' },
      { thumb: fanartThumb07, link: fanartFull07, file: '07-spook', name: '' },
      { thumb: fanartThumb08, link: fanartFull08, file: '08-nintan', name: '' },
      { thumb: fanartThumb09, link: fanartFull09, file: '09-yelingcolors', name: '' },
      { thumb: fanartThumb10, link: fanartFull10, file: '10-theaddrumer', name: '' },
      { thumb: fanartThumb11, link: fanartFull11, file: '11-athrx', name: '' },
      { thumb: fanartThumb12a, link: fanartFull12a, file: '12a-ichiminh', name: '' },
      { thumb: fanartThumb12b, link: fanartFull12b, file: '12b-ichiminh', name: '' },
      { thumb: fanartThumb13, link: fanartFull13, file: '13-corvusfall', name: '' },
      { thumb: fanartThumb14, link: fanartFull14, file: '14-xanrail', name: '' },
      { thumb: fanartThumb15a, link: fanartFull15a, file: '15a-kirbios748orkirbiossensei', name: '' },
      { thumb: fanartThumb15b, link: fanartFull15b, file: '15b-kirbios748orkirbiossensei', name: '' },
      { thumb: fanartThumb16, link: fanartFull16, file: '16-mochaalpaca', name: '' },
      { thumb: fanartThumb17, link: fanartFull17, file: '17-meguminsstaff', name: '' },
      { thumb: fanartThumb18, link: fanartFull18, file: '18-noricchi', name: '' },
      { thumb: fanartThumb19, link: fanartFull19, file: '19-4ply', name: '' },
      { thumb: fanartThumb20, link: fanartFull20, file: '20-sock', name: '' },
      { thumb: fanartThumb21a, link: fanartFull21a, file: '21a-davidesperluminavi', name: '' },
      { thumb: fanartThumb21b, link: fanartFull21b, file: '21b-davidesperluminavi', name: '' },
      { thumb: fanartThumb22, link: fanartFull22, file: '22-zoe', name: '' },
      { thumb: fanartThumb23, link: fanartFull23, file: '23-serverblade', name: '' },
      { thumb: fanartThumb24a, link: fanartFull24a, file: '24a-alphacas', name: '' },
      { thumb: fanartThumb24b, link: fanartFull24b, file: '24b-alphacas', name: '' },
      { thumb: fanartThumb24c, link: fanartFull24c, file: '24c-alphacas', name: '' },
      { thumb: fanartThumb25, link: fanartFull25, file: '25-jesusalberto', name: '' },
      { thumb: fanartThumb26, link: fanartFull26, file: '26-ryuu', name: '' },
      { thumb: fanartThumb27a, link: fanartFull27a, file: '27a-higure', name: '' },
      { thumb: fanartThumb27b, link: fanartFull27b, file: '27b-higure', name: '' },
      { thumb: fanartThumb28a, link: fanartFull28a, file: '28a-sandvich', name: '' },
      { thumb: fanartThumb28b, link: fanartFull28b, file: '28b-sandvich', name: '' },
      { thumb: fanartThumb29, link: fanartFull29, file: '29-rangerradragon', name: '' },
      { thumb: fanartThumb30, link: fanartFull30, file: '30-caveman2488', name: '' },
      { thumb: fanartThumb31, link: fanartFull31, file: '31-moomshine74', name: '' },
      { thumb: fanartThumb32, link: fanartFull32, file: '32-hooman', name: '' },
      { thumb: fanartThumb33, link: fanartFull33, file: '33-ebiray', name: '' },
      { thumb: fanartThumb34, link: fanartFull34, file: '34-alfrysbrown', name: '' },
      { thumb: fanartThumb35, link: fanartFull35, file: '35-rot8', name: '' },
      { thumb: fanartThumb36, link: fanartFull36, file: '36-echosjp', name: '' },
      { thumb: fanartThumb37, link: fanartFull37, file: '37-eaglex197', name: '' },
      { thumb: fanartThumb38, link: fanartFull38, file: '38-st3ll4', name: '' },
      { thumb: fanartThumb39, link: fanartFull39, file: '39-yumih3re', name: '' },
      { thumb: fanartThumb40a, link: fanartFull40a, file: '40a-woody', name: '' },
      { thumb: fanartThumb40b, link: fanartFull40b, file: '40b-woody', name: '' },
      { thumb: fanartThumb40c, link: fanartFull40c, file: '40c-woody', name: '' },
      { thumb: fanartThumb41, link: fanartFull41, file: '41-sleepyfenix', name: '' },
      { thumb: fanartThumb42a, link: fanartFull42a, file: '42a-umicross', name: '' },
      { thumb: fanartThumb42b, link: fanartFull42b, file: '42b-umicross', name: '' },
      { thumb: fanartThumb43, link: fanartFull43, file: '43-formerlycream', name: '' },
      { thumb: fanartThumb44, link: fanartFull44, file: '44-rdg22', name: '' },
      { thumb: fanartThumb45, link: fanartFull45, file: '45-lucaumbriel', name: '' },
      { thumb: fanartThumb46a, link: fanartFull46a, file: '46a-sinefinebelli', name: '' },
      { thumb: fanartThumb46b, link: fanartFull46b, file: '46b-sinefinebelli', name: '' },
      { thumb: fanartThumb47, link: fanartFull47, file: '47-miyazusumire', name: '' },
    ],
    clips: [],
    CanvasImg,
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
      this.fanart = this.fanart.map((fanart) => ({ ...fanart, name: artistNames[fanart.file] }));
      this.$nextTick(() => {
        twemoji.parse(document.body);
      });
    })();
  },
  components: {
    'inner-image-zoom': InnerImageZoom,
  },
};
</script>

<style lang="scss" scoped>
.header {
  width:100%;
  height:0px;
  background:linear-gradient(to right, #907D6F 10%, #E9DCCD 40%, #E9DCCD 60%, #907D6F 90%);
  position:relative;
  .headback {
    width:100%;
    height:30px;
    position:absolute;
    z-index:1;
    /*background-image:url("../assets/header.png");*/
    background-position: center center;
    background-size:140%;
    filter:blur(10px);
  }
  .headbg {
    width:100%;
    height:30px;
    position:absolute;
    z-index:2;
    /*background-image:url("../assets/header.png");*/
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
