import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule} from "@angular/http";

import { AppComponent } from './app.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AboutComponent } from "./components/about/about.component";
import { SearchComponent } from "./components/search/search.component";
import { ArtistComponent } from "./components/artist/artist.component";
import { AlbumComponent } from "./components/album/album.component";
import { SpotifyService } from "./services/spotify.service";


const routes: Routes = [
    { path: "search", component: SearchComponent },
    { path: "about", component: AboutComponent },
    { path: "artist/:id", component: ArtistComponent },
    { path: "album/:id", component: AlbumComponent },
    { path: "", redirectTo: "/search", pathMatch: "full" }
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        ReactiveFormsModule,
        HttpModule
    ],

    declarations: [
        AppComponent,
        NavbarComponent,
        AboutComponent,
        SearchComponent,
        ArtistComponent,
        AlbumComponent
    ],

    providers: [SpotifyService],

    bootstrap: [AppComponent]
})

export class AppModule {}