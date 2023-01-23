import { Piloto } from '../../shared/models/piloto';
import { Component, OnInit } from '@angular/core';
import { DesafioOtus7Service } from '../../shared/service/desafio-otus7.service'

@Component({
  selector: 'app-piloto',
  templateUrl: './piloto.component.html',
  styleUrls: ['./piloto.component.css']
})
export class PilotoComponent implements OnInit {
  pilotos: Piloto[] = []
  piloto: Piloto = {} as Piloto;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private service: DesafioOtus7Service) { }

  ngOnInit() {
    this.obterPilotos()
  }

  obterPilotos(){
    this.service.getDrivers().subscribe((response: any) => {
      response.MRData.DriverTable.Drivers.forEach((element: Piloto) => {
        this.pilotos.push(element)
      });
    },
    (error) =>{
      console.log(error);
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.obterPilotos();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.obterPilotos();
  }
}
