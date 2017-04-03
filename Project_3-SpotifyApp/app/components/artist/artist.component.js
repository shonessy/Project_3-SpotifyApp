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
const spotify_service_1 = require("../../services/spotify.service");
const router_1 = require("@angular/router");
let ArtistComponent = class ArtistComponent {
    constructor(spotifyService, route) {
        this.spotifyService = spotifyService;
        this.route = route;
    }
    ngOnInit() {
        let artistId;
        this.route.params.subscribe(params => {
            artistId = params["id"]; //toString
            this.spotifyService.getArtist(artistId).subscribe(artist => this.artist = artist);
        });
    }
};
ArtistComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'artist',
        templateUrl: "./artist.component.html",
    }),
    __metadata("design:paramtypes", [spotify_service_1.SpotifyService,
        router_1.ActivatedRoute])
], ArtistComponent);
exports.ArtistComponent = ArtistComponent;
//# sourceMappingURL=artist.component.js.map