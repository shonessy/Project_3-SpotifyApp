import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "../../services/spotify.service";
import { ActivatedRoute, Params } from "@angular/router";

import { Track } from "../../Track";

@Component({
    moduleId: module.id,
    selector: 'album',
    templateUrl: "./album.component.html",
})

export class AlbumComponent implements OnInit {
    tracks: Track[] = [];

    constructor(private spotifyService: SpotifyService,
                private route: ActivatedRoute) { }

    ngOnInit() {
        let albumId: string;
        this.route.params.subscribe(params => {
            albumId = params["id"];
            this.spotifyService.getTracks(albumId).subscribe(track => this.tracks.push(track));
        });
    }

}