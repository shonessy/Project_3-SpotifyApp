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
const forms_1 = require("@angular/forms");
const spotify_service_1 = require("../../services/spotify.service");
let SearchComponent = class SearchComponent {
    //
    constructor(fb, spotifyService) {
        this.fb = fb;
        this.spotifyService = spotifyService;
        this.createForm();
    }
    //
    createForm() {
        this.musicSearchForm = this.fb.group({
            searchStr: "",
        });
    }
    //
    searchMusic() {
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
};
SearchComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'search',
        templateUrl: "./search.component.html",
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        spotify_service_1.SpotifyService])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map