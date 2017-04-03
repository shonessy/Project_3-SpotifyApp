"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const router_1 = require("@angular/router");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/http");
const app_component_1 = require("./app.component");
const navbar_component_1 = require("./components/navbar/navbar.component");
const about_component_1 = require("./components/about/about.component");
const search_component_1 = require("./components/search/search.component");
const artist_component_1 = require("./components/artist/artist.component");
const album_component_1 = require("./components/album/album.component");
const spotify_service_1 = require("./services/spotify.service");
const routes = [
    { path: "search", component: search_component_1.SearchComponent },
    { path: "about", component: about_component_1.AboutComponent },
    { path: "artist/:id", component: artist_component_1.ArtistComponent },
    { path: "album/:id", component: album_component_1.AlbumComponent },
    { path: "", redirectTo: "/search", pathMatch: "full" }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes),
            forms_1.ReactiveFormsModule,
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            navbar_component_1.NavbarComponent,
            about_component_1.AboutComponent,
            search_component_1.SearchComponent,
            artist_component_1.ArtistComponent,
            album_component_1.AlbumComponent
        ],
        providers: [spotify_service_1.SpotifyService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map