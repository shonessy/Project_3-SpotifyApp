import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";

import { Artist } from "../Artist";
import { Album } from "../Album";
import { Track } from "../Track";


@Injectable()
export class SpotifyService {
    private baseUrl: string = "https://api.spotify.com/v1/";

    constructor(private http: Http) { }

    searchMusic(searchStr: string, type: string = "artist"): Observable<Artist> {
        let url: string = this.baseUrl + "search?q=" + searchStr + "&type=" + type;
        /*
        //*   Observable<Artist[]>    *
        return this.http.get(url)
            .map((res: Response) => res.json().artists.items
                .map(artistsJsonData => toArtist(artistsJsonData))
            );
        */
        return this.http.get(url)
                        .flatMap( (res: Response) => res.json().artists.items )
                        .map( artistJsonData => this.toArtist(artistJsonData) );
    }

    getArtist(artistId: string): Observable<Artist> {
        let url: string = this.baseUrl + "artists/" + artistId;
        return this.http.get(url)
                        .map( (res: Response) => this.toArtist(res.json()) );
    }

    getAlbums(artistId: string): Observable<Album> {
        let url: string = this.baseUrl + "artists/" + artistId + "/albums";
        return this.http.get(url)
            .flatMap((res: Response) => res.json().items)
            .map(albumJsonData => this.toAlbum(albumJsonData));
    }

    getTracks(albumId: string): Observable<Track> {
        let url: string = this.baseUrl + "albums/" + albumId;
        return this.http.get(url)
            .flatMap((res: Response) => res.json().tracks.items)
            .map(trackJsonData => this.toTrack(trackJsonData));
    }

    toArtist(artistData: any): Artist {
    let artist = <Artist>({
        id: artistData.id,
        name: artistData.name,
        genres: artistData.genres,
        images: artistData.images,
        albums: [],             //initialize
        });
    this.getAlbums(artist.id).subscribe(album => {
        artist.albums.push(album);
    });
    console.log("Albums: ", artist.albums);
    return artist;
    }

    toAlbum(albumsData: any): Album {
    let album = <Album>({
        id: albumsData.id,
        name: albumsData.name,
        images: albumsData.images,
        });
    return album;
    }

    toTrack(trackData: any): Track {
        let track = <Track>({
            id: trackData.id,
            name: trackData.name,
            duration: this.millisToMinutesAndSeconds(trackData.duration_ms),
        });
        return track;
    }

    millisToMinutesAndSeconds(ms) {
        let d = new Date(ms);
        return d.getUTCMinutes() + ':'  + d.getUTCSeconds();
    }

}



