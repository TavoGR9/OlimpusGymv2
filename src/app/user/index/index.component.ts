import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanService } from 'src/app/servicios/plan.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
  plan: any;
  constructor(private router: Router,  private planService:PlanService) {

  }

  ngOnInit(): void {
    this.planService.obternerPlan().subscribe(respuesta=>{console.log(respuesta)
    this.plan=respuesta;
    });
  }
  navegarPagina(url: String): void {
    console.log("Va a navegar", url);

    this.router.navigate([ url ]);
  }
}
