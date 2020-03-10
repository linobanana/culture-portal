import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { CoreRoutingModule } from 'src/app/core/core-routing.module';
import { FooterComponent } from 'src/app/core/components/footer/footer.component';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { LanguageService } from 'src/app/main/services/language.service';
import { DeveloperCardComponent } from 'src/app/main/components/developer-card/developer-card.component';
import { GalleryComponent } from 'src/app/main/components/gallery/gallery.component';
import { MapComponent } from 'src/app/main/components/map/map.component';
import { MapService } from 'src/app/main/services/map.service';

export default {
  title: 'Components',
  component: [
    HeaderComponent,
    FooterComponent,
    DeveloperCardComponent,
    GalleryComponent,
    MapComponent
  ],
  decorators: [
    moduleMetadata({
        imports: [
          CommonModule,
          CoreRoutingModule,
          MatButtonModule,
          MatMenuModule,
          MatDividerModule,
          MatIconModule,
          MatButtonToggleModule
        ],
        providers: [
          LanguageService,
          MapService
        ]
    })
  ]
};

export const Header = () => ({
  component: HeaderComponent,
  props: {},
});

Header.story = {
  name: 'HeaderComponent',
};

export const Footer = () => ({
  component: FooterComponent,
  props: {},
});

Footer.story = {
  name: 'FooterComponent',
};

export const DevCard = () => ({
  component: DeveloperCardComponent,
  props: {},
});

DevCard.story = {
  name: 'DevCardComponent',
};

export const Gallery = () => ({
  component: GalleryComponent,
  props: {},
});

Gallery.story = {
  name: 'GalleryComponent',
};

export const Map = () => ({
  component: MapComponent,
  props: {},
});

Map.story = {
  name: 'MapComponent',
};
