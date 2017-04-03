import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms"

import { SpotifyService } from "../../services/spotify.service";
import { Artist } from "../../Artist";

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: "./search.component.html",
})


export class SearchComponent {
    musicSearchForm: FormGroup;
    searchResults: Artist[];

    //
    constructor(private fb: FormBuilder,
                private spotifyService: SpotifyService) {
        this.createForm();
    }

    //
    createForm() {
        this.musicSearchForm = this.fb.group({
            searchStr: "",
        });
    }

    //
    searchMusic(): void {
        /*this.spotifyService.searchMusic(this.musicSearchForm.controls.searchStr.value)
            .subscribe(artists => {
                this.searchResults = artists;
                console.log("Artists: ", artists);
            });*/

        this.searchResults = [];
        this.spotifyService.searchMusic(this.musicSearchForm.controls.searchStr.value)
            .subscribe(artist => {
                this.searchResults.push(artist);
            });
        console.log("Artists: ", this.searchResults);
    }
}