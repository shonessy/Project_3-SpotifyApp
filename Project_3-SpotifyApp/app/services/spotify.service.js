"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
let SpotifyService = class SpotifyService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "https://api.spotify.com/v1/";
    }
    searchMusic(searchStr, type = "artist") {
        let url = this.baseUrl + "search?q=" + searchStr + "&type=" + type;
        /*
        //*   Observable<Artist[]>    *
        return this.http.get(url)
            .map((res: Response) => res.json().artists.items
                .map(artistsJsonData => toArtist(artistsJsonData))
            );
        */
        return this.http.get(url)
            .flatMap((res) => res.json().artists.items)
            .map(artistJsonData => this.toArtist(artistJsonData));
    }
    getArtist(artistId) {
        let url = this.baseUrl + "artists/" + artistId;
        return this.http.get(url)
            .map((res) => this.toArtist(res.json()));
    }
    getAlbums(artistId) {
        let url = this.baseUrl + "artists/" + artistId + "/albums";
        return this.http.get(url)
            .flatMap((res) => res.json().items)
            .map(albumJsonData => this.toAlbum(albumJsonData));
    }
    getTracks(albumId) {
        let url = this.baseUrl + "albums/" + albumId;
        return this.http.get(url)
            .flatMap((res) => res.json().tracks.items)
            .map(trackJsonData => this.toTrack(trackJsonData));
    }
    toArtist(artistData) {
        let artist = ({
            id: artistData.id,
            name: artistData.name,
            genres: artistData.genres,
            images: artistData.images,
            albums: [],
        });
        this.getAlbums(artist.id).subscribe(album => {
            artist.albums.push(album);
        });
        console.log("Albums: ", artist.albums);
        return artist;
    }
    toAlbum(albumsData) {
        let album = ({
            id: albumsData.id,
            name: albumsData.name,
            images: albumsData.images,
        });
        return album;
    }
    toTrack(trackData) {
        let track = ({
            id: trackData.id,
            name: trackData.name,
            duration: this.millisToMinutesAndSeconds(trackData.duration_ms),
        });
        return track;
    }
    millisToMinutesAndSeconds(ms) {
        let d = new Date(ms);
        return d.getUTCMinutes() + ':' + d.getUTCSeconds();
    }
};
SpotifyService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SpotifyService);
exports.SpotifyService = SpotifyService;
//# sourceMappingURL=spotify.service.js.map