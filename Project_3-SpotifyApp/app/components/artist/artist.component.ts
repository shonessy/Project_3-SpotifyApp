import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";
import { ActivatedRoute, Params } from "@angular/router";

import { Artist } from "../../Artist";
import { Album } from "../../Album";

@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: "./artist.component.html",
})


export class ArtistComponent implements OnInit {
    artist: Artist;

    constructor(private spotifyService: SpotifyService,
                private route: ActivatedRoute) { }

    ngOnInit() {
        let artistId: string;
        this.route.params.subscribe(params => {
            artistId = params["id"];       //toString
            this.spotifyService.getArtist(artistId).subscribe(artist => this.artist = artist);
        });
    }
}