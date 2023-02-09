import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VariationService } from './services/variation.service';

@Component({
  selector: 'app-variation',
  templateUrl: './variation.component.html',
  styleUrls: ['./variation.component.scss']
})
export class VariationComponent implements OnInit {
  currentActive: string = 'PETR4.SA';
  response: any = undefined;

  constructor(
    private variationService: VariationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => this.currentActive = params['active']);
    this.getActiveChart(this.currentActive);
  }

  getActiveChart(active: string) {
    this.variationService.getChart(active).subscribe((res: any) => {
      this.response = res;
    });
  }
}
