import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { KitComponent } from './kit/kit.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { WinterHandicapComponent } from './events/winter-handicap/winter-handicap.component';
import { TemplateComponent } from './template/template.component';
import { CommitteeComponent } from './about/committee/committee.component';
import { ContactSubmittedComponent } from './contact-submitted/contact-submitted.component';
import { SocialEventsComponent } from './events/social-events/social-events.component';
import { ClubRunsAndTrainingComponent } from './events/club-runs-and-training/club-runs-and-training.component';
import { SummerHandicapComponent } from './events/summer-handicap/summer-handicap.component';
import { ClubChampionshipComponent } from './events/club-championship/club-championship.component';
import { ImageBannerComponent } from './image-banner/image-banner.component';

const appRoutes: Routes = [
  {
    path: 'events',
    component: EventsComponent,
    data: { title: 'Events' },
    children: [
      {
        path:'',
        redirectTo: 'club-runs-and-training',
        pathMatch: 'full' 
      },
      {
        path: 'winter-handicap',
        component: WinterHandicapComponent,
        data: { title: 'Winter Handicap' },
        pathMatch: 'prefix'
      },
      {
        path: 'summer-handicap',
        component: SummerHandicapComponent,
        data: { title: 'Summer Handicap' },
        pathMatch: 'prefix'
      },
      {
        path: 'club-runs-and-training',
        component: ClubRunsAndTrainingComponent,
        data: { title: 'Club Runs & Training' },
        pathMatch: 'prefix'
      },
      {
        path: 'club-championship',
        component: ClubChampionshipComponent,
        data: { title: 'Club Championship' },
        pathMatch: 'prefix'
      },
      {
        path: 'social-events',
        component: SocialEventsComponent,
        data: { title: 'Social Events' },
        pathMatch: 'prefix'
      },
    ]
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About' },
  },
  {
    path: 'about/committee',
    component: CommitteeComponent,
    data: { title: 'Committee' },
    pathMatch: 'prefix'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' },
    pathMatch: 'prefix'
  },
  {
    path: 'kit',
    component: KitComponent,
    data: { title: 'Kit' },
    pathMatch: 'prefix'
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    data: { title: 'Gallery' },
    pathMatch: 'prefix'
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact' },
    pathMatch: 'prefix'
  },
  {
    path: 'contact-submitted',
    component: ContactSubmittedComponent,
    data: { title: 'Contact' },
    pathMatch: 'prefix'
  },
  {
    path: 'social-media',
    component: SocialMediaComponent,
    data: { title: 'Social Media' },
    pathMatch: 'prefix'
  },
  {
    path: 'events.html',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    HomeComponent,
    AboutComponent,
    KitComponent,
    GalleryComponent,
    PageNotFoundComponent,
    ContactComponent,
    SocialMediaComponent,
    WinterHandicapComponent,
    TemplateComponent,
    CommitteeComponent,
    ContactSubmittedComponent,
    SocialEventsComponent,
    ClubRunsAndTrainingComponent,
    SummerHandicapComponent,
    ClubChampionshipComponent,
    ImageBannerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
