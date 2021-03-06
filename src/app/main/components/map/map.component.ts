import { Component, Input, OnDestroy, AfterContentInit, OnInit } from '@angular/core';
import { MapService } from '../../services/map.service';
import Location from './../../models/location.model';

declare let ymaps: any; // tslint:disable-line:no-any

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterContentInit, OnDestroy {

  @Input() public incomeLocations: Location[];

  constructor(private _mapService: MapService) { }

  public ngOnInit(): void {
  }

  public ngAfterContentInit(): void {
    ymaps.ready(this._mapService.initMap(this.incomeLocations));
  }

  public ngOnDestroy(): void {
    this._mapService.destroyMap();
  }

}
